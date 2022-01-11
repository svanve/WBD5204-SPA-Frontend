import React from 'react';

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
                    <button className="btn btn-primary">
                        Anmelden
                    </button>

                    <button className="btn btn-secondary my-3">
                        Registrieren
                    </button>
                </div>
            </div>
            
        </div>
    </>
    );
}

export default startTwo;