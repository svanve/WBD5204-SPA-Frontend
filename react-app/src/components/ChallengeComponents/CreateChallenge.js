import React from 'react';
import pokemons from '../../data/pokemons.json';
import questions from '../../data/questions.json';

const CreateChallenge = () => {

    const p = Object.values(pokemons).flat();
    const q = Object.values(questions).flat();
    
    

    return (
    <>
        <div id="create-offset-layer">
            <div id="create-form-wrapper">
                <form id="create-form" noValidate>
                    <div className="form-group create-form-group">
                        <label htmlFor="challenge-title-ip">Titel</label>
                        <input type="text" name="title" id="challenge-title-ip" className='form-control'/>
                    </div>

                    <div className="form-group create-form-group">
                        <label htmlFor="challenge-description-ip">Beschreibung</label>
                        <input type="text" name="description" id="challenge-description-ip" className='form-control'/>
                    </div>

                    <div className="form-group create-form-group">
                        <label htmlFor="challenge-pokemon-ip">Pokémon</label>
                        <select type="text" name="pokemon_id" id="challenge-pokemon-ip" className='form-control' aria-label="Default select example">
                        <option defaultValue>Welches Pokémon soll herausgefordert werden?</option>
                            {p.map( ( pokemon, index ) => {
                                return <option value={pokemon.id} key={index} title={pokemon.name}>{pokemon.name}</option>;
                            })}
                        </select>
                    </div>

                    <div className="form-group create-form-group">
                        <label htmlFor="challenge-question-ip">Frage deiner Challenge</label>
                        <select type="text" name="question_id" id="challenge-question-ip" className='form-control' aria-label="Default select example">
                            <option defaultValue>Wähle deine Frage.</option>
                            {q.map( ( question, index ) => {
                                return <option value={question.id} key={index} title={question.content}>{question.content}</option>
                            })}
                        </select> 
                    </div>

                    <div className="btn-wrapper">
                        <button className="start-btn btn btn-primary my-3">
                            Challenge erstellen!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
    );
}

export default CreateChallenge;