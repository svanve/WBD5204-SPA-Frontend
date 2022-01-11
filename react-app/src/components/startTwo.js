import React from 'react';
import { NavLink } from 'react-router-dom';

import AshIcon from './IconComponents/AshIcon';

const startTwo = (props) => {
    // const {} = props;
    return (
    <>
        <div id="m-start-two" >
            <div className='container start-container'>
                <h1>Let's play!</h1>

                <div id="ash-wrapper">
                    <AshIcon></AshIcon>
                </div>

                <div className="btn-wrapper">
                    <NavLink to="/login">
                        <button className="btn btn-primary">
                            Anmelden
                        </button>
                    </NavLink>

                    <NavLink to="/register">
                        <button className="btn btn-secondary my-3">
                            Registrieren
                        </button>
                    </NavLink>
                </div>
            </div>
            
        </div>
    </>
    );
}

export default startTwo;