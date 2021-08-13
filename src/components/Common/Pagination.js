import { Button } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import {getCoinsByPage} from '../../redux/actions/coinsListAction';

export const usePagination = (    getData,
    count=0,
    page,
    otherParams)=>{

const [currentPage, setcurrentPage] = useState(1);


useEffect(() => {
    if(getData){
        getData(currentPage)
    }
}, [currentPage])

const handleNextPage = ()=>{
    setcurrentPage((prev)=>prev+1)
}

const handlePreviousPage = () =>{
    if(currentPage>1){
        setcurrentPage((prev)=>prev-1)
    }
}

const canDisableNext = count < 100;
const canDisablePrevious = currentPage < 2;

return {
    handleNextPage,
    handlePreviousPage,
    canDisableNext,
    canDisablePrevious,
    currentPage
}

}

function Pagination({
    handleNext,
    handlePrevious,
    canDisableNext,
    canDisablePrevious,
    currentPage
}) {
    return (
        <div>           
           <Button onClick={handlePrevious} disabled={canDisablePrevious}>Previous</Button>
            <span>{currentPage}</span>
           <Button onClick={handleNext} disabled={canDisableNext}>Next</Button> 
        </div>
    )
}

export default Pagination
