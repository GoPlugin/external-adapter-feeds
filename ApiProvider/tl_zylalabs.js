const { Requester, Validator } = require('@goplugin/external-adapter')
require("dotenv").config();

const customError = (data) => {
  if (data.Response === 'Error') return true
  return false
}

const Request_TL_Zylalabs = (input, provider, callback) => {
  console.log("API Provider Source :", provider);

  var dataString = { "base": `${input.data._fsyms}` };
  const config = {
    method: "POST",
    data: dataString,
  }

  if (process.env.API_KEY && process.env.ZYLALABS_TL_URL) {
    config.headers = {
      "api-key": process.env.API_KEY
    }
    config.url = process.env.ZYLALABS_TL_URL;
  }
  Requester.request(config, customError)
    .then(response => {
      const res = {
        data: {
          "result": response.data.data.rates[`${input.data._tsyms}`].toString()
        }
      }
      callback(response.status, Requester.success(input.id, res));
    })
    .catch(error => {
      callback(500, Requester.errored(input.id, error))
    })
}

module.exports.Request_TL_Zylalabs = Request_TL_Zylalabs
