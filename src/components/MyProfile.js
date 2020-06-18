import React from 'react'
import Fm from './Fm'

function MyProfile(props){
    return(
        <div>
            <h2>My profile</h2>
            < Fm faves={props.faves}/>
        </div>
    )
}

export default MyProfile