import React, { useState, useEffect } from 'react';
import Header from '../LayoutComponents/Header';
import PlusIcon from '../IconComponents/PlusIcon';
import CreateChallenge from './CreateChallenge';
import DeleteModal from './DeleteModal';
import Card from './Card';
import ScrollTopBtn from './ScrollTopBtn';
import GameMode from './GameMode';
import BlackDropback from '../LayoutComponents/BlackDropback';
// import { useNavigate } from 'react-router-dom';


const Challenges = (props) => {
    // const {} = props;

    const [ create, setCreate ] = useState(false);
    const [ edit, setEdit ] = useState({});
    const [ topBtn, setTopBtn ] = useState(false);
    const [ sort, setSort ] = useState( 'id' );
    const [ filter, setFilter ] = useState( 'getCommunity' );
    const [ data, setData ] = useState( [] );
    const [ scrollToTop, setScrollToTop ] = useState(false);
    const [ modal, setModal ] = useState(false);
    const [ deleteData, setDeleteData ] = useState({});
    const [ gameMode, setGameMode ] = useState(false);
    const [ gameData, setGameData ] = useState({});
    const [ time, setTime ] = useState(false);
    // const navigate = useNavigate();

    useEffect( () => {

        // get Challenges
        
        // const token = localStorage.getItem( 'jwt' ); 

        fetch( `${process.env.REACT_APP_BACKEND_URI}/api/challenges/${filter}/${sort}`, {
            // headers: {
            //     'Content-Type':  'application/json',
            //     'credentials':   'include',
            //     'authorization': token
            // }
        })
            .then(res => res.json())
            .then((dt) => {

                if( dt.success ) {
                    const dataArr = Object.values(dt.result);
                    setData(dataArr);
                }  
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

        // const token = localStorage.removeItem( 'jwt' ); 

        //logout
        fetch( `${process.env.REACT_APP_BACKEND_URI}/api/user/logout`, {
            method: 'PUT',
            // headers: {
            //     'Content-Type':  'application/json',
            //     'credentials':   'include',
            //     'authorization': token
            // }
        })
        .then( (res) => res.json() )
        .then( (dt) => {
            // if ( dt.success ) {
            //     navigate('/start');
            // } else {
            //     throw 'Logout hat nicht funktioniert';
            // }
        })
        .catch( (err) => console.log(err))        
    }

    // FREMDCODE StackOverflow:
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        
        return array;
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

                        {create ? <CreateChallenge mode="create" setModal={setModal}></CreateChallenge> : <></>}
                        
                        {(Object.keys(edit).length !== 0) ? <CreateChallenge mode="edit" values={edit} setModal={setModal}></CreateChallenge> : <></>}

                        {modal ? <> <DeleteModal setModal={setModal} setDeleteData={setDeleteData} values={deleteData}/><BlackDropback/> </> : <></>}

                        {gameMode ? <GameMode gameData={gameData} time={time} setTime={setTime} setGameMode={setGameMode} /> : <></>}

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
                                            filter={filter} 
                                            title={challenge.title}
                                            description={challenge.description}
                                            username={challenge.username}
                                            base64={challenge.base64}
                                            filename={challenge.filename}
                                            pokemon={challenge.name}
                                            level={challenge.level}
                                            svg={challenge.svg}
                                            question={challenge.content}
                                            answerArr={shuffle([challenge.right_answer, challenge.wrong_answer_1, challenge.wrong_answer_2, challenge.wrong_answer_3])}
                                            rightA={challenge.right_answer}
                                            reward={challenge.question_level} 
                                            setEdit={setEdit}
                                            setModal={setModal}  
                                            setDeleteData={setDeleteData}                                       
                                            setGameMode={setGameMode} 
                                            setGameData={setGameData}
                                            setTime={setTime}
                                            time={time}
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
    