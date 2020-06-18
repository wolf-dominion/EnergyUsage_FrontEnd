import React from 'react'

function Favorite(props) {
    
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

    const styleByType = () => {
        
        if (props.fave.energyInfo[0] === 'c'){
            if (props.fave.energyInfo[1] === 'o'){
                return 'commercial'
            }
            if (props.fave.energyInfo[1] === 'i'){
                return 'city'
            }
        }
        if (props.fave.energyInfo[0] === 'i'){
            return 'industrial'
        }
        if (props.fave.energyInfo[0] === 'r'){
            return 'residential'
        }
    }
    const styleColor = styleByType()
    
    return(
        <div className='card'>
            <h2>Zip: {props.fave.zip}</h2>
            <h2 className={styleColor}>{props.fave.energyInfo}</h2>
            <p>Avg: {props.fave.avg}</p>
            <p>Max: {props.fave.max}</p>
            <p>Min: {props.fave.min}</p>

            <button onClick={(e)=> handleClick(e, props.fave)} >Remove</button>
            <button className="compare" onClick={(e)=> compareButtonClicked(e, props.fave)} >Compare</button>
        </div>
    )
}

export default Favorite