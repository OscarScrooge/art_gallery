import React from 'react';
import Details from "../components/Details";
import {connect} from 'react-redux';

function ContainerDetails(props) {

    const {details} = props;

    return (
        <Details details = {details}/>
    );
}

const mapStateProps =(state)=>{
    return{
        details:state.reducer.details,
    }
};

export default connect(mapStateProps)(ContainerDetails);
