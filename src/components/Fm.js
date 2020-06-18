import React from 'react'
import Favorite from './Favorite'

function Fm(props){

    //console.log('faves: ', props);
    

    const generateCards = () => {
        let sr = props.faves
        return sr.map(fave => {
            return <Favorite 
                key={sr.indexOf(fave)} 
                fave={fave}
                removeFave={props.removeFave}
                />
        })
    }

    return(
        <div className="cards-container">
            {generateCards()}
        </div>
    )
}

export default Fm