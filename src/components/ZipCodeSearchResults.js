import React, { Component } from 'react'
import ZipCard from './ZipCard'

function ZipCodeSearchResults(props) {

    const generateCards = () => {
        let sr = props.searchResults
        return sr.map(eneryDataSet => {
            return <ZipCard key={sr.indexOf(eneryDataSet)} energyInfo={eneryDataSet}/>
        })
    }

        // console.log('this.props in render', props);
        //let AllEnergyCards = this.generateCards()

        return(
            <div>
                <p>Results:</p>
                <div className="cards-container">
                    {generateCards()}
                </div>
                
            </div>
        )
}
    

export default ZipCodeSearchResults