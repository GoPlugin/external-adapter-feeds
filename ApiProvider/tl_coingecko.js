const { Requester, Validator } = require('@goplugin/external-adapter')
require("dotenv").config();

const customError = (data) => {
  if (data.Response === 'Error') return true
  return false
}

const Request_TL_Coingecko = (input, provider, callback) => {
  console.log("API Provider Source :", provider);

  var dataString = { "ids": `${input.data._fsyms}`, "vs_currencies": `${input.data._tsyms}` };

  const config = {
    method: "POST",
    data: dataString,
  }

  if (process.env.API_KEY && process.env.COINGECKO_TL_URL) {
    config.headers = {
      "api-key": process.env.API_KEY
    }
    config.url = process.env.COINGECKO_TL_URL;
  }
  Requester.request(config, customError)
    .then(response => {
      const res = {
        data: {
          "result": response.data[`${input.data._fsyms.toLowerCase()}`][`${input.data._tsyms.toLowerCase()}`].toString()
        }
      }
      callback(response.status, Requester.success(input.id, res));
    })
    .catch(error => {
      callback(500, Requester.errored(input.id, error))
    })
}

module.exports.Request_TL_Coingecko = Request_TL_Coingecko