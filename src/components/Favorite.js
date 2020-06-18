import React from 'react'
import Compare from './Compare'

function Favorite(props) {

    //console.log('props on card: ', props);
    
    function handleClick(e, fave) {
        e.stopPropagation()
        props.removeFave(fave)
    }

    function compareButtonClicked(e, fave){
        console.log('I was clicked');
        
        if(!props.chartA || props.chartA === undefined){
            props.setA(fave)
        }
        else {
            props.setB(fave)
        }
    }

    return(
        <div className='card'>
            <h2>Zip: {props.fave.zip}</h2>
            <h2>{props.fave.energyInfo}</h2>
            <p>Avg: {props.fave.avg}</p>
            <p>Max: {props.fave.max}</p>
            <p>Min: {props.fave.min}</p>

            <button onClick={(e)=> handleClick(e, props.fave)} >Remove</button>
            <button className="compare" onClick={(e)=> compareButtonClicked(e, props.fave)} >Compare</button>
        </div>
    )
}

export default Favorite