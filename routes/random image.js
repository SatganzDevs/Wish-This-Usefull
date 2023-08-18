const express = require("express");
const router = express.Router();
const fetch = require('node-fetch')
const axios = require('axios')



router.get("/api/random/darkjokes", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Image/darkjokes.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/random/waifu", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/waifu.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/akira", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/akira.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/akiyama", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/akiyama.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/ana", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/ana.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/asuna", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/asuna.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/ayuzawa", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/ayuzawa.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/boruto", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/boruto.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/chitoge", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/chitoge.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/deidara", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/deidara.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/doraemon", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/doraemon.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/elaina", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/elaina.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/emilia", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/emilia.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/erza", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/erza.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/gremory", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/gremory.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/hestia", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/hestia.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/hinata", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/hinata.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/inori", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/inori.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/izuzu", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/izuzu.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/itachi", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/itachi.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/itori", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/itori.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/kaga", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/kaga.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/kagura", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/kagura.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/kakasih", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/kakasih.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/kaori", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/kaori.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/kaneki", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/kaneki.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/kotori", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/kotori.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/kurumi", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/kurumi.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/loli", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/loli.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/madara", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/madara.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/mikasa", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/mikasa.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/miku", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/miku.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/minato", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/minato.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/naruto", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/naruto.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/nezuko", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/nezuko.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/onepiece", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/onepiece.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/pokemon", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/pokemon.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/rize", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/rize.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/sagiri", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/sagiri.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/sakura", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/sakura.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/sasuke", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/sasuke.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/shina", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/shina.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/shinka", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/shinka.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/shizuka", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/shizuka.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/shota", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/shota.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/toukachan", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/toukachan.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/tsunade", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/tsunade.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime/yuki", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/yuki.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/api/anime", async(req, res) => {
let kontol =`
akira
akiyama
ana
asuna
ayuzawa
boruto
chitoge
deidara
doraemon
elaina
emilia
erza
gremory
hestia
hinata
inori
isuzu
itachi
itori
kaga
kagura
kakasih
kaori
keneki
kotori
kurumi
loli
madara
mikasa
miku
minato
naruto
nezuko
onepiece
pokemon
rize
sagiri
sakura
sasuke
shina
shinka
shizuka
shota
toukachan
tsunade
yuki
`
  
res.json({
  status: 400,
  creator: 'SatganzDevs',
  notification: `penggunaan salah!\nContoh penggunaan : api/anime/madara`,
  message: `list Character:\n\n${kontol}`
})
})


module.exports = router;