import { createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

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



export default createStore(rootReducer, applyMiddleware(logger, thunk, promise));