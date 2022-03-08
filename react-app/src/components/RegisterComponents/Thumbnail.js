import React from 'react';

const Thumbnail = ( { file } ) => {
    // const {} = props;

    return (
        <div className='preview-outter-container'>
            <img
                src={file}
                className='preview-img'
                alt=''
            />
        </div>
    );
}

export default Thumbnail;