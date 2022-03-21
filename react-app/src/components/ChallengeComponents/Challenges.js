import React, { useState, useEffect } from 'react';
import Header from '../LayoutComponents/Header';
import PlusIcon from '../IconComponents/PlusIcon';
import CreateChallenge from './CreateChallenge';
import Card from './Card';
import ScrollTopBtn from './ScrollTopBtn';
import { useNavigate } from 'react-router-dom';

// import XHR from '../../XHR'; // Read documentation about auhtorization header problem

const Challenges = (props) => {
    // const {} = props;

    const [ create, setCreate ] = useState(false);
    const [ edit, setEdit ] = useState({});
    const [ topBtn, setTopBtn ] = useState(false);
    const [ sort, setSort ] = useState( 'id' );
    const [ filter, setFilter ] = useState( 'getCommunity' );
    const [ data, setData ] = useState( [] );
    const [ scrollToTop, setScrollToTop ] = useState(false);
    const navigate = useNavigate();

    useEffect( () => {

        fetch( `http://localhost:8888/api/challenges/${filter}/${sort}`, {
            // headers: {
            //      credentials: 'include',
            //      authorization: token
            // }
        })
            .then(res => res.json())
            .then((data) => {
                /* console.log(data); */
                const dataArr = Object.values(data.result);

                setData(dataArr);
            })
            .catch(err=> console.log(err));
        
    }, [ sort, filter ] );

    useEffect ( () => {

        if (scrollToTop) {
            document.querySelector('.challenges-wrapper').scrollTo(0, 0);
            setScrollToTop(false);
        };

    }, [ scrollToTop ])


    function display(e) {
        e.currentTarget.children[1].classList.toggle('display-dropdown');
    }

    function handleTopBtn(e) {
        if ( e.target.scrollTop === 0 ) {
            setTopBtn(false);
        } else { 
            setTopBtn(true);
        }
    }

    function logout() {
        //logout
        fetch( 'http://localhost:8888/api/user/logout', {
            method: 'PUT'
        })
        .then( (res) => res.json() )
        .then( (data) => console.log(data))
        .catch( (err) => console.log(err))

        if ( data.success ) {
            navigate('/start');
        }        
    }
     
    return (
        <>
            <div className="challenges-wrapper" onScroll={(e) => handleTopBtn(e)}>
                
                <Header>
                    <h1>Challenges</h1>
                    {
                        ( !create && Object.keys(edit).length === 0 ) ? 
                            <>
                                <div className="header-button--wrapper">
                                    <div className="header-button" onClick={() => {setCreate(true); document.querySelector('body').style.overflowY = 'hidden'}}>
                                        <PlusIcon />
                                    </div>
                                    <div className="header-button header-button--create" onClick={() => logout()}>
                                        <i className="fas fa-sign-out-alt" title="Logout"></i>
                                    </div>
                                </div>
                            </> : 
                            <>
                                <div className="header-button" onClick={() => {setCreate(false); setEdit({}); document.querySelector('body').style.overflowY = 'hidden'}}>
                                    <span className='fas fa-times button-close'></span>
                                </div>
                            </>
                    }
                </Header>
                <main>
                    <div className="content-view">

                        {create ? <CreateChallenge mode="create"></CreateChallenge> : <></>}
                        
                        {(Object.keys(edit).length !== 0) ? <CreateChallenge mode="edit" values={edit}></CreateChallenge> : <></>}

                        <div className="filterbar mb-2">
                            <div className="filter--sort-wrapper me-1" onClick={(e) => display(e)}>
                                <div className="btn filter-btn filter--sort">
                                    <i className="filter-icon fas fa-sort me-2"></i>
                                    <span className="filter-text">Sortieren</span>
                                </div>    
                                <div className="sort-dropdown">
                                    <span className="sort-option" onClick={() => setSort('title')}>Nach Titel sortieren</span>
                                    <span className="sort-option" onClick={() => setSort('level')}>Nach Level sortieren</span>
                                    <span className="sort-option" onClick={() => setSort('username')}>Nach Usernamen sortieren</span>
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
                                data.map( ( challenge ) => {
                                    
                                    return ( 

                                        <Card 
                                            key={challenge.id}
                                            cid={challenge.id}
                                            setEdit={setEdit} 
                                            filter={filter} 
                                            title={challenge.title}
                                            description={challenge.description}
                                            username={challenge.username}
                                            filename={challenge.filename}
                                            pokemon={challenge.name}
                                            question={challenge.content}
                                            level={challenge.level}
                                            reward={challenge.question_level}                                         
                                        >
                                        </Card>
                                )} )
                            }
                        </div>
                        
                        {
                            (topBtn) ?
                            <ScrollTopBtn setScrollToTop={setScrollToTop}></ScrollTopBtn> : <></>
                        }
                        

                    </div>
                </main>
            </div>
        </>
    );
}

export default Challenges;
    