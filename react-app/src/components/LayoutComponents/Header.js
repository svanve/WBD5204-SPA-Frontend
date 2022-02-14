import React from 'react';
import PlusIcon from '../IconComponents/PlusIcon';
import Menubar from './Menubar';

const Header = (props) => {
    // const {} = props;
    return (
    <>
        <header className="header">
            
            <div className="headerbar">
                {props.children}
                <div className="header-button">
                    <PlusIcon/>
                </div>
            </div>

            <Menubar></Menubar>
            
        </header>
    </>
    );
}

export default Header;
