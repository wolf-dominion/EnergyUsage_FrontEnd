import React from 'react'

function Favorite(props) {

    console.log('props on card: ', props);
    

    return(
        <div className='card'>
            <h2>Zip: {props.fave.zip}</h2>
            <h2>{props.fave.energyInfo}</h2>
            <p>Avgg: {props.fave.avg}</p>
            <p>Max: {props.fave.max}</p>
            <p>Min: {props.fave.min}</p>

            <button>Remove</button>
        </div>
    )
}

export default Favorite