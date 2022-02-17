import React, { useState, useEffect } from 'react';
// import PlusIcon from '../IconComponents/PlusIcon.js';
import Header from '../LayoutComponents/Header';
import PlusIcon from '../IconComponents/PlusIcon';
import CreateChallenge from './CreateChallenge';
import Card from './Card';

const Challenges = (props) => {
    // const {} = props;

    const [ create, setCreate ] = useState(false);
    const [ sort, setSort ] = useState( 'id' );
    const [ filter, setFilter ] = useState( 'getCommunity' );
    
    
    useEffect( () => {
        console.log(filter);
        console.log(sort);
        fetch( `http://localhost:8888/api/challenges/${filter}/${sort}`)
        .then(res=>console.log(res))
        .then(data=>console.log(data))
        .catch(err=> console.log(err));
    }, [ sort, filter] );          


    function display(e) {
        e.currentTarget.children[1].classList.toggle('display-dropdown');
    }
                        
    return (
        <>
            <div className="challenges-wrapper">
                
                <Header>
                    <h1>Challenges</h1>
                    {
                        (!create) ? 
                            <>
                                <div className="header-button" onClick={() => {setCreate(true); document.querySelector('body').style.overflowY = 'hidden'}}>
                                    <PlusIcon/>
                                </div>
                            </> : 
                            <>
                                <div className="header-button" onClick={() => {setCreate(false); document.querySelector('body').style.overflowY = 'hidden'}}>
                                    <span className='fas fa-times button-close'></span>
                                </div>
                            </>
                    }
                </Header>
                <main>
                    <div className="content-view">

                        {create ? <CreateChallenge></CreateChallenge> : <></>}
                    
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
                            <div className="btn filter-btn filter--my-challenges me-1" onClick={() => setFilter('getMine')}>
                                <i className="filter-icon fas fa-filter me-2"></i>
                                <span className="filter-text">Meine Challenges</span>
                            </div>
                            <div className="btn filter-btn filter--community" onClick={() => setFilter('getCommunity')}>
                                <i className="filter-icon fas fa-filter me-2"></i>
                                <span className="filter-text">Community</span>
                            </div>
                        </div>

                        <div className="cards-wrapper">
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                            <Card filter={filter}></Card>
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}

export default Challenges;
    