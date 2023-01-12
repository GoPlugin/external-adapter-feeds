const { Requester, Validator } = require('@goplugin/external-adapter')
require("dotenv").config();

const customError = (data) => {
  if (data.Response === 'Error') return true
  return false
}

const Request_TL_Cryptocompare = (input, provider, callback) => {
  console.log("API Provider Source :", provider);

  var dataString = { "fsyms": `${input.data._fsyms}`, "tsyms": `${input.data._tsyms}` };
  const config = {
    method: "POST",
    data: dataString,
  }

  if (process.env.API_KEY && process.env.CRYPTOCOMPARE_TL_URL) {
    config.headers = {
      "api-key": process.env.API_KEY
    }
    config.url = process.env.CRYPTOCOMPARE_TL_URL;
  }
  Requester.request(config, customError)
    .then(response => {
      const res = {
        data: {
          "result": response.data[`${input.data._fsyms}`][`${input.data._tsyms}`].toString()
        }
      }
      callback(response.status, Requester.success(input.id, res));
    })
    .catch(error => {
      callback(500, Requester.errored(input.id, error))
    })
}

module.exports.Request_TL_Cryptocompare = Request_TL_Cryptocompare
