
function getList() {
    return fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json());
}

export default getList;