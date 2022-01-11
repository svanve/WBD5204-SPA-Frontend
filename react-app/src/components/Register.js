import React from 'react';
import { NavLink } from 'react-router-dom';

import BackIcon from './IconComponents/BackIcon';

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
                
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Gib deine Email ein."/>
                        <small id="emailHelp" className="form-text text-muted">Bitte gib eine gültige Emailadresse ein.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
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