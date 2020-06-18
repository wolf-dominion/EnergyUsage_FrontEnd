import React from 'react'

function Favorite(props) {

    //console.log('props on card: ', props);
    
    function handleClick(e, fave) {
        e.stopPropagation()
        props.removeFave(fave)
    }

    return(
        <div className='card'>
            <h2>Zip: {props.fave.zip}</h2>
            <h2>{props.fave.energyInfo}</h2>
            <p>Avgg: {props.fave.avg}</p>
            <p>Max: {props.fave.max}</p>
            <p>Min: {props.fave.min}</p>

            <button onClick={(e)=> handleClick(e, props.fave)} >Remove</button>
        </div>
    )
}

export default Favorite