const { Requester, Validator } = require('@goplugin/external-adapter')
require("dotenv").config();

const customError = (data) => {
  if (data.Response === 'Error') return true
  return false
}

const Request_TL_CoinCap = (input, provider, callback) => {
  console.log("API Provider Source :", provider);

  var dataString = { "baseSymbol": `${input.data._fsyms}`, "quoteSymbol": `${input.data._tsyms}`, "limit": 1 };
  const config = {
    method: "POST",
    data: dataString,
  }

  if (process.env.API_KEY && process.env.COINCAP_TL_URL) {
    config.headers = {
      "api-key": process.env.API_KEY
    }
    config.url = process.env.COINCAP_TL_URL;
  }
  Requester.request(config, customError)
    .then(response => {
      const res = {
        data: {
          "result": response.data.data[0]["priceQuote"].toString()
        }
      }
      callback(response.status, Requester.success(input.id, res));
    })
    .catch(error => {
      callback(500, Requester.errored(input.id, error))
    })
}

module.exports.Request_TL_CoinCap = Request_TL_CoinCap