const createRequest = require('./index').createRequest
const constants = require('./constants');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.EA_PORT || 5001

app.use(bodyParser.json())

app.post(constants.TL_CRYPTO_COMPARE, (req, res) => {
  console.log("request value is",req.body)
  createRequest(req.body,constants.TL_CRYPTO_COMPARE,(status, result) => {
    console.log('Result: ', result)
    res.status(status).json(result)
  })
})

app.post(constants.TL_BINANCE, (req, res) => {
  console.log("request value is",req.body)
  createRequest(req.body,constants.TL_BINANCE,(status, result) => {
    console.log('Result: ', result)
    res.status(status).json(result)
  })
})

app.post(constants.TL_ZYLALABS, (req, res) => {
  console.log("request value is",req.body)
  createRequest(req.body,constants.TL_ZYLALABS,(status, result) => {
    console.log('Result: ', result)
    res.status(status).json(result)
  })
})

app.post(constants.TL_COINGECKO, (req, res) => {
  console.log("request value is",req.body)
  createRequest(req.body,constants.TL_COINGECKO,(status, result) => {
    console.log('Result: ', result)
    res.status(status).json(result)
  })
})

app.post(constants.TL_COINMARKETCAP, (req, res) => {
  console.log("request value is",req.body)
  createRequest(req.body,constants.TL_COINMARKETCAP,(status, result) => {
    console.log('Result: ', result)
    res.status(status).json(result)
  })
})

app.post(constants.TL_COINLAYER, (req, res) => {
  console.log("request value is",req.body)
  createRequest(req.body,constants.TL_COINLAYER,(status, result) => {
    console.log('Result: ', result)
    res.status(status).json(result)
  })
})

app.post(constants.TL_COINCAP, (req, res) => {
  console.log("request value is",req.body)
  createRequest(req.body,constants.TL_COINCAP,(status, result) => {
    console.log('Result: ', result)
    res.status(status).json(result)
  })
})

app.post(constants.TL_TRADERMADE, (req, res) => {
  console.log("request value is",req.body)
  createRequest(req.body,constants.TL_TRADERMADE,(status, result) => {
    console.log('Result: ', result)
    res.status(status).json(result)
  })
})

app.post(constants.TL_KUCOIN, (req, res) => {
  console.log("request value is",req.body)
  createRequest(req.body,constants.TL_KUCOIN,(status, result) => {
    console.log('Result: ', result)
    res.status(status).json(result)
  })
})
app.listen(port, () => console.log(`Listening on port ${port}!`))