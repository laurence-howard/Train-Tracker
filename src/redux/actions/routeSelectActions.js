export const changeSelectedRoute = (station_ID) => ({
    type : 'CHANGE_SELECTED_ROUTE',
    payload: {
        station_ID
    }
})

export const removeSelectedRouteOn = (station_ID, route_ID) => ({
    type : 'REMOVE_SELECTED_ROUTE_ON',
    payload: {
        station_ID,
        route_ID
    }
})

export const removeSelectedRoute = (station_ID) => ({
    type : 'REMOVE_SELECTED_ROUTE',
    payload: {
        station_ID,
    }
})