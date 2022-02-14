import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import BackIcon from '../IconComponents/BackIcon';
import RegisterDropzone from './RegisterDropzone';

const Register = (props) => {
    // const {} = props;

    // 1) append FormData from all but Dropzone
    //
    // 2) submit formData

    const [ formdata, setFormdata ] = useState( {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        image: null
    } );

    async function onSubmitHandler( e ) {
        e.preventDefault();

        const formData = new FormData();

        for (const key in formdata) {
            formData.append( key, formdata[key] )
        }

        // for(var pair of formData.entries()) {
        //     console.log(pair[0]+ ', '+ pair[1]);
        // }

        const response = await fetch( 'http://localhost:8888/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/formdata'
            },
            body: formData
        })

        const data = await response.json();
        console.log(data);

    }

    return (
    <>
        <div id="m-register" >

            <div className='container start-container'>
                <div className="start-nav d-flex ">
                    <NavLink to="/start" className="back-icon-div">
                            <BackIcon className="back-icon"></BackIcon>
                    </NavLink>
                    <p className='h1'>Registrieren</p>
                </div>
                
                <form onSubmit={(e) => onSubmitHandler(e)} novalidate>
                    <div className="form-group">
                        <label htmlFor="prename">Vorname</label>
                        <input onChange={(e) => setFormdata({...formdata, firstname: e.target.value})} value={formdata.firstname} type="text" className="form-control" id="prename" name="firstname" aria-describedby="firstNameHelp" placeholder="Dein Vorname"/>
                        <small id="firstNameHelp" className="form-text text-muted">Gib deinen Vornamen ein.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Nachname</label>
                        <input onChange={(e) => setFormdata({...formdata, lastname: e.target.value})} value={formdata.lastname} type="text" className="form-control" id="last-name" name="lastname" aria-describedby="lastNameHelp" placeholder="Dein Nachname"/>
                        <small id="lastNameHelp" className="form-text text-muted">Gib deinen Nachnamen ein.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input onChange={(e) => setFormdata({...formdata, username: e.target.value})} value={formdata.username} type="text" className="form-control" id="username" name="username" aria-describedby="usernameHelp" placeholder="Dein Username"/>
                        <small id="usernameHelp" className="form-text text-muted">Bitte gib einen gültigen Usernamen ein.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Emailaddresse</label>
                        <input onChange={(e) => setFormdata({...formdata, email: e.target.value})} value={formdata.email} type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Deine Email"/>
                        <small id="emailHelp" className="form-text text-muted">Bitte gib eine gültige Emailadresse ein.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Passwort</label>
                        <input onChange={(e) => setFormdata({...formdata, password: e.target.value})} value={formdata.password} type="password" className="form-control" id="password" name="password" placeholder="Passwort"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-repeat">Passwort wiederholen</label>
                        <input type="password" className="form-control" id="password-repeat" name="password_repeat" placeholder="Passwort"/>
                    </div>

                    <RegisterDropzone formdata={formdata} setFormdata={setFormdata}></RegisterDropzone>
                    
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="agb"/>
                        <label className="form-check-label" htmlFor="agb">Ich habe die AGB gelesen und stimme ihnen zu.</label>
                    </div>
                    <div className="btn-wrapper">
                            <button className="start-btn btn btn-primary my-3">
                                Registrieren
                            </button>
                    </div>
                </form>
                
            </div>
            
        </div>
    </>
    );
}

export default Register;