import React from 'react';

const Thumbnail = ( { file } ) => {
    // const {} = props;

    return (
        <div className='preview-outter-container' key={file.name}>
            <img
                src={file.preview}
                className='preview-img'
                alt=''
            />
        </div>
    );
}

export default Thumbnail;