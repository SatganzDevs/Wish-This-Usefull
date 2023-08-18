const express = require("express");
const router = express.Router();
const axios = require('axios')
const cheerio = require('cheerio')

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]};





router.get("/api/quotes/islami", async (req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/SatganzDevs/DataApi/main/random/quotesislam.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'SatganzDevs'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})

router.get("/api/quotes/dilan", async(req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random/dilan.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'SatganzDevs'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})

router.get("/api/quotes/galau", async(req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random/galau.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'SatganzDevs'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})

router.get("/api/quotes/motivasi", async(req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random/motivasi.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'SatganzDevs'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})

router.get("/api/quotes/senja", async(req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random/senja.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'SatganzDevs'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})

router.get("/api/quotes/bacot", async(req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random/bacot.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'SatganzDevs'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})

router.get("/api/quotes/katailham", async(req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random/katailham.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'SatganzDevs'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})

router.get("/api/gombal", async(req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random/gombal.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'SatganzDevs'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})


module.exports = router;