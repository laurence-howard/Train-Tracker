import {ADD_ORIGIN_STATION, ADD_DEP_STATION, ADD_DATE_STATION, CLEAR_SEARCH, ADD_SEARCH_ROUTE} from '../actions/types'

export default function (state, action){
    switch(action.type){
        case ADD_ORIGIN_STATION: {
            const {station, station_code} = action.payload;
            const newSearch_Station = {
                st_name : station,
                st_code : station_code
            }
            return {
                ...state,
                selection : {
                    ...state.selection,
                    origin : newSearch_Station,
                } }
        }
        case ADD_DEP_STATION: {
            const {station, station_code} = action.payload;
            const newSearch_Station = {
                st_name : station,
                st_code : station_code
            }
            return {
                ...state,
                selection : {
                    ...state.selection,
                    destination : newSearch_Station,
                } }
        }
        case ADD_DATE_STATION: {
            const {date} = action.payload;
            return {
                ...state,
                selection : {
                    ...state.selection,
                    time : date,
                } }
        }
        case CLEAR_SEARCH: {
            return {
                ...state,
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
        }
        case ADD_SEARCH_ROUTE: {
            const new_station = action.payload;
            return {
                ...state,
                selectedStations : [
                   ...state.selectedStations,
                   new_station 
                ]
            }
        }
        default : return state;
    }
}   



