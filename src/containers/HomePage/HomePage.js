import React,{useState} from "react";
import {
  InputLabel,
  FormControl,
  Select
} from "@material-ui/core";
import NavBar from "../../components/NavBar";
import Dashboard from "../dashboard";
import colorPalette from "../../styles/colorPalette";
import { useSelector, useDispatch } from "react-redux";
import { actionTypes } from "../../redux/actionTypes";
import {
  getAllCoins,
  filterByCoinName,
  filterByCoinPrice,
  filterByCoinVolume,
  filterByCoinPercentChange,
  getCoinsByPage,
  addToFavorite,
  removeFromFavorite,
  addFavoritesToRedux
} from "../../redux/actions/coinsListAction";

const HomePage = () => {
    const dispatch = useDispatch();
    const [isInterval, setIsInterval] = useState(true);

 
    const handleInputChange = (e) => {
        // console.log("handlechange", e.target.value);
        setIsInterval(false);
        if (e.target.value.length === 0) {
          setIsInterval(true);
        }
        const value = e.target.value;
        dispatch(filterByCoinName(value));
      };
      
  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundColor: colorPalette.dominantColor,
          width: "100%",
          height: "15rem",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "33%",
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <span
          style={{
              fontSize:'xx-large',
              marginTop:'-3rem'
          }}
          >MARKETS</span>
        </div>
        <div
          style={{
            display: "flex",
            width: "33%",
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          {/* <FormControl variant="filled" style={{background:'white','& .MuiSelect-root':{
            background:'white'
          },
          }}>
          <InputLabel htmlFor="age-native-simple" style={{color:colorPalette.textBlack}}>Filter</InputLabel>
          <Select native value={filterName} onChange={handleFilterChange}>
            <option aria-label="None" value="" />
            <option value={actionTypes.FILTER_BY_COIN_PRICE}>Price</option>
            <option value={actionTypes.FILTER_BY_COIN_VOLUME}>Volume</option>
            <option
              value={actionTypes.FILTER_BY_PRICE_PERCENT_CHANGE}
              selected={true}
            >
              Price % Change
            </option>
          </Select>
        </FormControl> */}
        </div>
        <div
          style={{
            display: "flex",
            width: "33%",
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <input
            placeholder="search by coin name"
            style={{ width: "15rem", height: "2rem",borderRadius:'9px',border:'1px solid white' }}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div
        style={{
          marginLeft: "15%",
          marginRight: "15%",
          marginTop: "-81px",
          zIndex: 1,
          position: "relative",
          background: "white",
        }}
      >
        <Dashboard />
      </div>
    </>
  );
};

export default HomePage;
