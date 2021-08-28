const axios = require('axios');

function sendRestRequestWithHeader(opts) {

    return axios.get(opts.uri)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error;
        })
}

module.exports = sendRestRequestWithHeader;