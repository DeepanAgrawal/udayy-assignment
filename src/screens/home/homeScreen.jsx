import React, { Component } from 'react';
import './homeScreen.css'

class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            url1: "",
            url2: ""
        }
    }
    /**
 *React life cycle methods
 */
    componentDidMount(){
        if(sessionStorage.getItem('session')){
            this.setState({
                url1: sessionStorage.getItem('webURL1'),
                url2: sessionStorage.getItem('webURL2')
            })
        }
        this.setState({
            name : sessionStorage.getItem('userName')
        })

    }
    /**
 * @param {object} x event object..
 * Updates the state value of 1st textbox URL 
 * Set the value of 1st textbox URL to session storage
 */
    onURL1Change(event){
        this.setState({
            url1 : event.target.value
        }, function() {
            sessionStorage.setItem('webURL1', this.state.url1)
        })

    }
     /**
 * @param {object} x event object..
 * Updates the state value of 2nd textbox URL 
 * Set the value of 2nd textbox URL to session storage
 */
    onURL2Change(event){
        this.setState({
            url2 : event.target.value
        },function() {
            sessionStorage.setItem('webURL2', this.state.url2)
        })
    }
     /**
 * Removes the value of 1st textbox URL from session storage
 * Removes the value of 2nd textbox URL from session storage
 * Removes the value of session boolean from session storage
 * Removes the value of username from session storage
 * Redirect it back to login page
 */
    onClickLogOutBtn(){
        sessionStorage.removeItem('session')
        sessionStorage.removeItem('userName')
        sessionStorage.removeItem('webURL1')
        sessionStorage.removeItem('webURL2')
        this.props.history.replace('/')
    }
    render(){
        const {name, url1, url2} = this.state;
        return(
            <div className="container">
                <div className="navBarContainer">
                    <label className="userNameLabel" >{name}</label>
                    <input className="urlBox" placeholder="web address" type="text" value={url1} onChange={(event) => this.onURL1Change(event)}/>
                    <input className="urlBox" placeholder="web address" type="text" value={url2} onChange={(event) => this.onURL2Change(event)}/>
                    <button className="logOutBtn" onClick={() => this.onClickLogOutBtn()}>Log Out</button>
                </div>
                <div className="homeContainer">
                <iframe className="webContainer1" src={url1}></iframe>
                <iframe className="webContainer2" src={url2}></iframe>
                </div>
            </div>
        )
    }
}

export default HomeScreen;