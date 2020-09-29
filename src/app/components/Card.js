import React from 'react';
import notAvailableImg from './no-photo-available-hi.png';

function Card(props) {

    let img = props.img;
    let title = props.title;
    let artist= props.artist;
    let alt = props.alt;

    if(img===""){
        img=notAvailableImg;
    }
    if(title===""){
        title="title not available";
    }
    if(artist===""){
        artist="artist name not available"
    }
    if(alt===""){
        alt ="clasifiction not available";
    }

    return (
        <div className="frame">
            <img src={img} alt={alt}/>
            <h4>{title}</h4>
            <h5>{artist}</h5>
        </div>
    );
}

export default Card;
