const { Requester, Validator } = require('@goplugin/external-adapter')
require("dotenv").config();

const customError = (data) => {
  if (data.Response === 'Error') return true
  return false
}

const Request_TL_TraderMade = (input, provider, callback) => {
  console.log("API Provider Source :", provider);

  var dataString = { "from": `${input.data._fsyms}`, "to": `${input.data._tsyms}`, "amount": 1 };
  const config = {
    method: "POST",
    data: dataString,
  }

  if (process.env.API_KEY && process.env.TRADERMADE_TL_URL) {
    config.headers = {
      "api-key": process.env.API_KEY
    }
    config.url = process.env.TRADERMADE_TL_URL;
  }
  Requester.request(config, customError)
    .then(response => {
      const res = {
        data: {
          "result": response.data['quote'].toString()
        }
      }
      callback(response.status, Requester.success(input.id, res));
    })
    .catch(error => {
      callback(500, Requester.errored(input.id, error))
    })
}

module.exports.Request_TL_TraderMade = Request_TL_TraderMade