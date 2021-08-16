import {constants} from '../utilities/constants';

export const getLocalStorage = (key)=>{
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}

export const setLocalStorage = (key,value)=>{
    let  oldData = localStorage.getItem(key);
    oldData = JSON.parse(oldData);
    console.log('parsed',oldData);
    let newData = [];
    if(oldData){
        // concatenate existing data
        const existingArr = [...oldData];
        if(existingArr.includes(value)){
            // remove from local storage
            removeFromLocalStorage(key,value,0,constants.REMOVE_SINGLE_COIN);
            return
        }
        newData = existingArr.concat(value)
    }else{
        // add the only value
        newData = [value]
    }
    localStorage.setItem(key,JSON.stringify(newData))
}


export const removeFromLocalStorage = (key,coinId,index,operation=constants.REMOVE_ALL_COINS)=>{
    if(operation===constants.REMOVE_ALL_COINS)
        localStorage.removeItem(key);
    else if(operation===constants.REMOVE_SINGLE_COIN){
        // when single_coin is to be removed from localstorage
        let  oldData = localStorage.getItem(key);
        oldData = JSON.parse(oldData);
        let newData = [];
        newData = oldData.filter((singleCoinId)=>(singleCoinId!==coinId));
        console.log('newData removeFromLocalStorage',newData)
        // setLocalStorage(key,newData)
        localStorage.setItem(key,JSON.stringify(newData))
    }

}

