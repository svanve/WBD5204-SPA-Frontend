import React, { useState, useEffect } from 'react';

const UseEffectEx = (props) => {
    // const {} = props;

    const [ resourceType, setResourceType ] = useState('charizard');
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        console.log('useEffect hat gegriffen');
        fetch(`https://pokeapi.co/api/v2/pokemon/${resourceType}`)
            .then(res => res.json())
            .then(json => setItems(json.moves));
    }, [resourceType]);

    return (
    <>
        <div>
            <button onClick={() => {setResourceType('charizard')}}>Charizard</button>
            <button onClick={() => {setResourceType('voltorb')}}>Voltoball</button>
        </div>
        <h1>Pokemon: {resourceType}</h1>
        {items.map(item => {
            return <pre>{JSON.stringify(item)}</pre>
        })}
    </>
    )
}

export default UseEffectEx;