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

export const addSearched_Route = (service_ID, train_id, origin_station, destination_station) => ({
    type : 'ADD_SEARCH_ROUTE',
    payload: {
        route_ID : ++route_ID,
        service_ID,
        train_id,
        origin_station,
        destination_station
    }
})