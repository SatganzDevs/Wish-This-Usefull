const express = require("express");
const router = express.Router();
const axios = require('axios')
const cheerio = require('cheerio')


const pindl = async(url) => {
  try {
    let form = new URLSearchParams();
    form.append("url", url);
    let html = await (
      await fetch("https://pinterestvideodownloader.com/", {
        method: "POST",
        body: form,
      })
    ).text();
    const $ = cheerio.load(html);
    const videoSrc = $('video').attr('src');
    if (videoSrc) {
      return { status: true, creator: 'SatganzDevs', videoUrl: videoSrc };
    } else {
      return { status: false, error: "Video not found" };
    }
  } catch (error) {
    return { status: false, error: error.message };
  }
}
const scdl = async(link) => {
      return new Promise((resolve, reject) => {
        const options = {
          method: "POST",
          url: "https://www.klickaud.co/download.php",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
          },
          formData: {
            value: link,
            "2311a6d881b099dc3820600739d52e64a1e6dcfe55097b5c7c649088c4e50c37":
              "710c08f2ba36bd969d1cbc68f59797421fcf90ca7cd398f78d67dfd8c3e554e3",
          },
        };
        request(options, async function (error, response, body) {
          console.log(body);
          if (error) throw new Error(error);
          const $ = cheerio.load(body);
          resolve({
            status: 200,
            creator: 'SatganzDevs',
            judul: $(
              "#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)"
            ).text(),
            download_count: $(
              "#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(3)"
            ).text(),
            thumb: $(
              "#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img"
            ).attr("src"),
            link: $("#dlMP3")
              .attr("onclick")
              .split(`downloadFile('`)[1]
              .split(`',`)[0],
          });
        });
      });
    }

const xnxxsearch = async(query) => {
      return new Promise((resolve, reject) => {
        const baseurl = "https://www.xnxx.com";
        fetch(
          `${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`,
          { method: "get" }
        )
          .then((res) => res.text())
          .then((res) => {
            let $ = cheerio.load(res, {
              xmlMode: false,
            });
            let titles = [];
            let urls = [];
            let descs = [];
            let results = [];
            $("div.mozaique").each(function (a, b) {
              $(b)
                .find("div.thumb")
                .each(function (c, d) {
                  urls.push(
                    baseurl +
                      $(d).find("a").attr("href").replace("/THUMBNUM/", "/")
                  );
                });
            });
            $("div.mozaique").each(function (a, b) {
              $(b)
                .find("div.thumb-under")
                .each(function (c, d) {
                  descs.push($(d).find("p.metadata").text());
                  $(d)
                    .find("a")
                    .each(function (e, f) {
                      titles.push($(f).attr("title"));
                    });
                });
            });
            for (let i = 0; i < titles.length; i++) {
              results.push({
                status: 200,
                creator: 'SatganzDevs',
                title: titles[i],
                info: descs[i],
                link: urls[i],
              });
            }
            resolve({
              title: titles[0],
              info: descs[0],
              link: urls[0],
            });
          })
          .catch((err) => reject({ code: 503, status: false, result: err }));
      });
    }
    const xnxxdl = async(URL) => {
      return new Promise((resolve, reject) => {
        fetch(URL, { method: "get" })
          .then((res) => res.text())
          .then((res) => {
            let $ = cheerio.load(res, {
              xmlMode: false,
            });
            const title = $('meta[property="og:title"]').attr("content");
            const duration = $('meta[property="og:duration"]').attr("content");
            const image = $('meta[property="og:image"]').attr("content");
            const videoType = $('meta[property="og:video:type"]').attr(
              "content"
            );
            const videoWidth = $('meta[property="og:video:width"]').attr(
              "content"
            );
            const videoHeight = $('meta[property="og:video:height"]').attr(
              "content"
            );
            const info = $("span.metadata").text();
            const videoScript = $(
              "#video-player-bg > script:nth-child(6)"
            ).html();
            const files = {
              low: (videoScript.match(
                "html5player.setVideoUrlLow\\('(.*?)'\\);"
              ) || [])[1],
              high: videoScript.match(
                "html5player.setVideoUrlHigh\\('(.*?)'\\);" || []
              )[1],
              HLS: videoScript.match(
                "html5player.setVideoHLS\\('(.*?)'\\);" || []
              )[1],
              thumb: videoScript.match(
                "html5player.setThumbUrl\\('(.*?)'\\);" || []
              )[1],
              thumb69: videoScript.match(
                "html5player.setThumbUrl169\\('(.*?)'\\);" || []
              )[1],
              thumbSlide: videoScript.match(
                "html5player.setThumbSlide\\('(.*?)'\\);" || []
              )[1],
              thumbSlideBig: videoScript.match(
                "html5player.setThumbSlideBig\\('(.*?)'\\);" || []
              )[1],
            };
            resolve({
              status: 200,
              creator: 'SatganzDevs',
              title,
              URL,
              duration,
              image,
              videoType,
              videoWidth,
              videoHeight,
              info,
              files,
            });
          })
          .catch((err) => reject({ code: 503, status: false, result: err }));
      });
    }

router.get("/api/xnxxsearch", async(req, res) => {
let query = req.query
  if (!query) {
    return res.status(500).json({
      status: 500,
      message: 'Masukkan query pencarian!'
    });
  }
 let result = await xnxxsearch(query)
    res.json({result})
}) 

router.get("/api/xnxxdl", async(req, res) => {
let url = req.query.url
  if (!url) {
    return res.status(500).json({
    status: 500,
    message: 'masukan url video!'
  })
  }
 let result = await xnxxdl(url)
    res.json({result})
}) 

router.get("/api/pinterestdl", async(req, res) => {
let url = req.query.url
  if (!url) {
    return res.status(500).json({
    status: 500,
    message: 'masukan url video!'
  })
  }
 let result = await pindl(url)
    res.json({result})
}) 

router.get("/api/scdl", async(req, res) => {
let url = req.query.url
  if (!url) {
    return res.status(500).json({
    status: 500,
    message: 'masukan url video!'
  })
  }
 let result = await scdl(url)
    res.json({result})
}) 

module.exports = router;