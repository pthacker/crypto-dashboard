import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {getLocalStorage,removeFromLocalStorage,setLocalStorage} from '../service/localStorage';
import { getCoinsByIdList } from '../redux/actions/coinsListAction';

const FavoriteTable = ()=>{
    const dispatch = useDispatch();
useEffect(()=>{

    // fetch data from localstorage
    const favoritesIdList = getLocalStorage('favorites');

    // make api call with favorites array
    if(favoritesIdList){
        dispatch(getCoinsByIdList(favoritesIdList))
    }
})
    return (
        <div>
            
        </div>
    )
}

export default FavoriteTable
