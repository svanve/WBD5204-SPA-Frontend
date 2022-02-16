import React, { useEffect, useState, useCallback } from 'react';
import {useDropzone} from 'react-dropzone';
// import Thumbnail from './Thumbnail.js';
// import { useLinkClickHandler } from 'react-router-dom';

const RegisterDropzone = ({ formdata, setFormdata }) => {
    // config file?
    const maxsize = 1000000;

    console.log(formdata);
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        setFormdata({
            ...formdata,
            image: acceptedFiles[0]
        });
      }, [formdata, setFormdata])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    

    // const [file, setFile] = useState([]);
    // const {getRootProps, getInputProps, isDragActive} = useDropzone({
    //     accept: 'image/*',
    //     onDrop: acceptedFiles => {
    //         setFile( Object.assign(
    //             acceptedFiles[0], 
    //             { preview: URL.createObjectURL(acceptedFiles[0]) }
    //         ));
    //     }
    // });
    
    // useEffect(() => {
    //     // Make sure to revoke the data uris to avoid memory leaks
    //     URL.revokeObjectURL(file.preview);
    // }, [file]);


    return (
    <div className='form-group'>
        <label className='mb-3'>Profilbild hochladen</label>
        <p className='dropzone-explain-p'>Drag 'n Drop oder Klick</p>
        <div className="profile-pic-container" {...getRootProps()}>
            <input {...getInputProps({
                maxsize,
                multiple: false,
                type: 'file',
                className: 'form-control',
                name: 'image',
                placeholder: 'Dein Profilbild'
            })}/>
            {
                isDragActive ? 
                <p className='far fa-caret-square-down dropzone-fa'></p> :
                <p className='fas fa-plus-square dropzone-fa'></p>
            }
         </div>
        <div className="profile-pic-preview">
            {/* <Thumbnail file={file}/> */}
        </div>
    </div>
    );
}

export default RegisterDropzone;