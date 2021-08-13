import { actionTypes } from "../actionTypes";
import { api as API } from "../../service/api";
import { CoinDetails } from "../../service/apiEndpoints";

export const getAllCoins = () => async (dispatch) => {
    try {
      const res = await API({...CoinDetails.getAllCoins})
      dispatch({
        type: actionTypes.GET_ALL_COINS,
        payload: res,
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
    dispatch({
      type:actionTypes.GET_ALL_COINS,
      payload:response
    })
  }catch(err){
    return Promise.reject(err);
  }
}



  