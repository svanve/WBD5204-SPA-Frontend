// import React from 'react';
// import './Api.css';

// function Api() {
        
//     const fetchAbility = async () => {
//         fetch('https://pokeapi.co/api/v2/pokemon/5', {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 })
//                 .then( (res) => {
//                     return res.json();
//                 })
//                 .then( (dt) => {
//                         return dt;
//                         // const ability = dt.abilities[0].ability.name;
//                         // const name = dt.name;
                
//                         // return  `<div className='white-color'>
//                         //             <p>Abilty of ${name}: ${ability}</p>
//                         //         </div>;`
//                     })
//                 .catch( err => console.log(err) );
//         }   

//     let data = await fetchAbility();

//     console.log(data);

//     return  (
//             <div className='white-color'>
//                 <p>Abilty of ${data.name}: ${data.ability}</p>
//             </div>
//             );
// }

// export default Api;