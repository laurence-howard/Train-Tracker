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

        let routes;

        if(this.props.state.selectedStations){
            routes = (
                this.props.state.selectedStations.map(route => 
                    <SidebarSingle route={route} />   
                )
            )
        }

        return (
           <div className="sidebar-container">
                <div>
                    {routes}
                </div>
           </div>
        );
    }
}

export default connect(mapStateToProps)(Sidebar);
