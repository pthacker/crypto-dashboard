import React,{useEffect} from "react";
import Toast from "../../components/Common/Toast";
import { useSelector,useDispatch} from 'react-redux';
import { getAllCoins } from "../../redux/actions/coinsListAction";

const Dashboard = () => {
    // console.log({...CoinDetails.getAllCoins})
    const dispatch = useDispatch();
  useEffect(() => {
   dispatch(getAllCoins())
  }, []);

// dispatch({
//     type:'GET_ALL_COINS'
// })
const data = useSelector(state=>{
    console.log('useSelector',state)
    return state.coinReducer.coinsList})
console.log('data',data)

  return <div></div>;
};

export default Dashboard;
