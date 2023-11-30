import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../images/logo.png";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import PeopleIcon from "@mui/icons-material/People";
import tmdb from "../images/tmdb_icon.png";
import { Link } from "react-router-dom";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "10px",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
            to="/"
          >
            <ListItemButton
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: "60px",
              }}
            >
              <MovieFilterIcon />
              <h6>Movies</h6>
            </ListItemButton>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
            to="search"
          >
            <ListItemButton
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: "60px",
              }}
            >
              <ManageSearchIcon />
              <h6>Search</h6>
            </ListItemButton>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
            to="about"
          >
            <ListItemButton
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: "60px",
              }}
            >
              <PeopleIcon />
              <h6>About us</h6>
            </ListItemButton>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
            to="https://www.themoviedb.org/"
          >
            <ListItemButton
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: "60px",
                textDecoration: "none",
              }}
            >
              <img src={tmdb} style={{ width: "50px" }} alt="tmdb" />
              <h6>API</h6>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#0f1526" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <div>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon sx={{ color: "white", textDecoration: "none" }} />
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Link to="/">
              <img
                style={{
                  width: "40px",
                  marginRight: "60px",
                }}
                src={logo}
                alt="logo"
              />
            </Link>
          </Typography>
          <Link style={{textDecoration:'none'}} to="search">
            <button className="searchButon">
              {" "}
              <SearchIcon
                style={{ cursor: "pointer", marginRight: "2px" }}
              />{" "}
              Search
            </button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
