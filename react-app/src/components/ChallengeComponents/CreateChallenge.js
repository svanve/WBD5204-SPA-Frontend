import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import pokemons from '../../data/pokemons.json';
import questions from '../../data/questions.json';

const CreateChallenge = () => {

    const p = Object.values(pokemons).flat();
    const q = Object.values(questions).flat();
    
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ pokemon_id, setPokemon_id ] = useState('');
    const [ question_id, setQuestion_id ] = useState('');
    const navigate = useNavigate();


    const data = {
        title: title,
        description: description,
        pokemon_id: pokemon_id,
        question_id: question_id
    }

    async function handleSubmit( e ) {
        
        e.preventDefault();

        const body = JSON.stringify(data);

        console.log(body);

        const response = await fetch('http://localhost:8888/api/challenges/write', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'same-origin',
            body: body
        });

        const resData = await response.json();

        if ( resData.status === 200 ) {
            navigate('/challenges');
        } else {
            
            const errorsArray = Object.values(data.errors);

            const errorsMerged = [].concat.apply([], errorsArray);

            console.log(errorsMerged);
        }
    }

    return (
    <>
        <div id="create-offset-layer">
            <div id="create-form-wrapper">
                <form id="create-form" method='post' noValidate onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group create-form-group">
                        <label htmlFor="challenge-title-ip">Titel</label>
                        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="title" id="challenge-title-ip" className='form-control'/>
                    </div>

                    <div className="form-group create-form-group">
                        <label htmlFor="challenge-description-ip">Beschreibung</label>
                        <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" name="description" id="challenge-description-ip" className='form-control'/>
                    </div>

                    <div className="form-group create-form-group">
                        <label htmlFor="challenge-pokemon-ip">Pokémon</label>
                        <select onChange={(e) => setPokemon_id(e.target.value)} value={pokemon_id} type="text" name="pokemon_id" id="challenge-pokemon-ip" className='form-control' aria-label="Default select example">
                        <option defaultValue>Welches Pokémon soll herausgefordert werden?</option>
                            {p.map( ( pokemon, index ) => {
                                return <option value={pokemon.id} key={index} title={pokemon.name}>{pokemon.name}</option>;
                            })}
                        </select>
                    </div>

                    <div className="form-group create-form-group">
                        <label htmlFor="challenge-question-ip">Frage deiner Challenge</label>
                        <select onChange={(e) => setQuestion_id(e.target.value)} value={question_id} type="text" name="question_id" id="challenge-question-ip" className='form-control' aria-label="Default select example">
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