import React from 'react'

function ZipCard(props) {
    let arrayInfo = []

    const turnObjToArray = () => {
        arrayInfo = Object.values(props.energyInfo)
    }
    turnObjToArray()

    let styleColor = ''
    const styleByType = () => {
        if (Object.keys(props.energyInfo)[0][0] === 'c'){
            if (Object.keys(props.energyInfo)[0][1] === 'o'){
                styleColor = 'commercial'
            }
            if (Object.keys(props.energyInfo)[0][1] === 'i'){
                styleColor = 'city'
            }
        }
        if (Object.keys(props.energyInfo)[0][0] === 'i'){
            styleColor = 'industrial'
        }
        if (Object.keys(props.energyInfo)[0][0] === 'r'){
            styleColor = 'residential'
        }
    }
    styleByType()

    function handleClick(){
        let zip = props.resultsTitle
        let title = Object.keys(props.energyInfo)[0]
        let avg = arrayInfo[0].avg
        let min = arrayInfo[0].min
        let max = arrayInfo[0].max
        props.saveOrRemoveFromFaves(zip, title, avg, min, max)
    }

    return(
        <div className="card">
            <h2>Zip: {props.resultsTitle}</h2>
            <h2 className={styleColor}>{Object.keys(props.energyInfo)[0]}</h2>
            <p>Avg: {arrayInfo[0].avg}</p>
            <p>Max: {arrayInfo[0].max}</p>
            <p>Min: {arrayInfo[0].min}</p>
            <button onClick={handleClick} >Save</button>
        </div>
    )
}

export default ZipCard