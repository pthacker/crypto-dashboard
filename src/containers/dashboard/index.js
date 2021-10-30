import React, { useEffect,useState } from "react";
import Toast from "../../components/Common/Toast";
import { useSelector, useDispatch } from "react-redux";
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
import "./index.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CoinTable from "../../components/CoinTable";
import FavoriteTable from "../../components/FavoriteTable";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import colorPalette from "../../styles/colorPalette";
import ListIcon from '@material-ui/icons/List';
import {
  InputLabel,
  FormControl,
  Select
} from "@material-ui/core";
import { actionTypes } from "../../redux/actionTypes";



const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    // display: 'flex',
    flex: "1",
    justifyContent: "center",
    "& .MuiTableContainer-root": {
      width: "80%",
    },
    "& .MuiBox-root": {
      padding: "0px",
    },
    "& .MuiTabPanel-root":{
      padding: "0px",
    }
    
  },
  tabPanelPadding:{
      padding: "0px",
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{padding:'0px'}}
      {...other}
    >
      {value === index && (
        <Box p={3}
        className={classes.tabPanelPadding}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Dashboard = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [filterName, setfilterName] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const handleFilterChange = (e) => {
    // console.log("handleFilterChange ", e.target.value);
    // setIsInterval(false);
    const filter_by = e.target.value;
    switch (filter_by) {
      case actionTypes.FILTER_BY_COIN_PRICE:
        setfilterName(e.target.value);
        dispatch(filterByCoinPrice());
        break;
      case actionTypes.FILTER_BY_COIN_VOLUME:
        setfilterName(e.target.value);
        dispatch(filterByCoinVolume());
        break;
      case actionTypes.FILTER_BY_PRICE_PERCENT_CHANGE:
        setfilterName(e.target.value);
        dispatch(filterByCoinPercentChange());
        break;
      default:
        setfilterName("");
        dispatch(getAllCoins());
        // setIsInterval(true);
        break;
    }
  };

  return (
    // <div className={classes.root}>
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: colorPalette.complementaryColor, margin: 0}}
      >
        <div
         style={{
          display:'flex',
          width:'100%'
        }}
        >
        <Tabs
          style={{
            color: colorPalette.textBlack,
            width:'80%'
          }}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            label="Favorites"
            icon={<FavoriteIcon />}
            {...a11yProps(0)}
          />
          <Tab
            label="All"
            icon={<ListIcon/>}
            {...a11yProps(1)}
          />
        </Tabs>
        <FormControl variant="outlined" style={{marginTop:'1rem'}}>
          <InputLabel htmlFor="age-native-simple">Filter</InputLabel>
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
        </FormControl>
        </div>
      </AppBar>
      <TabPanel value={value} index={0}>
        <FavoriteTable/>
      </TabPanel>
      <TabPanel
        className={classes.tabPanelPadding}
        value={value}
        index={1}
      >
        <CoinTable />
      </TabPanel>
    </>
  );
};

export default Dashboard;
