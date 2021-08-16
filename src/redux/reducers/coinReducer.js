import {actionTypes} from '../actionTypes';


const initialState = {
    coinsList : [],
    appliedFilters:[],
    filteredCoinList:[],
    progressState:true
}

// coinsList is source of truth and filteredCoinList is used to render list

export const coinReducer = (state = initialState,action)=>{
    const {  coinId,
        index} = action.payload || {}
    switch(action.type){
        case actionTypes.GET_ALL_COINS:
            // while fetching all coins
            // cross check with favorites list in local storage
            const favorites = action?.payload?.favorites;
            const newListAddfavToRedux = action.payload.data.map(singleCoinObj=>{
                if(favorites.includes(singleCoinObj.id)) {
                    singleCoinObj.favorite = true
                }
                return singleCoinObj
            })
            return {
                ...state,
                coinsList:action.payload.data,
                filteredCoinList:[...newListAddfavToRedux],
                progressState:false
            }
        case actionTypes.FILTER_BY_COIN_NAME:
        const oldStateCopy = Object.assign({},state);
        const oldListCopy = oldStateCopy.coinsList;
        console.log('actionTypes.FILTER_BY_COIN_NAME',oldListCopy)
        const userEnteredValue = action.userEnteredValue;
        const newCoinList = oldListCopy.filter((coin)=>coin.name.toLowerCase().includes(userEnteredValue));
        const appliedFiltersCopy = [...state.appliedFilters];
        if(userEnteredValue){
            // const indexof  = appliedFiltersCopy.indexOf(actionTypes.FILTER_BY_COIN_NAME);
            // if(indexof===-1) appliedFiltersCopy.push(actionTypes.FILTER_BY_COIN_NAME)
            oldStateCopy.coinsList = newCoinList;
        }else{
            oldStateCopy.coinsList = [...state.coinsList]
        }
            return{
                ...state,
                // // coinsList:newCoinList
                filteredCoinList:[...oldStateCopy.coinsList],
                progressState:false
                // ...oldStateCopy
            }
        case actionTypes.FILTER_BY_COIN_PRICE:
            console.log('FILTER_BY_COIN_PRICE')
            const newState = Object.assign({},state);
            const newList = newState.coinsList.sort((coinA,coinB)=>{
                if(coinA.current_price > coinB.current_price) return 1;
                
                if(coinA.current_price < coinB.current_price) return -1;
                
                return 0
                
            });
            return {
                ...state,
                filteredCoinList:[...newList],
                progressState:false
            }
            case actionTypes.FILTER_BY_COIN_VOLUME:
            const newStateforVolume = Object.assign({},state);
            const newListforVolume =newStateforVolume.coinsList.sort((coinA,coinB)=>{
                if(coinA.total_supply > coinB.total_supply) return 1;
                
                if(coinA.total_supply < coinB.total_supply) return -1;
                
                return 0
                
            });
            return {
                ...state,
                filteredCoinList:[...newListforVolume],
                progressState:false
            }
            case actionTypes.FILTER_BY_PRICE_PERCENT_CHANGE:
                const newStateforPercent = Object.assign({},state);
                const newListforPercent =newStateforPercent.coinsList.sort((coinA,coinB)=>{
                    if(coinA.price_change_percentage_24h > coinB.price_change_percentage_24h) return 1;
                    
                    if(coinA.price_change_percentage_24h < coinB.price_change_percentage_24h) return -1;
                    
                    return 0
                    
                });
                return {
                    ...state,
                    filteredCoinList:[...newListforPercent],
                    progressState:false
                }
            case actionTypes.ADD_COIN_TO_FAVORITES:
                // console.log(action.payload);
                const newStateForFavorites = Object.assign({},state);
                const newListAddToFav = newStateForFavorites.filteredCoinList.map(singleCoinObj=>{
                    if(singleCoinObj.id === coinId) singleCoinObj.favorite = true
                    return singleCoinObj
                })
                // console.log('actionTypes.ADD_COIN_TO_FAVORITES',newListAddToFav)
                return {
                    ...state,
                    filteredCoinList:[...newListAddToFav],
                    progressState:false
                }
            case actionTypes.REMOVE_COIN_FROM_FAVORITES:
                const newStateForRemoveFav = Object.assign({},state);
                const newListRemoveFromFav = newStateForRemoveFav.filteredCoinList.map(singleCoinObj=>{
                    if(singleCoinObj.id === coinId) singleCoinObj.favorite = false
                    return singleCoinObj
                })
                // console.log('actionTypes.ADD_COIN_TO_FAVORITES',newListAddToFav)
                return {
                    ...state,
                    filteredCoinList:[...newListRemoveFromFav],
                    progressState:false
                }

        default:
            return state
    }
}