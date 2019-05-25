import {combineReducers} from 'redux';
import selection from './search';
import selectedStations from './selectedStations';
import sidebarToggle from './sidebarToggle';

export default combineReducers({
    selection,
    selectedStations,
    sidebarToggle
})