import {ADD_SEARCH_ROUTE_FULFILLED, ADD_SEARCH_ROUTE_PENDING,CHANGE_SELECTED_ROUTE, REMOVE_SELECTED_ROUTE, REMOVE_SELECTED_ROUTE_ON} from '../actions/types';

const defaultState = {
    stations: [] , 
    selectedRoute : null,
    loading : true
}

export default function selectedStations(state = defaultState, action){
    switch(action.type){
        case ADD_SEARCH_ROUTE_PENDING: {
            return state
        }
        case ADD_SEARCH_ROUTE_FULFILLED: {
            const new_station = action.payload;
            return {
                ...state,
                    selectedRoute : new_station.route_ID,
                    loading : false,
                    stations : [...state.stations, new_station] 
            }
        }
        case CHANGE_SELECTED_ROUTE: {
            const station_id = action.payload.station_ID;
            return {
                ...state,
                selectedRoute : station_id
            }
        }
        case REMOVE_SELECTED_ROUTE_ON: {
            const station_id = action.payload.station_ID;
            const route_ID = action.payload.route_ID;
            return {
                ...state,
                selectedRoute : route_ID,
                stations : state.stations.filter(station => station.route_ID !== station_id)
            }
        }
        case REMOVE_SELECTED_ROUTE: {
            const station_id = action.payload.station_ID;
            return {
                ...state,
                stations : state.stations.filter(station => station.route_ID !== station_id)
            }
        }
        default : return {...state}
    }
}   



