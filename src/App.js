import React, { Component } from 'react';
import Authenticate from './components/Authenticate'
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage';
import MyProfile from './components/MyProfile';
import Fm from './components/Fm'

//const key = process.env.REACT_APP_API_KEY

class App extends Component{
  state = {
    fm: [],
    loggedIn: false
  }

  changeLoggedinStatus = () => {
    if (this.state.loggedIn === true){
      this.setState({loggedIn: false})
      this.clearStorage()
    }
    if (this.state.loggedIn === false){
      this.setState({loggedIn: true})
    }
  }

  clearStorage = () => {
    localStorage.clear()
  }

  componentDidMount() {
    this.isLoggedIn()
  }

  setfm = (fm) => {
    this.setState({fm})
  }

  // setLoggedIn = () => {
  //   this.setState({loggedIn: true})
  // }

  isLoggedIn = () => {
    const fmURL = 'http://localhost:3000/favoritemaps'
    fetch(fmURL, {
      headers: {
        'authorization': `Bearer ${localStorage.token}`}
    })
    .then(response => {
      //console.log('status: ', response.status);
      
      if (response.status === 200){
        //this.changeLoggedinStatus()
        this.setState({loggedIn: true})
        return response.json()
      }
    }).then(fm => {
      this.setfm(fm)
    })
    
  }

  // logout = () => {    
  //   localStorage.clear()
  //   this.setState({loggedIn: false})
  //   //console.log('logout function activated: ', this.state.loggedIn);
  // }
  render(){
    //console.log('global object: ', process.env.REACT_APP_API_KEY);
    const {fm, loggedIn} = this.state

    return (
      <Router>
        <Header loggedIn={loggedIn} changeLoggedinStatus={this.changeLoggedinStatus}/>
        <h1>Your Energy</h1>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route path='/myProfile'>
          <MyProfile />
        </Route>
        <Route path='/Fm'>
          <Fm />
        </Route>
        {/* <Route path='/Authenticate'>
          <Authenticate  loggedIn={loggedIn} changeLoggedinStatus={this.changeLoggedinStatus}/>
        </Route> */}
        <Route  path="/Authenticate"
          render={(routerProps)=> {
            return (
              <>
                { this.state.loggedIn
                  ? <Redirect to='/' />
                  : <Authenticate
                  {...routerProps}
                  loggedIn={loggedIn} 
                  changeLoggedinStatus={this.changeLoggedinStatus}/>
                }
              </>
            )
          }}
        />
      </Router>

    )
  }
}

export default App;