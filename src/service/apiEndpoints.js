// file to handle all api endpoints
// this file contains objects with endpoints defined



// combine getAllCoins and getAllCoinsByVolume api for table
export const CoinDetails = {
    getAllCoins: {
        api: 'coinParams.json',
        method: 'get',
        baseURL: 'normal',
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
    }
}