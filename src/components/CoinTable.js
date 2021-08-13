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
  InputLabel,
  FormControl,
  Select,
} from "@material-ui/core";
import Toast from "./Common/Toast";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCoins,
  filterByCoinName,
  filterByCoinPrice,
  filterByCoinVolume,
  filterByCoinPercentChange,
  getCoinsByPage,
} from "../redux/actions/coinsListAction";
import { actionTypes } from "../redux/actionTypes";
import { usePagination } from "./Common/Pagination";
import Pagination from "./Common/Pagination";
import Progressbar from "./Common/Progressbar";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "black",
    color: "white",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "grey",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  customWidth: {
    "& .MuiTableContainer-root": {
      width: "80%",
    },
  },
  formControl: {
    margin: "0.5rem",
    minWidth: 120,
    background: "white",
  },
  selectEmpty: {
    marginTop: "1rem",
  },
});

const CoinTable = () => {
  const dispatch = useDispatch();

  const [filterName, setfilterName] = useState("");
  const [isInterval, setIsInterval] = useState(true);
  const [showProgressBar, setshowProgressBar] = useState(true)
  const classes = useStyles();

  // set interval of 3 seconds
  // useEffect(() => {
  //   let interval;
  //   if (isInterval) {
  //     interval = setInterval(() => {
  //       dispatch(getAllCoins());
  //     }, 3000);
  //   } else {
  //      clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [isInterval]);
  const data = useSelector((state) => {
    return state.coinReducer.filteredCoinList;
  });

  const progressState = useSelector((state)=>{
    return state.coinReducer.progressState
  })

  const pageCall = (currPage) => {
    dispatch(getCoinsByPage(currPage));
  };

  const {
    handleNextPage,
    handlePreviousPage,
    canDisableNext,
    canDisablePrevious,
    currentPage,
  } = usePagination((currPage) => pageCall(currPage), data.length, 0, null);

  const handleInputChange = (e) => {
    // console.log("handlechange", e.target.value);
    setIsInterval(false);
    if (e.target.value.length === 0) {
      setIsInterval(true);
    }
    const value = e.target.value;
    dispatch(filterByCoinName(value));
  };

  const handleFilterChange = (e) => {
    // console.log("handleFilterChange ", e.target.value);
    setIsInterval(false);
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
        setIsInterval(true);
        break;
    }
  };

  useEffect(() => {
    dispatch(getCoinsByPage(currentPage));
  }, [currentPage]);

  return (
    <TableContainer component={Paper} className={classes.customWidth}>
      <div
        style={{
          display: "flex",
          background: "black",
          justifyContent: "flex-end",
        }}
      >
        <FormControl className={classes.formControl}>
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
        <input
          onChange={handleInputChange}
          placeholder="search by coin name"
          style={{ width: "15rem", height: "2rem" }}
        />
      </div>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ marginLeft: "0.5rem" }} colspan="2">
              Coin Name
            </StyledTableCell>
            <StyledTableCell align="right">Price $</StyledTableCell>
            <StyledTableCell align="right">24H&nbsp;% </StyledTableCell>
            <StyledTableCell align="right">24H&nbsp;HIGH</StyledTableCell>
            <StyledTableCell align="right">24H&nbsp;LOW</StyledTableCell>
            <StyledTableCell align="right">TOTAL SUPPLY</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  <img
                    style={{ height: "1rem", width: "1rem" }}
                    src={row.image}
                    alt={"Coin icon"}
                  />
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {"$"}
                  {row.current_price}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.price_change_percentage_24h}
                </StyledTableCell>
                <StyledTableCell align="right">{row.high_24h}</StyledTableCell>
                <StyledTableCell align="right">{row.low_24h}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.total_supply}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      <Pagination
        // handleNext={handleNextPageCall}
        // handlePrevious={handlePrevPageCall}
        handleNext={handleNextPage}
        handlePrevious={handlePreviousPage}
        canDisableNext={canDisableNext}
        canDisablePrevious={canDisablePrevious}
        currentPage={currentPage}
      />
    <Progressbar
    show={progressState}
    />
    </TableContainer>
  );
};

export default CoinTable;
