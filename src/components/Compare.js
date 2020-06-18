import React, { Component } from 'react'
import EnergyChart from './EnergyChart'

class Compare extends Component {

    handleReset =() => {
        this.props.setA(undefined)
        this.props.setB(undefined)
    }

    generateCharts = () => {
        if (this.props.chartA && !this.props.chartB){
            return <EnergyChart chartA={this.props.chartA}/>
        }
        if (this.props.chartA && this.props.chartB){
            return <EnergyChart chartA={this.props.chartA} chartB={this.props.chartB}/>
        }
        if (!this.props.chartA && !this.props.chartB) {
            return <p>No data selected</p>
        }
    }

    render(){

        let genChart = this.generateCharts()

        return(
            <div className="chart-container">
                <h2>Energy Use Comparison</h2>
                {/* {this.state.chartA.length > 0 ? <EnergyChart chartA={this.state.chartA} /> : <p>No charts selected</p>} */}
                {/* {this.props.chartA ? <EnergyChart /> : null} */}
                {genChart}
                <button onClick={(e)=> this.handleReset(e)} >Reset</button>
            </div>
        )
    }
}

export default Compare