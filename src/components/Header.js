import React from 'react'
import {Link} from 'react-router-dom'

function Header({loggedIn, changeLoggedinStatus}) {

    //console.log('loggedIn from Header: ', loggedIn);
    
    return(
        <nav>
        <Link to='/'>Home</Link>
        <Link to='/myProfile' >My Profile</Link>

        <Link 
            onClick={loggedIn ? changeLoggedinStatus : null} 
            to='/Authenticate'
            >
            {loggedIn ? "Logout" : "Login"}
        </Link>
    </nav>
    )

}


export default Header