import React from "react";
import { slide as Menu } from "react-burger-menu";
import 'semantic-ui-css/semantic.min.css';
import logoImage from '../img/logo.png';
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Segment,
    Label
  } from 'semantic-ui-react'

export default props => {
  return (
    // Pass on our props
    
    <Menu {...props} right >
      <a className="menu-item" href="/">
        étude en ligne
      </a>
      
      <a className="menu-item" href="/">
        guides
      </a> 

      <a className="menu-item" href="/">
        actualités
      </a>

      <a className="menu-item" href="/">
        qui sommes-nous ?
      </a>

      <a className="menu-item" href="/">
        contact
      </a>
    </Menu>
    
  );
};








