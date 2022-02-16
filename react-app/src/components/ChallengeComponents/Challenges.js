import React, { useState, useEffect } from 'react';
// import PlusIcon from '../IconComponents/PlusIcon.js';
import Header from '../LayoutComponents/Header';
import Card from './Card';

const Challenges = (props) => {
    // const {} = props;

    const [ sort, setSort ] = useState( 'id' );
    
    // const ALLCHALLENGES = 'ALLCHALLENGES';
    // const MYCHALLENGES = 'MYCHALLENGES';
    // const COMMUNITYCHALLENGES = 'COMMUNITYCHALLENGES';
    
    // // useReduceer für einzelne Filterfunktionen benutzen?
    
    // const [ filter, dispatch ] = useReducer( reducer, initialState );
    
    // const initalState = ALLCHALLENGES;
    
    // const async reducer = (state, action) => {
    //     switch (action.type) {
    //         case ALLCHALLENGES:
    //             fetch( `http://localhost:8888/api/challenges/getAll/${sortBy}`, {
    //                 method: 'GET',
    //                 headers: 'application/json'
    //             })
    //             .then(res => res.json())
    //             .then(data => console.log(data));
    //             break;
    
    //         case COMMUNITYCHALLENGES:
    //             fetch( `http://localhost:8888/api/challenges/getCommunity/${sortBy}`, {
    //                 method: 'GET',
    //                 headers: 'application/json'
    //             })
    //             .then(res => res.json())
    //             .then(data => console.log(data));
    //             break;
        
    //         case MYCHALLENGES:
    //             fetch( `http://localhost:8888/api/challenges/getMine/${sortBy}`, {
    //                 method: 'GET',
    //                 headers: 'application/json'
    //             })
    //             .then(res => res.json())
    //             .then(data => console.log(data));
    //             break;
        
    //         default: 
    //             fetch( `http://localhost:8888/api/challenges/getMine/${sortBy}`, {
    //                 method: 'GET',
    //                 headers: 'application/json'
    //             })
    //             .then(res => res.json())
    //             .then(data => console.log(data));
    //             break;
    //     }
    // }
          


    function display(e) {
        e.currentTarget.children[1].classList.toggle('display-dropdown');
    }
                        
    return (
        <>
            <div className="challenges-wrapper">
                <Header><h1>Challenges</h1></Header>
                <main>
                    <div className="content-view">
                    
                        <div className="filterbar mb-2">
                            <div className="filter--sort-wrapper me-1" onClick={(e) => display(e)}>
                                <div className="btn filter-btn filter--sort">
                                    <i className="filter-icon fas fa-sort me-2"></i>
                                    <span className="filter-text">Sortieren</span>
                                </div>    
                                <div className="sort-dropdown">
                                    <span className="sort-option" onClick={() => setSort('title')}>Nach Titel sortieren</span>
                                    <span className="sort-option" onClick={() => setSort('level')}>Nach Level sortieren</span>
                                    <span className="sort-option" onClick={() => setSort('username')}>Nach Usernamen</span>
                                    <span className="sort-option" onClick={() => setSort('id')}>Älteste zuerst</span>
                                </div>
                            </div>
                            <div className="btn filter-btn filter--my-challenges me-1" >
                                <i className="filter-icon fas fa-filter me-2"></i>
                                <span className="filter-text">Meine Challenges</span>
                            </div>
                            <div className="btn filter-btn filter--community" >
                                <i className="filter-icon fas fa-filter me-2"></i>
                                <span className="filter-text">Community</span>
                            </div>
                        </div>

                        <div className="cards-wrapper">
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}

export default Challenges;
    