
export function logout() {
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
