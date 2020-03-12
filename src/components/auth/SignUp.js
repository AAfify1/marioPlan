import React, { Component } from "react";
import {Redirect} from 'react-router-dom'
import { connect } from "react-redux"


class SignUp extends Component {
  state = {
      email: '',
      password :'',
      firstName:'',
      lastName: ''
  };
  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value

      })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
}
  render() {
    const { auth} = this.props

    if(auth.uid) return <Redirect to='/' />
    return <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" onChange={this.handleChange} id="firstName"/>
            </div>
            <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" onChange={this.handleChange} id="lastName"/>
            </div>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" onChange={this.handleChange} id="email"/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={this.handleChange} id="password"/>
            </div>
           
            
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">SignUp</button>
            </div>
        </form>
    </div>;
  }
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }

  export default 
    connect(mapStateToProps)(SignUp)