import React, { Component } from 'react'
import EnergyChart from './EnergyChart'

class Compare extends Component {

    handleReset =() => {
        this.props.setA(undefined)
        this.props.setB(undefined)
    }

    render(){
        return(
            <div className="chart-container">
                <h2>Energy Use Comparison</h2>
                {/* {this.state.chartA.length > 0 ? <EnergyChart chartA={this.state.chartA} /> : <p>No charts selected</p>} */}
                <button onClick={(e)=> this.handleReset(e)} >Reset</button>
            </div>
        )
    }
}

export default Compare