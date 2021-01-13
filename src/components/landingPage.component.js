import React, { useState, useEffect, useContext }from 'react';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import { Button } from '@material-ui/core';

import { AppContext } from './appContext'

const LandingPage = (props) => {
    const {updateImage, image} = useContext(AppContext);

    const [images, setImages] = useState([]);
    const [showImage, setShowImage] = useState(false);
    const [displayedImage, setDisplayedImage] = useState('');
    useEffect( () => {
        axios.get('https://api.imgflip.com/get_memes')
            .then ( res => {
                setImages(res.data.data.memes)
            })
            .catch( err => {
                console.log(err);
            })
    }, []);

    const handleClickImage = (id) => {
        const clickedImage=getImageById(id);
        setDisplayedImage(clickedImage)
        updateImage(clickedImage)
        setShowImage(true);
    }
    const getImageById = (id) => {
        return images.find (image => image.id === id);
    }
    const handleCloseImage = () => {
        setShowImage(false);
        setDisplayedImage('');
    }
    const handleViewDetail = () =>{
        console.log(image);
        props.history.push('/detail')
    }
    console.log(props);
    const displayImage = (image) => {
        return (
            <div>
                <img 
                    onClick={() => handleClickImage(image.id)}
                    src = {image.url}
                />
                <h1>{image.name}</h1>
                <br/>
            </div>
        )
    }
    return (
        <div>
            <Dialog open={showImage} onClose={handleCloseImage}>
                <img 
                    src = {displayedImage.url}
                />
                <h5>{displayedImage.name}</h5>
                <Button onClick = {() => handleViewDetail(displayedImage) }>Find More</Button>
            </Dialog> 
            <h1>Images</h1>
            { images.map(image => displayImage(image))}
        </div>
    )

}

export default LandingPage;
