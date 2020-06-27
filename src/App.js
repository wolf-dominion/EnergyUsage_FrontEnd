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
  _isMounted = false

  state = {
    fm: [],
    loggedIn: false
  }

  componentDidMount(){
    this._isMounted = true
    
    if (this._isMounted){
      this.getFaves()
      this.isLoggedIn()
    }

  }

  saveOrRemoveFromFaves = (zip, title, avg, min, max) => {
    const existingState = this.state.fm
    console.log('existing state: ', existingState);
    
    let foundFave
    foundFave = existingState.find(favorite => +zip === favorite.zip && favorite.energyInfo.length === title.length)

    

    if(!foundFave){
      
      const newFave = {
        favoritemap: {
          zip: zip,
          avg: avg.toString(),
          min: min.toString(),
          max: max.toString(),
          energyInfo: title
        }
      }
    

      fetch('http://localhost:3000/favoritemaps', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.token}`
          },
          body: JSON.stringify(newFave.favoritemap)
        })
        .then(response => {
          console.log('status: ', response.status)
          if (response.status === 200){
            alert("Saved to your profile!")
            this.getFaves()
          }
        })
      }
  }

  getFaves = () => {
    
    const favesURL = 'http://localhost:3000/favoritemaps'
    fetch(favesURL, {
      method: 'GET',
      headers: {'content-type':'application/json',
                'authorization': `Bearer ${localStorage.token}`}
    })
    .then(parseJSON)
    .then(this.saveToState)
    .catch(error => {
      console.error(error)
    })
    
    function parseJSON(response){
    return response.json()
    }
    
  }

  saveToState = (response) => {
    console.log('all fave: ', response);
    
    this.setState({fm: response})
  }

  changeLoggedinStatus = () => {
    if (this.state.loggedIn === true){
      this.setState({loggedIn: false})
      this.clearStorage()
    }
    if (this.state.loggedIn === false){
      this.setState({loggedIn: true})
      this.getFaves()
      console.log('get faves should be called');
      
    }
  }

  clearStorage = () => {
    localStorage.clear()
  }

  setfm = (fm) => {
    this.setState({fm})
  }

  removeFave = (fave) => {
    console.log('removefave', fave);
    
    let favorites = this.state.fm.filter(favorite => favorite !== fave)

    this.setState({fm: favorites})

    fetch(`http://localhost:3000/favoritemaps/${fave.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.token}`
      },
    })
  }

  isLoggedIn = () => {
    const fmURL = 'http://localhost:3000/favoritemaps'
    fetch(fmURL, {
      headers: {
        'authorization': `Bearer ${localStorage.token}`}
    })
    .then(response => {      
      if (response.status === 200){
        this.setState({loggedIn: true})
        return response.json()
      }
    }).then(fm => {
      console.log('fm', fm);
      
      // this.getFaves()
    })
    
  }

  componentWillUnmount() {
    this._isMounted = false;
  }


  render(){
    const {loggedIn} = this.state
    
    return (
      < div className="site">
      <Router>
        <Header loggedIn={loggedIn} changeLoggedinStatus={this.changeLoggedinStatus}/>

        <Route exact path='/'>
          <HomePage saveOrRemoveFromFaves={this.saveOrRemoveFromFaves}/>
        </Route>
        <Route path='/myProfile'>
          <MyProfile removeFave={this.removeFave} faves={this.state.fm}/>
        </Route>
        <Route path='/Fm'>
          <Fm faves={this.state.fm}/>
        </Route>
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
          </div>
          
    )
  }
}

export default App;