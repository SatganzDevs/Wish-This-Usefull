const express = require("express");
const router = express.Router();
const fetch = require('node-fetch')
const axios = require('axios')


router.get('/api/stiker/amongus', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Sticker/among.json')
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

router.get('/api/stiker/anime', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Sticker/animestick.json')
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

router.get('/api/stiker/mukalu', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Sticker/mukalu.json')
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

router.get('/api/stiker/doge', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Sticker/doge.json')
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

router.get('/api/stiker/paimon', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Sticker/paimon.json')
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

router.get('/api/stiker/patrick', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Sticker/patrick.json')
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