const { Requester, Validator } = require('@goplugin/external-adapter')
require("dotenv").config();

const customError = (data) => {
  if (data.Response === 'Error') return true
  return false
}

const Request_TL_CoinLayer = (input, provider, callback) => {
  console.log("API Provider Source :", provider);
  const url = `https://goplugin.apidiscovery.teejlab.com/edsn/api/gateway?endpoint_id=aTHHVVb`

  var dataString = { "symbols": `${input.data._fsyms}`, "target": `${input.data._tsyms}` };
  const config = {
    url,
    method: "POST",
    data: dataString,
  }

  if (process.env.API_KEY) {
    config.headers = {
      "api-key": process.env.API_KEY
    }
  }
  Requester.request(config, customError)
    .then(response => {
      const res = {
        data: {
          "result": response.data["rates"][`${input.data._fsyms}`].toString()

        }
      }
      callback(response.status, Requester.success(input.id, res));
    })
    .catch(error => {
      callback(500, Requester.errored(input.id, error))
    })
}

module.exports.Request_TL_CoinLayer = Request_TL_CoinLayer
