import React,{useState} from "react";
import {
  AppBar,
  Toolbar,
  Button,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import colorPalette from "../styles/colorPalette";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  linksDiv: {
    width: "33%",
  },
  logoDiv: {
    color: colorPalette.textBlack,
    width: "33%",
  },
  settingsLoginDiv: {
    display: "flex",
    justifyContent: "space-around",
    width: "33%",
  },
  subSettingsDiv: {
    width: "50%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
}));
const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileMenu,setMobileMenu] = useState(null)
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  const handleMobileMenu = (e)=>{
      console.log('.currentTarget', e.currentTarget);
      console.log(' boolean .currentTarget',Boolean(e.currentTarget));
      console.log('target',e.target)
    setMobileMenu(e.currentTarget)
  }
  const handleMobileMenuClose = ()=>{
      setMobileMenu(null)
  }
  console.log("isMobile", isMobile, theme.breakpoints.down("sm"));
  return (
    <div className={classes.root}>
      <AppBar
        style={{
          background: colorPalette.complementaryColor,
          "& .MuiButton-root": {
            color: colorPalette.textBlack,
          },
          margin:0
        }}
        position='static'
      >
        {isMobile ? (
          <Toolbar >
            <div
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "33%",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  width: "33%",
                  justifyContent:'center',
                  color: colorPalette.textBlack,
                }}
              >
                  LOGO
              </div>
              <div
                style={{
                  display: "flex",
                  width: "33%",
                  justifyContent:'flex-end'
                }}
              >
                <IconButton edge="start"
                onClick={handleMobileMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
        id="simple-menu"
        anchorEl={mobileMenu}
        keepMounted
        open={Boolean(mobileMenu)}
        onClose={handleMobileMenuClose}
      >
        <MenuItem onClick={handleMobileMenuClose}>Coins</MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>Market</MenuItem>
      </Menu>
              </div>
            </div>
          </Toolbar>
        ) : (
          <Toolbar>
            <div
              style={{
                display: "flex",
                marginLeft: "5%",
                marginRight: "5%",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div className={classes.linksDiv}>
                <Button variant="text">Coins</Button>
                <Button variant="text">Markets</Button>
              </div>
              <div className={classes.logoDiv}>LOGO</div>
              <div className={classes.settingsLoginDiv}>
                <div className={classes.subSettingsDiv}>
                  <SettingsIcon style={{ color: colorPalette.dominantColor}} />
                  <Button
                    variant="contained"
                    color="#4C75CD"
                    style={{ backgroundColor: colorPalette.dominantColor}}
                  >
                    LOGIN
                  </Button>
                </div>
              </div>
            </div>
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
};

export default NavBar;
