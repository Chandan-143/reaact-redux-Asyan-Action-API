import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunkMiddleware from 'redux-thunk';

let intitailUser = [
                        {
                            "id": 7,
                            "email": "michael.lawson@reqres.in",
                            "first_name": "Michael",
                            "last_name": "Lawson",
                            "avatar": "https://reqres.in/img/faces/7-image.jpg"
                        }
                    ]



let rootReducer = (oldState,action)=>{
    let newState = oldState;

    switch(action.type){
        case "GET_USER_DATA":
            return [
                ...newState,
                {
                    "id": 10,
                    "email": "byron.fields@reqres.in",
                    "first_name": "Byron",
                    "last_name": "Fields",
                    "avatar": "https://reqres.in/img/faces/10-image.jpg"
                }
            ]
            break;

            case "ADD_USER_DATA":
                return [
                    ...newState,
                    ...action.payload,
                ]
                break;
            default:
                return newState;
    }

}


export const store = createStore(rootReducer,intitailUser,applyMiddleware(thunkMiddleware))

console.log("object", store);