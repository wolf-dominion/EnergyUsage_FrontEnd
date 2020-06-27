import React, {Component} from 'react'


class Login extends Component {
    state = {
        username: "",
        password: "",
        error: ""
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        const usersURL = 'http://localhost:3000/login'
        fetch(usersURL, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => {
            if(response.status === 200) {
                return response.json()
            } else if(response.status === 401) {
                throw new Error("Log in failed")
            }
        })
        .then(result => {
            console.log('result',result)
            localStorage.setItem("token", result.token)
            alert("You are now logged in!")
            this.props.changeLoggedinStatus()

        })
        .catch(error => this.setState({error: error.message}))
    }

    render(){
        const {username, password} = this.state
        return(
            <form className="login" onSubmit={this.handleSubmit}>
            <label>Login:</label>
            {this.state.error ? <p>{this.state.error}</p> : null}

            <br />
            <input 
                tpye="text"
                name="username"
                value={username}
                placeholder="username"
                onChange={this.handleChange}>
            </input>
            <br />
            <input 
                tpye="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={this.handleChange}>
            </input>
            <br />
            <br />
            <input type="submit" value="login"></input>
            </form>
        )
    }
}

export default Login