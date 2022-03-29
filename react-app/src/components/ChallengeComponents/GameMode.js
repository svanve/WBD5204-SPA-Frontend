import react from 'react';

const GameMode = (props) => {

    return (
        <>
            <div className="game-mode--offset-layer">
                <div className="game-mode--wrapper">
                    <div className="game-mode--title"></div>
                    <div className="game-mode--specs-container">
                        <div className="game-mode--pokemon"></div>
                        <div className="game-mode--specs"></div>
                    </div>
                    <div className="game-mode--time-container">
                        <div className="game-mode--time-title"></div>
                        <div className="game--mode-time-bar--div">
                            <div className="game-mode--time-bar--icon"></div>
                            <div className="game-mode--time-bar--bar"></div>
                        </div>
                    </div>
                    <div className="game-mode--challenge-question--div">
                        <div className="game-mode--challenge-question--text"></div>
                    </div>
                    <form action="" className="game-mode--form">
                        <div className="game-mode--form--input-div">
                            <input type="select" className="game-mode--form--select">

                            </input>
                        </div>
                        <div className="game-mode--form--btn-div">
                            <button className="game-mode--form--btn btn ">
                                Antwort bestätgien!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default GameMode;