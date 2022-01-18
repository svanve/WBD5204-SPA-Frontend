import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

const RegisterDropzone = () => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with file
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
    
    
    return (
    <div className='form-group'>
        <label className='mb-3'>Profilbild hochladen</label>
        <div className="profile-pic-container" {...getRootProps()}>
                <input type="file" className="form-control" id="profile-pic" name="image" placeholder="Dein Profilbild" {...getInputProps()}/>
                {
                    isDragActive ? 
                    <p className='far fa-caret-square-down dropzone-fa'></p> :
                    <p className='fas fa-plus-square dropzone-fa'></p>
                }
        </div>
        <div className="profile-pic-preview">
        </div>
    </div>
    );
}

export default RegisterDropzone;