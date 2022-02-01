import React from 'react';
import { NavLink } from 'react-router-dom';

import BackIcon from '../IconComponents/BackIcon';
import RegisterDropzone from './RegisterDropzone';

const Register = (props) => {
    // const {} = props;
    return (
    <>
        <div id="m-register" >

            <div className='container start-container'>
                <div className="start-nav d-flex ">
                    <NavLink to="/start" className="back-icon-div">
                            <BackIcon className="back-icon"></BackIcon>
                    </NavLink>
                    <h1>Registrieren</h1>
                </div>
                
                <form enctype="multipart/form-data">
                    <div className="form-group">
                        <label htmlFor="username">Vorname</label>
                        <input type="text" className="form-control" id="username" name="firstname" aria-describedby="firstNameHelp" placeholder="Dein Vorname"/>
                        <small id="firstNameHelp" className="form-text text-muted">Gib deinen Vornamen ein.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Nachname</label>
                        <input type="text" className="form-control" id="last-name" name="lastname" aria-describedby="lastNameHelp" placeholder="Dein Nachname"/>
                        <small id="lastNameHelp" className="form-text text-muted">Gib deinen Nachnamen ein.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" name="username" aria-describedby="usernameHelp" placeholder="Dein Username"/>
                        <small id="usernameHelp" className="form-text text-muted">Bitte gib einen gültigen Usernamen ein.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Emailaddresse</label>
                        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Deine Email"/>
                        <small id="emailHelp" className="form-text text-muted">Bitte gib eine gültige Emailadresse ein.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Passwort</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Passwort"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-repeat">Passwort wiederholen</label>
                        <input type="password" className="form-control" id="password-repeat" name="password_repeat" placeholder="Passwort"/>
                    </div>

                    <RegisterDropzone></RegisterDropzone>
                    
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="agb"/>
                        <label className="form-check-label" htmlFor="agb">Ich habe die AGB gelesen und stimme ihnen zu.</label>
                    </div>
                    <div className="btn-wrapper">
                        <NavLink to="/challenges">
                            <button className="btn btn-primary my-3">
                                Registrieren
                            </button>
                        </NavLink>
                    </div>
                </form>
                
            </div>
            
        </div>
    </>
    );
}

export default Register;