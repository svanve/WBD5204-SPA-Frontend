import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
// import { useLinkClickHandler } from 'react-router-dom';

const RegisterDropzone = () => {

    const [file, setFile] = useState([]);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFile( Object.assign(
                acceptedFiles[0], 
                { preview: URL.createObjectURL(acceptedFiles[0])}
            ));
        }
    });
    
    const thumb =   <div className='preview-outter-container' key={file.name}>
                        <img
                            src={file.preview}
                            className='preview-img'
                            alt=''
                        />
                    </div>;
    
    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks
        URL.revokeObjectURL(file.preview);
    }, [file]);

    // append Data to formData object
    let initialData = { image: '' };
    const [ data, setData ] = useState( initialData );

    function handle( e ) {
        const newData = { ...data};
        console.log(data.value);
        newData[ e.target.id ] = data.value;
        setData( newData );
    }

    console.log();

    
    return (
    <div className='form-group'>
        <label className='mb-3'>Profilbild hochladen</label>
        <p className='dropzone-explain-p'>Drag 'n Drop oder Klick</p>
        <div className="profile-pic-container" {...getRootProps()}>
            <input onClick={(e) => handle(e)} type="file" className="form-control" id="image" value={data.image} placeholder="Dein Profilbild" {...getInputProps()}/>
            {
                isDragActive ? 
                <p className='far fa-caret-square-down dropzone-fa'></p> :
                <p className='fas fa-plus-square dropzone-fa'></p>
            }
         </div>
        <div className="profile-pic-preview">
            {thumb}
        </div>
    </div>
    );
}

export default RegisterDropzone;