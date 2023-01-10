const constants = require('./constants')
const Request_TL_Cryptocompare = require('./ApiProvider/tl_cryptocompare').Request_TL_Cryptocompare
const Request_TL_Binance = require('./ApiProvider/tl_binance').Request_TL_Binance
const Request_TL_Zylalabs = require('./ApiProvider/tl_zylalabs').Request_TL_Zylalabs
const Request_TL_Coingecko = require('./ApiProvider/tl_coingecko').Request_TL_Coingecko
const Request_TL_CoinMarketCap = require('./ApiProvider/tl_coinmarketcap').Request_TL_CoinMarketCap
const Request_TL_CoinLayer = require('./ApiProvider/tl_coinlayer').Request_TL_CoinLayer
const Request_TL_CoinCap = require('./ApiProvider/tl_coincap').Request_TL_CoinCap
const Request_TL_TraderMade = require('./ApiProvider/tl_tradermade').Request_TL_TraderMade
const Request_TL_Kucoin = require('./ApiProvider/tl_kucoin').Request_TL_Kucoin

const createRequest = (input,provider,callback) => {

    if(provider === constants.TL_CRYPTO_COMPARE)
    {
        Request_TL_Cryptocompare(input,provider,callback); // testing
    }
    else if(provider === constants.TL_BINANCE)
    {
        Request_TL_Binance(input,provider,callback);
    }
    else if(provider === constants.TL_ZYLALABS)
    {
        Request_TL_Zylalabs(input,provider,callback);
    }
    else if(provider === constants.TL_COINGECKO)
    {
        Request_TL_Coingecko(input,provider,callback);
    }
    else if(provider === constants.TL_COINMARKETCAP)
    {
        Request_TL_CoinMarketCap(input,provider,callback);
    }
    else if(provider === constants.TL_COINLAYER)
    {
        Request_TL_CoinLayer(input,provider,callback);
    }
    else if(provider === constants.TL_COINCAP)
    {
        Request_TL_CoinCap(input,provider,callback);
    }
    else if(provider === constants.TL_TRADERMADE)
    {
        Request_TL_TraderMade(input,provider,callback);
    }
    else if(provider === constants.TL_KUCOIN)
    {
        Request_TL_Kucoin(input,provider,callback);
    }
}

module.exports.createRequest = createRequest


