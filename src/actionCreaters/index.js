import axios from "axios";
import { URL } from "../halper/Helper";

export const getUserData = ()=>{
    return (dispatch)=>{
        // API CALLING
        // Lets involve the time here
        // lets simulate the time taken
        axios.get(`${URL}/api/users?page=2`)
            .then(function (response) {
                // handle success
                console.log('---->',response.data.data);
                dispatch({ type:"ADD_USER_DATA",payload:response.data.data});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

        // setTimeout(()=>{

        //     dispatch({ type:"GET_USER_DATA"});
        // },3000)

    }
    
}