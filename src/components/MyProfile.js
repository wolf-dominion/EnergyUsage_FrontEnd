import React, { Component } from 'react'
import Fm from './Fm'
import Compare from './Compare'

class MyProfile extends Component{
    
    state = {
        chartA: undefined,
        chartB: undefined
    }
    
    setChartA = (fave) => {
        this.setState({chartA: fave})
    }
    setChartB = (fave) => {
        this.setState({chartB: fave})
    }

    render(){
        return(
            <div>
                <h2>My profile</h2>
                < Compare 
                    chartA={this.state.chartA} 
                    chartB={this.state.chartB} 
                    setA={this.setChartA} 
                    setB={this.setChartB}/>
                < Fm 
                    removeFave={this.props.removeFave} 
                    faves={this.props.faves} 
                    chartA={this.state.chartA} 
                    chartB={this.state.chartB} 
                    setA={this.setChartA} 
                    setB={this.setChartB}/>
            </div>
        )
    }

}

export default MyProfile