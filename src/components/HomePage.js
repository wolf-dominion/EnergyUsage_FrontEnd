import React, { Component } from 'react'
import ZipCodeSearchResults from './ZipCodeSearchResults'

const key = process.env.REACT_APP_API_KEY

class HomePage extends Component{

    state = {
        searchResults: [],
        zipCode: "",
        error: ""
    }

    handleChange = (event) => {
        console.log('ev tar', event.target);

        const {value} = event.target
        console.log('value: ', value);
        this.setState({zipCode: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const zipURL = `https://developer.nrel.gov/api/cleap/v1/cities?zip=${this.state.zipCode}&api_key=${key}`
        fetch(zipURL, {
            method: 'GET', 
        }).then(response => {
            if(response.status === 200) {
                return response.json()
            } else {
                throw new Error("Fetch issue")
            }
        }).then(result => {
            this.fetchEnergy(result.result[0].gisjoin)
            //console.log('result: ', result.result[0].gisjoin);

        })
        .catch(error => this.setState({error: error.message}))
    }

    fetchEnergy = (gisjoin) => {
        console.log('gisjoin', gisjoin);
        const joinURL = `https://developer.nrel.gov/api/cleap/v1/energy_cohort_data/${gisjoin}?api_key=DEMO_KEY`
        fetch(joinURL, {
            method: 'GET', 
        }).then(response => {
            if(response.status === 200) {
                return response.json()
            } else {
                throw new Error("Fetch issue for 2nd call")
            }
        }).then(result => {
            console.log('2nd result: ', result);
            
        })
        .catch(error => this.setState({error: error.message}))
        
        
    }

    render(){
        const {zipCode} = this.state
        return(
            <div>
                <h2>Home page</h2>
                <p>Enter a zipcode to see that area's energy usage.</p>
                <form className="zip-one" onSubmit={this.handleSubmit}>
                    <label>Zip:</label>
                    <input 
                        value={zipCode} 
                        name="ZipCode"
                        type="text" 
                        placeholder="Ex. 80021" 
                        onChange={this.handleChange}></input>
                    <input type="submit" value="Go!"></input>
                    {this.state.error ? <p>{this.state.error}</p> : null}

                </form>
                < ZipCodeSearchResults />
            </div>
        )
    }
    
    
}

export default HomePage