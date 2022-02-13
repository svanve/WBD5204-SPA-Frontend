import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import Thumbnail from './Thumbnail.js';
// import { useLinkClickHandler } from 'react-router-dom';

const RegisterDropzone = () => {

    // config file?
    const maxsize = 1000000;

    const [file, setFile] = useState([]);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFile( Object.assign(
                acceptedFiles[0], 
                { preview: URL.createObjectURL(acceptedFiles[0]) }
            ));
        }
    });
    
    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks
        URL.revokeObjectURL(file.preview);
    }, [file]);

    // append Data to formData object
    let formData = new FormData();
    const [ data, setData ] = useState( {} );

    function handle( e ) {
        const newData = { ...data};
        newData[ e.target.name ] = e.target.value;
        setData( newData );

        formData.append( 'image', newData);

        console.log(formData);
        
        fetch( 'http://localhost:3000/api/user/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            body: formData
        })
        .then( res => res.json() )
        .then( data => console.log(data));

    }


    return (
    <div className='form-group'>
        <label className='mb-3'>Profilbild hochladen</label>
        <p className='dropzone-explain-p'>Drag 'n Drop oder Klick</p>
        <div className="profile-pic-container" {...getRootProps()}>
            <input {...getInputProps({
                onChange: (e) => handle(e),
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
            <Thumbnail file={file}/>
        </div>
    </div>
    );
}

export default RegisterDropzone;