const { Requester, Validator } = require('@goplugin/external-adapter')
require("dotenv").config();

const customError = (data) => {
  if (data.Response === 'Error') return true
  return false
}

const Request_TL_Binance = (input, provider, callback) => {
  console.log("API Provider Source :", provider);

  var dataString = { "symbol": `${input.data._fsyms}${input.data._tsyms}` };

  const config = {
    method: "POST",
    data: dataString,
  }

  if (process.env.API_KEY && process.env.BINANCE_TL_URL) {
    config.headers = {
      "api-key": process.env.API_KEY
    }
    config.url = process.env.BINANCE_TL_URL;
  }
  Requester.request(config, customError)
    .then(response => {
      console.log("res", response)
      const res = {
        data: {
          "result": response.data.price.toString()
        }
      }
      callback(response.status, Requester.success(input.id, res));
    })
    .catch(error => {
      callback(500, Requester.errored(input.id, error))
    })
}

module.exports.Request_TL_Binance = Request_TL_Binance