import React, { Component } from 'react';
import { connect } from "react-redux";
import './sidebarStyle.scss';

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

class SidebarSingle extends Component {

    render() {
        return (
            <div className="route-single">
                <p className="route-single-text">{this.props.route.origin_station} -> {this.props.route.destination_station}</p>
            </div> 
        )
    }
}

export default connect(mapStateToProps)(SidebarSingle);
