import React, { Component } from 'react';
import { connect } from "react-redux";
import './sidebarStyle.scss';
import SidebarSingle from './SidebarSingle';

const mapStateToProps = (state) => {
    return {
        state: state
    }
  }

class Sidebar extends Component {

    render() {
        let width = window.innerWidth;
        let routes;

        if(this.props.state.selectedStations.stations.length > 0){
            routes = (
                this.props.state.selectedStations.stations.map(route => 
                    <SidebarSingle route={route} />   
                )
            )
        }

        return (
            <div className="sidebar-container-outer">
                <div className={"sidebar-overlay " + (this.props.state.sidebarToggle.sidebarToggle ? 'active' : '')}></div>
                <div className={"sidebar-container " + (this.props.state.sidebarToggle.sidebarToggle ? 'active' : '')}>
                    {routes}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Sidebar);
