import React, { Component } from "react";
import history from './history';
import './App.css';
//import {Button, ButtonToolbar} from "react-bootstrap"
import {AddModal} from "./AddModal";
import { Button } from "./components/button";
import { Link } from "react-router-dom";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={deps:[], addModalShow: false}
    }




render() {
     var id = localStorage.getItem(this.identity);
     let addModalClose=() => this.setState({addModalShow: false})


return    <div>

      <div class="header">
        <header class="heading">
          <h1>Bounty</h1>
        </header>
          <div class="logo"></div>
          <p class="slogan">Connecting communities</p>

      </div>

    <div class="logo"></div>
    <header class="navbar">Join Us</header>
        <Link to="/registration">
            <Button class ="userbtn">User</Button>
        </Link>
        <Link to = "/registration">
            <Button class="volbtn">Volunteer</Button>
        </Link>



     </div>

}

}



export default Home;
