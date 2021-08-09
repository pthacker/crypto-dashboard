import { actionTypes } from "../actionTypes";
import { api as API } from "../../service/api";
import { CoinDetails } from "../../service/apiEndpoints";

export const getAllCoins = () => async (dispatch) => {
    try {
      const res = await API({...CoinDetails.getAllCoins})
      dispatch({
        type: actionTypes.GET_ALL_COINS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  