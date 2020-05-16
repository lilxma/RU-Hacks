import React, { Component } from "react";
import history from './history';
import './App.css';
import {Button, ButtonToolbar} from "react-bootstrap"
import {AddModal} from "./AddModal";



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={deps:[], addModalShow: false}
    }




render(){
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
      <button class="button1" onClick={this.handle1Click} id="User">User</button>
      <button class="button2" onClick={this.handle2Click} id= "Volunteer">Volunteer</button>




     </div>

}
}



export default Home;
