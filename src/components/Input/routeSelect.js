import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addSearched_Route, changeSelectedRoute} from '../../redux/actions/actions';

const mapStateToProps = (state) => {
    return {
        state: state
    }
  }

class routeSelect extends Component {

    route_click = (e) =>{
        this.props.addSearched_Route(e, this.props.state.selection.origin.st_name, e.destination_name);
        this.props.route_clear();
    }
    render(){

        let stations;
        stations = (
            <div className="searched-stations-outer">
                {this.props.searchedStations.map((station) => 
                    <div className="searched-station-single" value={station} onClick={() => this.route_click(station)}>
                        <p className="searched-station-name">{this.props.state.selection.origin.st_name} to {this.props.state.selection.destination.st_name}</p>
                        <p className="searched-station-subtext">Departing: {station.aimed_departure_time}</p>
                    </div>
                )}
            </div>
        )
        return(
            <div className="route-select-outer">
               {stations}
            </div>
        )
    }
}

export default connect(mapStateToProps, {addSearched_Route, changeSelectedRoute})(routeSelect);