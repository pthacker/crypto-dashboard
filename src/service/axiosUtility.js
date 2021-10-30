// this file contains the instance of axios
import axios from 'axios';
import Toast from '../components/Common/Toast';

 const REQUEST_TIMEOUT = 30 * 1000 ; // 30 seconds

export const axiosInstance = axios.create({
    baseURL: '',
  timeout: REQUEST_TIMEOUT,
  headers: {}
})

 // interceptors are used to intercept requests before .then() and .catch() handles it
axiosInstance.interceptors.request.use(
        // this function executes if the request is valid/successful
    (request)=>{
        console.log('req req',request)
    // handle adding headers to request before making call

return request;
    },
     // this function executes if the request is invalid
    (error)=>{
        console.log('req error',error)
      return  Promise.reject(error);
    }
)


axiosInstance.interceptors.response.use(
    // this function executes if the response is 200 HTTP status 
    (response)=>{
        // HANDLE messages for succesful connection of web socket etc
        return response.data
    },
    // this function executes if the response is outside of 200 HTTP status range
    (error)=>{
        // if(error.response && error.response.status === '401'){
        //     // unauthorized
        //     // remove localstorage data or JWT access token
        //     // and show error message
        //     Toast(error.response.message || 'Some error occurred')
        // }else{
        //     return Promise.reject(error)
        // }
        const {data = {}} = error.response || {};
        const { message = 'Some error occurred'} = data;
        // Toast(message);
        return Promise.reject(data)
    }
)


// one way to handle errors can be adding switch case
// (error)=>{
//   switch(error.response.status.toString()){
//     case 404:
//         return; 
//     case 200:
//         return;
//     default:
//          return;
// }
// }