// file to handle all api endpoints
// this file contains objects with endpoints defined



// combine getAllCoins and getAllCoinsByVolume api for table
export const CoinDetails = {
    // getAllCoins: {
    //     api: 'coinParams.json',
    //     method: 'get',
    //     baseURL: 'normal',
    // },
    getAllCoins: {
        api: '',
        method: 'get',
        baseURL: 'coingecko',
        params:{
            vs_currency:"usd"
        }
    },
    getAllCoinsByVolume:{
        api: 'getTickerWithVolume',
        method: 'get',
        baseURL: 'normal', 
    },
    getCoinDetailById:{
        api: '',
        method: '',
        baseURL: '', 
    },
    getCoinsByPage:{
        api: '',
        method: 'get',
        baseURL: 'coingecko',
        params:{
            vs_currency:"usd"
        }
    }
    
}