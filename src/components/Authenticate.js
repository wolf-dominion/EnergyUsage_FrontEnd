import React, { Component } from 'react'

import Login from './Login'
import Signup from './Signup'

class Authenticate extends Component {

    state = {
        isLogin: true
    }
    
    toggle = () => {
        this.setState({isLogin: !this.state.isLogin})
    }

    render(){
        //console.log('props: ', this.props);
        
        const { isLogin } = this.state
        return(
            <div className="authenticate">
                {isLogin 
                    ? 
                        <Login 
                            changeLoggedinStatus={this.props.changeLoggedinStatus}/> 
                    : 
                        <Signup 
                            changeLoggedinStatus={this.props.changeLoggedinStatus}/>
                }

                <button onClick={this.toggle}>
                    {isLogin ? "Sign Up?" : "Login?"}
                </button>
            </div>
        )
    }
}

export default Authenticate