import React, { Component } from 'react';
import { connect } from "react-redux";
import './sidebarStyle.scss';
import {changeSelectedRoute, removeSelectedRoute, removeSelectedRouteOn, sidebar_toggle} from '../../redux/actions/actions';

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

class SidebarSingle extends Component {

    constructor(props){
        super(props);
        this.state= {
            activeStation : false
        };

        this.active_checker = this.active_checker.bind(this);
    }

    componentDidMount(prevProps, prevState) {
        this.active_checker();
    }

    componentDidUpdate(prevProps, prevState) {
        this.active_checker();
    }

    active_checker = () =>{
        if(!this.state.activeStation && this.props.state.selectedStations.selectedRoute == this.props.route.route_ID){
            this.setState({activeStation : true});
        } else if(this.state.activeStation && this.props.state.selectedStations.selectedRoute != this.props.route.route_ID){
            this.setState({activeStation : false});
        }
    }

    route_featured_selection = () => {
        this.props.changeSelectedRoute(this.props.route.route_ID);
        this.props.sidebar_toggle(!this.props.state.sidebarToggle.sidebarToggle);
    }

    route_remove = () => {
        const current_ID = this.props.state.selectedStations.selectedRoute;
        if(this.props.route.route_ID === current_ID){
            var current_post = this.props.state.selectedStations.stations.map(function(e) {return e.route_ID}).indexOf(current_ID);
            if( this.props.state.selectedStations.stations.length == 1){
                console.log('only one');
                this.props.removeSelectedRouteOn(this.props.route.route_ID, null);
            } else {
                if(current_post == 0){
                    ++current_post;
                    this.props.removeSelectedRouteOn(this.props.route.route_ID, this.props.state.selectedStations.stations[current_post].route_ID);
                } else {
                    --current_post;
                    this.props.removeSelectedRouteOn(this.props.route.route_ID, this.props.state.selectedStations.stations[current_post].route_ID);
                }
            }
        } else {
            this.props.removeSelectedRoute(this.props.route.route_ID);
        }
    }

    render() {
        return (
            <div className={this.state.activeStation ? 'route-single active' : 'route-single'}>
                <div className="route-singe-text-container" onClick={this.route_featured_selection}>
                    <p className="route-single-text">{this.props.route.origin_station} to {this.props.route.destination_station}</p>
                </div>
                <div className="route-singe-remove-container">
                    <p className="route-single-remove" onClick={this.route_remove}>X</p>
                </div>
            </div> 
        )
    }
}

export default connect(mapStateToProps, {changeSelectedRoute, removeSelectedRoute, removeSelectedRouteOn, sidebar_toggle})(SidebarSingle);
