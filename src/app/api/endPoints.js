import {totalObjectsIDs} from '../actions/actions';
import axios from './axios';
import requests from "./requests";


export async function fetchDepartments(){
     const request = await axios.get(requests.fetchDepartments);
     return request.data.departments;
}

export function fetchTotalObjectsByDepartment(departmentId) {
    return dispatch=>{
        const request =  axios.get(requests.fetchTotalObjectsByDepartment+departmentId);
        request.then(request => dispatch(totalObjectsIDs(request.data)));
    }
}

export async function fetchObjectById(id) {
      let request = await axios.get(requests.fetchObjectById+id);
      return request.data;
}
