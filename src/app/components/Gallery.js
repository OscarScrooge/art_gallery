import React, {useEffect, useState} from 'react';
import Card from "./Card";
import {connect} from 'react-redux';
import {fetchObjectById} from "../api/endPoints";
import setCard from '../actions/actions';
import metLogo from './the_met_logo.png';
import '../styles/gallery.css'


function Gallery(props) {

    /**
     * divide the total items of the called departemnt
     */
    const [subArray,setRange] = useState({start:0, end:6});

    let galleryData=props.gallery_data;

    /**
     * get the total items, go for the first six and show them
     */
    useEffect(()=>{

        if(galleryData.totalObjectsByDepartment !== null){

           for (let i=0;i<6;i++){
                fetchObjectById(galleryData.totalObjectsByDepartment.objectIDs[i]).then(data=>props.dispatch(setCard(data)));
           }
            setRange({start:subArray.end, end: subArray.end+3});
            let img=document.getElementsByClassName("met-logo");
            img[0].className+= "  met-logo-animation";
        }

    },[galleryData.totalObjectsByDepartment]);

    /**
     * @description handle the scrolling of the gallery window and go for more items
     * @param e
     */
    const handleScroll=(e)=>{
        const target = e.target;
         if(Math.ceil(target.scrollHeight - target.scrollTop)/2 < target.clientHeight){
           for (let i=subArray.start;i<subArray.end;i++){
             fetchObjectById(galleryData.totalObjectsByDepartment.objectIDs[i]).then(data=>props.dispatch(setCard(data)));
           }
            setRange({start:subArray.end, end: subArray.end+3});
        }
    }

    return (
        <div className="gallery" onScroll={event => handleScroll(event)}>
            <img src={metLogo} className="met-logo" alt="met-logo"/>
            {
                galleryData.cards.map((val,key)=>
                                 <Card key={key}
                                       img ={val.primaryImageSmall}
                                       title={val.title} artist={val.artistDisplayName}
                                       alt = {val.classification}
                                 />
                 )
            }



        </div>
    );
}

export default connect()(Gallery);
