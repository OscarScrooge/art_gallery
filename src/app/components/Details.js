import React from 'react';
import '../styles/details.css';

function Details(props) {
    return (
        <div className="details">
            <div className="details_left">
                <img src={props.details.img}/>
            </div>
            <div className="details_right">
               <div>
                   <h4>Title:&nbsp;&nbsp;</h4>
                   <p>{props.details.title}</p>
               </div>
                <div>
                    <h4>Artist:&nbsp;&nbsp;</h4>
                    <p> {props.details.artist}</p>
                </div>

                <div>
                    <h4>Culture:&nbsp;&nbsp;</h4>
                    <p> {props.details.culture}</p>
                </div>
                <div>
                    <h4>Credits:&nbsp;&nbsp;</h4>
                    <p> {props.details.creditLine}</p>

                </div>
                <div>
                    <h4>Classification:&nbsp;&nbsp;</h4>
                    <p> {props.details.classification}</p>
                </div>
                <div>
                    <h4>Dimension:&nbsp;&nbsp;</h4>
                    <p> {props.details.dimensions}</p>
                </div>
            </div>
        </div>
    );
}

/*
title: title,
            artist: artist,
            img: img,
            alt: alt,
            culture: culture,
            dimensions: dimensions,
            creditLine: creditLine,
            classification : classification,
* */
export default Details;
