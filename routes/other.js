const express = require("express");
const router = express.Router();
const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const { getWeather } = require("weathers-watch");


function quotesAnime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}
router.get("/api/quotes/anime", async(req, res) => {
  var result = await quotesAnime()
  res.json({
    status: 200,
    creator: 'SatganzDevs',
    result: result
  })
})

router.get("/api/kbbi", async(req, res) => {
  var sult = await fetch(`https://kamus-kbbi.cyclic.app/entri/${req.query.kata}`)
  var result = await sult.json()
  res.json({
    result
  })
})
router.get("/api/cuaca", async(req, res) => {
var result = await getWeather(req.query.city, req.query.country);
  res.json({
    result
  })
})
router.get("/api/simi", async (req, res) => {
  let message = req.query.message;

  if (!message) {
    return res.status(400).json({
      status: 400,
      message: 'Masukkan pesan!'
    });
  }


  try {
    let response = await fetch(`https://simsimi.fun/api/v2/?mode=talk&lang=id&message=${message}&filter=false`);
    let results = await response.json();

    if (results.success) {
      res.status(200).json({
        status: 200,
        creator: 'SatganzDevs',
        message: results.success
      });
    } else {
      res.status(500).json({
        status: 500,
        message: 'Terjadi kesalahan saat berbicara dengan Simi'
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Terjadi kesalahan saat berbicara dengan Simi'
    });
  }
});


module.exports = router;