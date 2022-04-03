import React from 'react';

const WinStateModal = (props) => {

    // Add-on: read documentation for further info
    // if (!props.winState[0]) {levelUp(props.pokemon_id)};
    // function levelUp (pokemon_id) {
    //     // const token = localStorage.getItem( 'jwt' ); 
        
    //     fetch( `${process.env.REACT_APP_BACKEND_URI}/api/challenges/delete/${challenge_id}`, {
    //         method: 'PUT',
    //         // headers: {
    //         //     'Content-Type': 'application/json',
    //         //     'credentials': 'include',
    //         //     'authorization': token
    //         // }
    //     })
    // }

    return (
        <>
            <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" style={(props.winState[0]) ? {color: '#44D7B6'} : {color: 'indianred'}}>
                            {(props.winState[0]) ? 'Mitten ins Schwarze!' : 'Das war ein Schuss in den Ofen!'}
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {props.setWinModal(false); props.setGameMode(false)}}></button>
                    </div>
                    <div className="modal-body">
                        <p>{props.winState[1]}</p>
                    </div>
                    <div className="modal-footer">
                        <button className="win-state-modal--btn btn btn-primary" onClick={() => {props.setWinModal(false); props.setGameMode(false)}}>
                            <i class="fas fa-undo-alt me-2"></i>
                            <span className="delete-span">Zu den Challenges</span>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WinStateModal;