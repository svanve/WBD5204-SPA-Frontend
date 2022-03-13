import React, { useState, useEffect } from 'react';
// import PlusIcon from '../IconComponents/PlusIcon.js';
import Header from '../LayoutComponents/Header';
import PlusIcon from '../IconComponents/PlusIcon';
import CreateChallenge from './CreateChallenge';
import Card from './Card';

// import XHR from '../../XHR'; // Read documentation about auhtorization header problem

const Challenges = (props) => {
    // const {} = props;

    const [ create, setCreate ] = useState(false);
    const [ sort, setSort ] = useState( 'id' );
    const [ filter, setFilter ] = useState( 'getCommunity' );
    const [ data, setData ] = useState( [] );


    useEffect( () => {

        // read documentation about authorization header problem:
        // let token = localStorage.getItem( 'jwt' );

        // console.log(token);

        fetch( `http://localhost:8888/api/challenges/${filter}/${sort}`, {
            // headers: {
            //      credentials: 'include',
            //      authorization: token
            // }
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                const dataArr = Object.values(data.result);

                setData(dataArr);
            })
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
                            {
                                data.map( (challenge, key ) => {
                                    return ( 
                                        <Card 
                                            key={key} 
                                            filter={filter} 
                                            title={challenge.title}
                                            description={challenge.description}
                                            username={challenge.username}
                                            filename={challenge.filename}
                                            pokemon={challenge.name}
                                            level={challenge.level}
                                            reward={challenge.question_level}                                            
                                        >
                                        </Card>
                                )} )
                            }
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}

export default Challenges;
    