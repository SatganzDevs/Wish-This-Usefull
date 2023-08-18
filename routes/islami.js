const express = require("express");
const router = express.Router();
const fetch = require('node-fetch')
const axios = require('axios')


router.get("/api/kisahnabi", async (req, res) => {
  let nama_nabi = req.query.nabi
  if (!nama_nabi) {
    return res.status(400).json({
      message:'masukan nama nabi'
    })
  }
  let re = await fetch(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Islami/${nama_nabi}.json`)
  let result = await re.json()
  res.json({
    status: 200,
    creator: 'SatganzDevs',
    result
  })
})

module.exports = router;