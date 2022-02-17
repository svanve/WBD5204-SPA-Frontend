import React from 'react';

const CreateChallenge = (props) => {
    // const {} = props;

    const data = {
        pokemons: [
            {
                id: 1,
                name: 'Pikachu',
                level: 66,
                pokedex_no: 25
            }, 
            {
                id: 2,
                name: 'Bisasam',
                level: 66,
                pokedex_no: 2
            }
        ],
        questions: [ 
            {
                content: 'Wie heisst das Starter-pokémon vom Typ Feuer in Pokemon Rot/Blau?',

            },
            {
                content: 'Welchen Pokémon-Typ trainiert der Trainer der ersten Arena in Pokémon Blau?',

            }
            ]
    }

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
                            {data.pokemons.map( ( pokemon, index ) => {
                                console.log(pokemon.name);
                                return <option value={pokemon.id} key={index} title={pokemon.name}>{pokemon.name}</option>;
                            })}
                        </select>
                    </div>

                    <div className="form-group create-form-group">
                        <label htmlFor="challenge-question-ip">Frage deiner Challenge</label>
                        <select type="text" name="question_id" id="challenge-question-ip" className='form-control' aria-label="Default select example">
                            <option defaultValue>Wähle deine Frage.</option>
                            {data.questions.map( ( question, index ) => {
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