import React, { Component } from 'react'
import ZipCard from './ZipCard'

function ZipCodeSearchResults(props) {

    const generateCards = () => {
        let sr = props.searchResults
        return sr.map(eneryDataSet => {
            return <ZipCard 
                key={sr.indexOf(eneryDataSet)} 
                energyInfo={eneryDataSet}
                resultsTitle={props.resultsTitle}
                saveOrRemoveFromFaves={props.saveOrRemoveFromFaves}
                />
        })
    }

        // console.log('this.props in render', props);
        //let AllEnergyCards = this.generateCards()

        return(
            <div>
                <h2 className='center-results'>Results:</h2>
                <div className="cards-container">
                    {generateCards()}
                </div>
                
            </div>
        )
}
    

export default ZipCodeSearchResults