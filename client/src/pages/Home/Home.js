import React, { Component } from 'react';
import 'whatwg-fetch';
import {
  setInStorage,
  getFromStorage,
} from '../../utils/storage';
import { Redirect } from 'react-router-dom'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
// UI Kit Magic
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import People from "@material-ui/icons/People";
// UI Kit core components
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
// import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";
// UI Kit core components for Signup Form
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
// form styles
import loginPageStyle from "../../assets/jss/material-dashboard-react/layouts/loginPage.jsx";

// import images
import image from "../../assets/img/sidebar-5.jpg";

import landingPageStyle from "../../assets/jss/material-dashboard-react/layouts/landingPage.jsx";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signUpFirstName: '',
      signUpLastName: '',
      signUpEmail: '',
      signUpPassword: ''
    };

    this.onTextBoxChangeSignUpEmail = this.onTextBoxChangeSignUpEmail.bind(this);
    this.onTextBoxChangeSignUpPassword = this.onTextBoxChangeSignUpPassword.bind(this);
    this.onTextBoxChangeSignUpFirstName = this.onTextBoxChangeSignUpFirstName.bind(this);
    this.onTextBoxChangeSignUpLastName = this.onTextBoxChangeSignUpLastName.bind(this);
    this.onSignUp = this.onSignUp.bind(this)
  }

  componentDidMount() {
    const obj = getFromStorage('the_main_app')

    if (obj && obj.token) {
      const { token } = obj

      // Verify token
      fetch('/api/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false,
            })
          } else {
            this.setState({
              isLoading: false,
            })
          }
        });
    } else {
      this.setState({
        isLoading: false,
      })
    }
  }

  onTextBoxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value
    });
  }

  onTextBoxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value
    });
  }

  onTextBoxChangeSignUpFirstName(event) {
    this.setState({
      signUpFirstName: event.target.value
    });
  }

  onTextBoxChangeSignUpLastName(event) {
    this.setState({
      signUpLastName: event.target.value
    });
  }

  onSignUp() {
    
    // Get state
    const {
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    })

    // Post request to backend
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        firstName: signUpFirstName,
        lastName: signUpLastName,
        email: signUpEmail,
        password: signUpPassword
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json)
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: '',
            signUpFirstName: '',
            signUpLastName: ''
          })
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          })
        }
      })
  }

  // Display page
  render() {
    const {
      isLoading,
      token,
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
      signUpError,
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>)
    }

    if (this.state.toHome === true) {
      return <Redirect to='/signin' />
    }
    
    if (!token) {
      return (

      <div>
        <Header />
        <div
          className="pageHeader"
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
        {/* // ******* UI Kit Work ******* */}
          <div className="container">
            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                <br />
                <h1 className="title white-text">Your Story Starts With Us.</h1>
                <h4 className="white-text">
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
                <br /> 
              </GridItem>

              {/* ************************************ */}
              {/* FIXME: Update Sign up form to UI Kit */}
              {/* ************************************ */}
              <GridItem xs={12} sm={12} md={4}>
                <div className="card grey darken-1">
                  <div className="card-content white-text">
                    {
                      (signUpError) ? (
                        <p>{signUpError}</p>
                      ) : (null)
                    }
                    <span className="card-title">Sign Up!</span>
                    <input
                    type="text"
                    placeholder="First Name"
                    value={signUpFirstName}
                    onChange={this.onTextBoxChangeSignUpFirstName} />
                    <br /><br />
                    <input
                    type="text"
                    placeholder="Last Name"
                    value={signUpLastName}
                    onChange={this.onTextBoxChangeSignUpLastName} />
                    <br /><br />
                    <input
                    type="email"
                    placeholder="Email"
                    value={signUpEmail}
                    onChange={this.onTextBoxChangeSignUpEmail} />
                    <br /><br />
                    <input
                    type="password"
                    placeholder="Password"
                    value={signUpPassword}
                    onChange={this.onTextBoxChangeSignUpPassword} />
                    <br /><br />
                    <button className='btn' color="#ff1744" onClick={this.onSignUp}>Sign Up
                      <i class="material-icons right">send</i>
                    </button>
                  </div>
                </div>
              </GridItem>

            </GridContainer>
          </div>
        </div>

        {/* // ******* END UI Kit Work ******* */}

        {/* <div className='container'>
          <div className="row">
            
            <div className="col s8 valign-center">
              <div className="card">
                <div className="card-content black-text">
                  <h1>Hello World!</h1>
                </div>
              </div>
            </div>
            
            <div className="col s4">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  {
                    (signUpError) ? (
                      <p>{signUpError}</p>
                    ) : (null)
                  }
                  <span className="card-title">Sign Up!</span>
                  <input
                  type="text"
                  placeholder="First Name"
                  value={signUpFirstName}
                  onChange={this.onTextBoxChangeSignUpFirstName} />
                  <br /><br />
                  <input
                  type="text"
                  placeholder="Last Name"
                  value={signUpLastName}
                  onChange={this.onTextBoxChangeSignUpLastName} />
                  <br /><br />
                  <input
                  type="email"
                  placeholder="Email"
                  value={signUpEmail}
                  onChange={this.onTextBoxChangeSignUpEmail} />
                  <br /><br />
                  <input
                  type="password"
                  placeholder="Password"
                  value={signUpPassword}
                  onChange={this.onTextBoxChangeSignUpPassword} />
                  <br /><br />
                  <button className='btn' onClick={this.onSignUp}>Sign Up</button>
                </div>
              </div>
            </div> 
          </div> 

        </div> */}
        <Footer />
      </div>

      )
    }
    return (

      <Redirect to='/' />

    );
  }
}

export default withStyles(landingPageStyle)(Home);