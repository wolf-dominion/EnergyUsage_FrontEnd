import React from 'react'
import Favorite from './Favorite'

function Fm(props){

    console.log('faves: ', props);
    

    const generateCards = () => {
        let sr = props.faves
        return sr.map(fave => {
            return <Favorite 
                key={sr.indexOf(fave)} 
                fave={fave}
                saveOrRemoveFromFaves={props.saveOrRemoveFromFaves}
                />
        })
    }

    return(
        <div>
            <h2>Favorite maps page</h2>
            {generateCards()}
        </div>
    )
}

export default Fm