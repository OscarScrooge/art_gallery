import React, {useEffect, useState} from 'react';
import notAvailableImg from './no-photo-available-hi.png';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {setDetails} from "../actions/actions";

// function Card({img,title,artist,alt,culture,dimensions,creditLine,classification,props}) {
function Card(props) {

    const [pieceData,setData] = useState({});

    let img = props.img;
    let title = props.title;
    let artist= props.artist;
    let alt = props.alt;
    let culture= props.culture;
    let dimensions= props.dimensions;
    let creditLine =props.creditLine;
    let classification =props.classification;

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
    if(culture===""){
        culture ="Not available";
    }
    if(dimensions===""){
        alt ="Not available";
    }
    if(creditLine===""){
        alt ="Not available";
    }
    if(classification===""){
        alt ="Not available";
    }


    useEffect(()=>{
        setData({
            title: title,
            artist: artist,
            img: img,
            alt: alt,
            culture: culture,
            dimensions: dimensions,
            creditLine: creditLine,
            classification : classification,
        });
    },[title]);

    const handleClick=()=>{
         props.dispatch(setDetails(pieceData));
    };

    return (
        <div className="frame">
            <Link to="/details"  onClick={handleClick}>
               <img src={img} alt={alt}/>
            </Link>
            <h4>{title}</h4>
            <h5>{artist}</h5>
        </div>
    );
}

export default connect()(Card);
