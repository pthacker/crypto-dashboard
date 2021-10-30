import { actionTypes } from "../actionTypes";
import { api as API } from "../../service/api";
import { CoinDetails } from "../../service/apiEndpoints";
import { getLocalStorage } from '../../service/localStorage';

export const getAllCoins = () => async (dispatch) => {
    try {
      const res = await API({...CoinDetails.getAllCoins})
      const favorites =  getLocalStorage('favorites');
      dispatch({
        type: actionTypes.GET_ALL_COINS,
        // payload:res, 
        payload:
        {
          data:res,
          favorites:favorites
        }
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const filterByCoinName = (value) => async (dispatch) => {
    // try {
    //   const res = await API({...CoinDetails.getAllCoins})
      dispatch({
        type: actionTypes.FILTER_BY_COIN_NAME,
        userEnteredValue: value,
      });
      return Promise.resolve();
    // } catch (err) {
    //   return Promise.reject(err);
    // }
  };

export const filterByCoinPrice = () => async (dispatch) => {
      dispatch({
        type: actionTypes.FILTER_BY_COIN_PRICE,
      });
      return Promise.resolve();
  };

  export const filterByCoinVolume = () => async (dispatch) => {
    dispatch({
      type: actionTypes.FILTER_BY_COIN_VOLUME,
    });
    return Promise.resolve();
};

export const filterByCoinPercentChange = () => async (dispatch) => {
    dispatch({
      type: actionTypes.FILTER_BY_PRICE_PERCENT_CHANGE,
    });
    return Promise.resolve();
};

export const getCoinsByPage = (page) => async(dispatch)=>{
  try{
    CoinDetails.getCoinsByPage.params.page = page;
    const response = await API({...CoinDetails.getCoinsByPage});
    const favorites =  getLocalStorage('favorites');
    dispatch({
      type:actionTypes.GET_ALL_COINS,
      payload:
      {
        data:response,
        favorites:favorites
      }
    })
  }catch(err){
    return Promise.reject(err);
  }
}


export const addToFavorite = (coinId,index)=> async(dispatch)=>{
  dispatch({
    type:actionTypes.ADD_COIN_TO_FAVORITES,
    payload:{
      coinId,
      index
    }
  })
}

export const removeFromFavorite = (coinId,index)=> async(dispatch)=>{
  dispatch({
    type:actionTypes.REMOVE_COIN_FROM_FAVORITES,
    payload:{
      coinId,
      index
    }
  })
}

export const getCoinsByIdList = (favoritesIdList) => async(dispatch)=>{
  const params = {
      vs_currency:"usd"
  }
  params.ids = [...favoritesIdList]
  console.log('params',params)
  try {
    const res = await API({...CoinDetails.getCoinsByIdList,'params':params})
    dispatch({
      type:actionTypes.GET_FAVORITE_COINS,
      payload:{
        favoritesIdList:res
      }
    })

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }

}




  