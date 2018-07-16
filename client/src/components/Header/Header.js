import React from 'react';
import { Link } from 'react-router-dom';

import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import headerStyle from "../../assets/jss/material-dashboard-react/components/headerStyle.jsx";

const Header = () => (
  
  <header>
    <nav>
      <div className="container">
        <Link to="/">Home</Link> <span> | </span>
        <Link to="/signin">Sign In</Link>
      </div>
    </nav>    
  </header>

);

export default Header;
