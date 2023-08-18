const express = require("express");
const router = express.Router();
const fetch = require('node-fetch')
const axios = require('axios')


router.get('/api/wallpaper/programming', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/programming.json')
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

router.get('/api/wallpaper/pegunungan', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/mountain.json')
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

router.get('/api/wallpaper/cyberspace', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/cyberspace.json')
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

router.get('/api/wallpaper/pegunungan', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/mountain.json')
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

router.get('/api/wallpaper/teknologi', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/technology.json')
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


module.exports = router;