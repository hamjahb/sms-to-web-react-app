import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

// import fontawesome 
import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

// import pages and componenets
import AllMessageContainer from './pages/AllMessageContainer'

// bootstrap imports
import Button from 'react-bootstrap/Button';

class App extends Component {
  constructor(props){
    super (props)
    
    this.state = {
      smsList: []
    }
  }
  
  smsListReset() {
    this.setState({
      smsList: []
    })
  }


  onTestButtonClick() {
    // console.log('TEST Button is clicked');
    this.smsListReset()
    console.log('list reset');
    
    axios.get('http://localhost:5000/testapi')
    .then(response => {
      // console.log(response.data);
      this.setState({
        smsList: response.data
      }) 
    })
    .catch(error => {
      console.log(error);
    });
  }


  onButtonClick() {
    // console.log('hisham Button is clicked');
    this.smsListReset()
    console.log('list reset');
    
    axios.get('https://obscure-lowlands-72494.herokuapp.com/hishamapi')
    .then(response => {
      // console.log(response.data);
      this.setState({
        smsList: response.data
      }) 
    })
    .catch(error => {
      console.log(error);
    });
  }


  onHanadyButtonClick() {
    // console.log('hanady Button is clicked');
    this.smsListReset()
    // console.log('list reset');
    axios.get('https://obscure-lowlands-72494.herokuapp.com/hanadyapi')
    .then(response => {
      console.log(response.data);
      this.setState({
        smsList: response.data
      }) 
    })
    .catch(error => {
      console.log(error);
    });
  }


  onMofarehButtonClick() {
    // console.log('mofareh Button is clicked');
    this.smsListReset()
    // console.log('list reset');
    axios.get('https://obscure-lowlands-72494.herokuapp.com/mofarehapi')
    .then(response => {
      console.log(response.data);
      this.setState({
        smsList: response.data
      }) 
    })
    .catch(error => {
      console.log(error);
    });
  }


  onTahaniButtonClick() {
    // console.log('Tahani Button is clicked');
    this.smsListReset()
    // console.log('list reset');
    axios.get('https://obscure-lowlands-72494.herokuapp.com/tahaniapi')
    .then(response => {
      console.log(response.data);
      this.setState({
        smsList: response.data
      }) 
    })
    .catch(error => {
      console.log(error);
    });
  }
  

  render() {
    return (
      <div className="App">
  
        <head>
          <title>Almudhan SMS Code retriver</title>
        </head>
  
        <header className="App-header">
          <p>this page shows any sms messages recived by Almudhan family</p>
        </header>
  
        <body className="App-body">
          {/* <Button variant="outline-dark" size="lg" block onClick = {(e) => this.onTestButtonClick(e)} >Check TEST New Code at ***88</Button> */}
          <Button variant="outline-dark" size="lg" block onClick = {(e) => this.onButtonClick(e)} >Check Hisham New Code at ***88</Button>
          <Button variant="outline-dark" size="lg" block onClick = {(e) => this.onHanadyButtonClick(e)} >Check Hanady New Code at ***40 </Button>
          <Button variant="outline-dark" size="lg" block onClick = {(e) => this.onMofarehButtonClick(e)} >Check Mofareh New Code at ***40</Button>
          <Button disabled variant="outline-dark" size="lg" block onClick = {(e) => this.onTahaniButtonClick(e)} >Check Tahani New Code at ***36</Button>
          <AllMessageContainer smsList = {this.state.smsList}/>
        </body>

          
        <footer className="App-footer">
          <p>created by Hisham Aljahbli for Almudhan Group</p>
          <div id='footer-nav'>
            <a href="https://www.linkedin.com/in/haljahbli-softwareeng" target= "blank"> <FaLinkedin/></a>
            <a href="https://github.com/hamjahb" target= "blank"><FaGithub/></a>
            <a href="mailto:h.aljahbli@gmail.com"><FaEnvelope/></a>
          </div>
        </footer>
      </div>
    );
    
  }
  
}

export default App;