import React from 'react';
// import PlusIcon from '../IconComponents/PlusIcon.js';
import Header from '../LayoutComponents/Header';
import Card from './Card';

const Challenges = (props) => {
    // const {} = props;
    return (
    <>
        <div className="challenges-wrapper">
            <Header><h1>Challenges</h1></Header>
            <main>
                <div className="content-view">
                
                    <div className="filterbar mb-2">
                        <div className="btn filter-btn filter--my-challenges me-1">
                            <i className="filter-icon fas fa-bolt me-2"></i>
                            <span className="filter-text">Meine Challenges</span>
                        </div>
                        <div className="btn filter-btn filter--sort me-1">
                            <i className="filter-icon fas fa-sort me-2"></i>
                            <span className="filter-text">Sort</span>
                        </div>    
                        <div className="btn filter-btn filter--filter">
                            <i className="filter-icon fas fa-filter me-2"></i>
                            <span className="filter-text">Filter</span>
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
                    </div>

                </div>
            </main>
        </div>
    </>
    );
}

export default Challenges;
    