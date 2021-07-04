import React, { Component } from 'react';
import './loginScreen.css';

class LoginScreen extends Component{
    
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        }
        
        // if session is active than it will redirect to home screen. 
        if(sessionStorage.getItem('session')){
            this.props.history.replace('home')
        }
    }
    /**
 * Checks the username and password if it matches than redirects to home screen.
 * username and password are hardcoded
 * set values to sessionstorage.
 */
    onClickLogin(){
        const {username, password} = this.state;
        if(username && password && username === "test@udayy.com" && password==="password"){
            sessionStorage.setItem('session', true)
            sessionStorage.setItem('userName', username);
            this.props.history.push('/home')
        }else{
            alert("Please enter proper username and password. Please enter 'test@udayy.com' & 'password' ")
        }
    }
    /**
 * @param {object} x event object.
 * Updates the state value of username 
 */
    onUserNameChange(event){
        this.setState({
            username : event.target.value
        })
    }
      /**
 * @param {object} x event object.
 * Updates the state value of password 
 */
    onPasswordChange(event){
        this.setState({
            password : event.target.value
        })
    }
    
    render(){
        const {username, password} = this.state
        return(
            <div className="loginContainer">
                
                <div className="loginBox">
                <h3>Member Login</h3>
                    <div className="userNameContainer">
                    <input placeholder="Username"  type="text" value={username} onChange={(event) => this.onUserNameChange(event)}/>
                    </div>
                    <div className="userNameContainer">
                    <input placeholder="Password"  type="password"  value={password} onChange={(event) => this.onPasswordChange(event)}/>
                    </div>
                    <div className="btnClass">
                    <button onClick={() => this.onClickLogin()}>Login</button>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default LoginScreen;