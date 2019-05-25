import { resolve } from "url";

export const addOrigin_Search = (content, station_code) => ({
    type : 'ADD_ORIGIN_STATION',
    payload: {
        station : content,
        station_code : station_code
    }
})

export const addDep_Search = (content, station_code) => ({
    type : 'ADD_DEP_STATION',
    payload: {
        station : content,
        station_code : station_code
    }
})

export const addDate_Search = (content) => ({
    type : 'ADD_DATE_STATION',
    payload: {
        date : content,
    }
})

export const clear_Search = () => ({
    type : 'CLEAR_SEARCH',
    payload: {
        content : '',
    }
})

let route_ID = -1;

export function addSearched_Route(data, origin, destination) {
    return  {
        type : 'ADD_SEARCH_ROUTE',
            payload: fetch(data.service_timetable.id+"&live=true")
                        .then((data) => {
                            return data.json();
                        })
                        .then ((details) => {
                            return  {
                                origin_station : origin,
                                destination_station : destination,
                                route_ID : ++route_ID,
                                detail : details, 
                                data
                            }
                        })
    }
}

