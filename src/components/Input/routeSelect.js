import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addSearched_Route} from '../../redux/actions/actions';

const mapStateToProps = (state) => {
    return {
        state: state
    }
  }

class routeSelect extends Component {

    route_click = (e) =>{
        console.log(e);
        this.props.route_clear();
        this.props.addSearched_Route(e.service, e.train_uid, this.props.state.selection.origin.st_name, e.destination_name)
    }
    render(){

        let stations;
        stations = (
            <div className="searched-stations-outer">
                {this.props.searchedStations.map((station) => 
                    <div className="searched-station-single">
                        <h2 className="searched-station-name" value={station} onClick={() => this.route_click(station)}>{station.destination_name} {station.aimed_departure_time}</h2>
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

export default connect(mapStateToProps, {addSearched_Route})(routeSelect);