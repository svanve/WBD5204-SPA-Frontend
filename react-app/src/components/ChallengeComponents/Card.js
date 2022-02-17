import React from 'react';
import { NavLink } from 'react-router-dom';
import Pikachu from '../IconComponents/Pikachu';

const Card = (props) => {
    // const {} = props;
    // get Data here

    return (
    <>
        <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-2">
            <div className="card">
                <div className="card-body">
                    <div className="card-body--wrap row mb-2">
                        <div className="poke-view col-5">
                            <div className="poke-view--image">
                                <Pikachu/>
                            </div>
                            <div className="poke-view--name">
                                <span>Pikachu</span>
                            </div>
                            <div className="poke-view--reward">
                                <span>lvl. 66 | +3$</span>
                            </div>
                        </div>
                        <div className="challenge-spec col-7">
                            <h3 className="h3 card-title">Special title treatment</h3>
                            <div className="challenge-spec--author">
                                <span>MandyMan33</span>
                            </div>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>

                    {
                        (props.filter === 'getMine') 
                        ? 
                        <>
                            <div className="link-btn--div btn btn-secondary me-2 delete-btn">
                                <i className="far fa-trash-alt me-2"></i>
                                <span className="delete-span">Löschen</span>
                            </div>
                            <NavLink to="/start" className="link-btn">
                                <div className="link-btn--div btn btn-primary edit-btn">
                                    <i className="far fa-edit me-2"></i>
                                    <span className="edit-span">Bearbeiten</span>
                                </div>
                            </NavLink>
                        </> 
                        :
                        <NavLink to="/start" className="link-btn">
                        <div className="link-btn--div btn btn-primary">
                            <i className="fas fa-bolt me-2"></i>
                            <span className="challenge-cta">Challenge!</span>
                        </div>
                        </NavLink>
                    }

                </div>
            </div>
        </div>
    </>
    );
}


export default Card;