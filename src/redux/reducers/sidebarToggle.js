import {SIDEBAR_TOGGLE} from '../actions/types';

let defaultState = {
    sidebarToggle : false
}

export default function sidebarToggle(state = defaultState, action){
    switch(action.type){
       case SIDEBAR_TOGGLE: {
        const newToggle = action.payload;
           return {
               ...state,
               sidebarToggle : newToggle.new_toggle
           }
       }
        default : return {...state}
    }
}   



