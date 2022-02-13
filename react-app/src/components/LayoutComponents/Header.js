import React from 'react';
import PlusIcon from '../IconComponents/PlusIcon';

const Header = (props) => {
    // const {} = props;
    return (
    <>
        <header className="header">
            <div className="header-title">
                <h1 className='h1'>Dynamic H1</h1>
            </div>
            <div className="header-button">
                <PlusIcon/>
            </div>
        </header>
    </>
    );
}

export default Header;
