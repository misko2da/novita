import React, { useEffect, useContext }from 'react';
import { AppContext } from './appContext'

const ImageDetail = (props) => {
    const {image} = useContext(AppContext);
    return (
        <div>
            <img src={image.url}/>
            <br/>
            <li>Name: {image.name}</li>
            <li>ID: {image.id}</li>
            <li>URL: {image.url}</li>
            <li>Width: {image.width}</li>
            <li>Height: {image.height}</li>
            <li>Boxcount: {image.box_count}</li>
        </div>
    )
}

export default ImageDetail;
