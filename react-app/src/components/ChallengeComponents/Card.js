import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Pikachu from '../IconComponents/Pikachu';
import CreateChallenge from './CreateChallenge';

const Card = (props) => {


    return (
    <>
        <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-3">
            <div className="card">
                <div className="card-body">
                    <div className="card-body--wrap row mb-2">
                        <div className="poke-view col-5">
                            <div className="poke-view--image">
                                <Pikachu/>
                            </div>
                            <div className="poke-view--name">
                                <span>{props.pokemon}</span>
                            </div>
                            <div className="poke-view--reward">
                                <span>Lvl. {props.level} | +{props.reward}$</span>
                            </div>
                        </div>
                        <div className="challenge-spec col-7">
                            <h3 className="h3 card-title">{props.title}</h3>
                            <div className="challenge-spec--author">
                                <span>{props.username}</span>
                            </div>
                            <p className="card-text">{props.description}</p>
                        </div>
                    </div>

                    {
                        (props.filter === 'getMine') 
                        ? 
                        <>
                            <button className="link-btn--div btn btn-secondary me-2 delete-btn">
                                <i className="far fa-trash-alt me-2"></i>
                                <span className="delete-span">Löschen</span>
                            </button>
                            
                            <button className="link-btn--div btn btn-tertiary edit-btn" onClick={() => props.setEdit(props)}>
                                <i className="far fa-edit me-2"></i>
                                <span className="edit-span">Bearbeiten</span>
                            </button>

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