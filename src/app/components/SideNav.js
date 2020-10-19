import React,{useEffect,useState} from 'react';
import {fetchDepartments,fetchTotalObjectsByDepartment} from '../api/endPoints';
import {connect} from "react-redux";
import '../styles/side_nav.css';

function SideNav(props) {
    const [departments,setDepartments] = useState([]);
    const [activeTab,setActive]= useState('');

    useEffect(() => {
       fetchDepartments().then(departments => setDepartments(departments));
    },[]);

    let handleClick= (e,departmentID)=>{
        setActive(departmentID);
         props.dispatch(fetchTotalObjectsByDepartment(departmentID));
        e.preventDefault();
    };

    return (
                <nav className="side-nav">
                    {
                        departments.length!==0 ?
                            departments.map(
                                (dep,key)=>
                               <a href={"/"+dep.displayName} className={`${activeTab === dep.departmentId ? 'active':''}`} key={key} onClick={e=>handleClick(e,dep.departmentId)}>{dep.displayName}</a>
                            )
                        :
                        <span>Loading departments...</span>
                    }
                    <a href="https://github.com/OscarScrooge/art_gallery" target="_blank">@OscarScrooge</a>
                </nav>

    );
}

export default connect()(SideNav);
