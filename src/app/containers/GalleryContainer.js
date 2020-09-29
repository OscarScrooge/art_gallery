import React from 'react';
import Gallery from "../components/Gallery";
import {connect} from 'react-redux';


function GalleryContainer(props) {
    const {gallery_data} =props;

    return (
         <Gallery gallery_data={gallery_data}/>
    );
}

const mapStateProps=(state)=>{
   return{
       gallery_data:{
           totalObjectsByDepartment:state.reducer.totalObjectsByDepartment,
           cards:state.reducer.cards,
       }
   }
};

export default connect(mapStateProps)(GalleryContainer);
