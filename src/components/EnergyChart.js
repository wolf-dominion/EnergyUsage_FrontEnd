import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2'

function EnergyChart (props) {


    function determineDataSet(){
        if(!props.chartB){
            const dataForA = {
                labels: ['Avg', 'Max', 'Min'],
                datasets: [
                  {
                    label: `${props.chartA.energyInfo} in ${props.chartA.zip}`,
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [props.chartA.avg, props.chartA.max, props.chartA.min]
                  }
                ]
              }
            return dataForA
        }
        if(props.chartB){
            const dataForCompare = {
                labels: ['Avg', 'Max', 'Min'],
                datasets: [
                  {
                    label: `${props.chartA.energyInfo} in ${props.chartA.zip}`,
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [props.chartA.avg, props.chartA.max, props.chartA.min]
                  }, 
                  {
                    label: `${props.chartB.energyInfo} in ${props.chartB.zip}`,
                    backgroundColor: 'rgba(99, 132, 0, 0.6)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.9)',
                    hoverBorderColor: 'rgba(99, 132, 0, 1)',
                    data: [props.chartB.avg, props.chartB.max, props.chartB.min] 
                  }
                ]
              }
            return dataForCompare
        }
    }

    let finalData = determineDataSet()
      
      

    function display() {
        if (props.chartA && !props.chartB){
            return <Bar data={finalData} options={{maintainAspectRatio: true}}/>
        }
        if (props.chartA && props.chartB){
            return <Bar data={finalData} options={{maintainAspectRatio: true}}/>
        }
    }

    let dis = display()
    return(
        <div className='chart-div'>
            {dis}
        </div>
    )
}

export default EnergyChart