import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {MdLocationOn, MdCall, MdEmail} from "react-icons/md";
import axios from "axios"

import Popup from "./Popup";

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            message: '',
            nameError: false,
            emailError: false,
            messageError: false,
            isDisabled: true,
            showPopup: false,
            popupMessage: "",
            popupColor: ""
        }
    }

    validateEmail = (email) => {
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const result = pattern.test(email);
        if (result === true) {
            this.setState({
                emailError: false,
                email
            })
        } else {
            this.setState({
                emailError: true
            })
        }
    }

    onChange = (e) => {
        let {nameError, emailError, messageError} = this.state;
        // this regexp will be to match just Strings not john 244 i.e only john doe && john
        let namePattern = /^[A-Za-z]*$/g || /^[a-zA-Z][a-zA-Z\s]*$/g;
        this.setState({
            [e.target.id]: e.target.value
        });
        //query data from from i.e map email against email validator, and valid name to be string not numerals
        if (e.target.name === "name") {
            if ((e.target.value === "" && namePattern.test(e.target.value)) && e.target.value === null) {
                this.setState({ 
                    nameError: true
                });
            }else {
                this.setState({
                    nameError: false,
                    name: e.target.value
                })
            }
        } 
        if (e.target.name === 'email'){
            this.validateEmail(e.target.value);
        }
        if (e.target.name === "message"){
            if (e.target.value === "" || e.target.value === null) {
                this.setState({
                    messageError: true
                })
            }else {
                this.setState({
                    messageError: false,
                    message: e.target.value
                })
            }
        }
        if (nameError === false && emailError === false && messageError === false){
            this.setState({
                isDisabled: false
            });
        }
    }

    onSubmit = (e) => {
        const {message, name, email, showPopup} = this.state;
        e.preventDefault();
        //console.log(`button clicked`);
        //get data from form        
        const userData = {
            name,
            email,
            message
        };
        console.log(userData);
        //data to api
        try {
            axios.post("http://localhost:5000/api/v4/user/", userData)
            .then(res => {
                //console.log(res.data);
                if (res.data.status === "success"){
                    this.setState({
                        showPopup: true,
                        popupMessage: "Thank you for reaching out to us!"
                    });
                    setTimeout(() => {
                        this.setState({
                            showPopup: false
                        })
                    }, 5000)
                }
            })
            .catch(err => {
                const {error} = err.response.data;
                if (error.code === 11000) {
                    const value = err.response.data.message.match(/(["'])(\\?.)*?\1/)[0];
                    const message = `This email address ${value} already exist. please provide another email address`;
                    this.setState({
                        showPopup: true,
                        popupMessage: message,
                        popupColor: 'alert-red'
                    });
                    setTimeout(() => {
                        this.setState({
                            showPopup: false
                        })
                    }, 6500)
                } 
            })
        } catch (err) {
            this.setState({
                showPopup: true,
                popupMessage: "oops! something occurred",
                popupColor: 'alert-red'
            });
            setTimeout(() => {
                this.setState({
                    showPopup: false
                })
            }, 6500)
        }
        
    }
    render() {
        const {
            message, name, email, nameError, emailError, messageError, isDisabled, 
            showPopup, popupMessage, popupColor
        } = this.state;
        return (
            <div className="contact-row">
                {/* this guy 👇 is for popup */}
                {showPopup && <Popup content={popupMessage} color={popupColor} name={name}/>}

                <div className="contact-block">
                    <div className="contact-container">
                        <div className="contact-main">
                            <h4>for any queries and support</h4>
                            <div className="contact-details">
                                <div className="contact-detailBox">
                                    <span className="contact-detailIcon">
                                        <MdLocationOn className="contact-detailIcon-logo"/>
                                    </span>
                                    <div className="contact-details_text">
                                        <span className="contact-details_text-bd">company location</span>
                                        <span>awka, Anambra</span>
                                    </div>
                                </div>

                                <div className="contact-detailBox">
                                    <span className="contact-detailIcon">
                                        <MdCall className="contact-detailIcon-logo"/>
                                    </span>
                                    <div className="contact-details_text">
                                        <span className="contact-details_text-bd">call us on</span>
                                        <span>09060311932</span>
                                        <span>09057656267</span>
                                    </div>
                                </div>
                            
                                <div className="contact-detailBox">
                                    <span className="contact-detailIcon">
                                        <MdEmail className="contact-detailIcon-logo"/>
                                    </span>
                                    <div className="contact-details_text">
                                        <span className="contact-details_text-bd">write to us at</span>
                                        <span>ikezuby2012@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-container">
                        <div className="contact_form">
                            <form noValidate className="contact_form-div" onSubmit={(e) => this.onSubmit(e)}>
                                <div className="contact_form-group">
                                    <input type="text"
                                    //    onChange={this.onChange}
                                    className="contact_form-input"
                                    placeholder="john doe" 
                                    value={name}
                                    id="name"
                                    name="name"
                                    onChange={(e) => this.onChange(e)}
                                    required
                                    />
                                    <label htmlFor="name" className="contact_form-label">
                                        your name
                                    </label>
                                    {nameError ? (<p className="contact-warningText">
                                        please make sure your name only contain string e.g john doe
                                        </p>) : ""}
                                </div>
                                <div className="contact_form-group">
                                    <input type="email"
                                        onChange={this.onChange}
                                        className="contact_form-input"
                                        placeholder="yourmail@mail.com" 
                                        id="email"
                                        name="email"
                                        value={email}
                                        />
                                    <label htmlFor="email" className="contact_form-label">
                                        Email address 
                                    </label>
                                    {emailError && (<p className="contact-warningText">
                                        please enter a valid email!
                                        </p>) }
                                </div>
                                <div className="contact_form-group">
                                    <textarea
                                        //required
                                        className="contact_form-input contact_form-input-1"
                                        placeholder="Enter Your Message" 
                                        id="message"
                                        name="message"
                                        value={message}
                                        onChange={(e) => this.onChange(e)}
                                    />
                                    <label htmlFor="message" className="contact_form-label">
                                        message
                                    </label>
                                    
                                    {messageError ? (<p className="contact-warningText">
                                        please drop a message!
                                        </p>) : ""}
                                </div>
                                {/* <GiAlienFire className="center"/> */}
                                <button type="submit" disabled={isDisabled} className="contact_form-btn btn btn--green">send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};


export default Contact;
