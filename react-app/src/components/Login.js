import React from 'react';
import BackIcon from './IconComponents/BackIcon';
import { NavLink } from 'react-router-dom';

const Login = (props) => {
    // const {} = props;
    return (
        <>
            <div id="m-login" >
    
                <div className='container start-container'>
                    <div className="start-nav d-flex ">
                        <NavLink to="/start" className="back-icon-div">
                                <BackIcon className="back-icon"></BackIcon>
                        </NavLink>
                        <p className='h1'>Login</p>
                    </div>
                    
                    <form enctype="multipart/form-data">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" name="username" aria-describedby="usernameHelp" placeholder="Dein Username"/>
                            <small id="usernameHelp" className="form-text text-muted">Bitte gib einen gültigen Usernamen ein.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Passwort</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Passwort"/>
                        </div>
                        
                        <div className="btn-wrapper">
                            <NavLink to="/challenges">
                                <button className="start-btn btn btn-primary my-3">
                                    Anmelden
                                </button>
                            </NavLink>
                        </div>
                    </form>
                    
                </div>
                
            </div>
        </>
        );
}

export default Login;