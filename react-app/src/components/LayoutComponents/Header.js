import React from 'react';
import Menubar from './Menubar';

const Header = ( props ) => {

    return (
    <>
        <header className="header">
            
            <div className="headerbar">
                {props.children}
            </div>

            <Menubar></Menubar>
            
        </header>
    </>
    );
}

export default Header;
