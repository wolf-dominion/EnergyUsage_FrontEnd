import React from 'react'

function ZipCard(props) {

    console.log('props from zipcard: ', props);
    let arrayInfo = []

    const turnObjToArray = () => {
        arrayInfo = Object.values(props.energyInfo)
    }

    turnObjToArray()

    console.log('arrayInfo: ', arrayInfo[0].min);
    

    return(
        <div>
            <h2>{Object.keys(props.energyInfo)[0]}</h2>
            <p>Avg: {arrayInfo[0].avg}</p>
            <p>Max: {arrayInfo[0].max}</p>
            <p>Min: {arrayInfo[0].min}</p>
        </div>
    )
}

export default ZipCard