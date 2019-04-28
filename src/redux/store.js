import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState = {
    selectedRoute : false,
    selectedStations : [],
    selection : {
        origin : {
            st_name : '',
            st_code : '',
        },
        destination : {
            st_name : '',
            st_code : '',
        },
        time : ''
    }
}

export default createStore(rootReducer,initialState);