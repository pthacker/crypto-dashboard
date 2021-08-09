import React, { useEffect } from "react";
import Toast from "../../components/Common/Toast";
import { useSelector, useDispatch } from "react-redux";
import { getAllCoins } from "../../redux/actions/coinsListAction";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import CoinTable from "../../components/CoinTable";

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    "& .MuiTableContainer-root": {
      width: "80%",
    },
  },
});

const Dashboard = () => {
    const classes = useStyles();
  // console.log({...CoinDetails.getAllCoins})
  //     const dispatch = useDispatch();
  //   useEffect(() => {
  //    dispatch(getAllCoins())
  //   }, []);

  // dispatch({
  //     type:'GET_ALL_COINS'
  // })
  // const data = useSelector(state=>{
  //     console.log('useSelector',state)
  //     return state.coinReducer.coinsList})
  // console.log('data',data)

  return (
    <div className={classes.root}>
      <CoinTable />
    </div>
  );
};

export default Dashboard;
