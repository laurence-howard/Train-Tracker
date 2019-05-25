import React, { Component } from 'react';
import { connect } from "react-redux";
import InputContainer from '../Input/inputContainer';
import SingleContainer from '../Single/SingleContainer';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './main.scss';
import {sidebar_toggle} from '../../redux/actions/actions';

const mapStateToProps = (state) => {
    return {
        selectedStations: state.selectedStations,
        sidebarToggle : state.sidebarToggle.sidebarToggle
    }
}

class MainBody extends Component {

    constructor(props){
        super(props);
        this.state= {
            modal : true,
            selectedStation : null
        };
        this.toggle = this.toggle.bind(this);
    }

    componentDidUpdate(prevProps){
        if(this.props.selectedStations != prevProps.selectedStations){
            this.setState({selectedStation : this.props.selectedStations})
        }
    }

    
    sidebarToggleOuter = () => {
        this.props.sidebar_toggle(!this.props.sidebarToggle)
    }

    toggle() {
        this.setState(prevState => ({
        modal: !prevState.modal
        }));
    }

    render() {

        let content;
        if(!this.props.selectedStations.selectedRoute && this.props.selectedStations.selectedRoute != 0){
            content = (
                <div className="home-hero-container">
                    <h1 className="home-hero-title">Welcome to Train Tracker</h1>
                    <p className="home-hero-text">To start, find a route by clicking the 'Add New Station' button.</p>
                </div> 
            )
        } else {
            
            if(this.state.selectedStation){
                
            content =(
                 <SingleContainer passedSelectedStation={this.state.selectedStation}/>
                )
            }
         
        }

        return (
            <div class="main-container">
                <div className="main-content-header">
                    <div className="popup-toggle" onClick={this.toggle}>
                        <p>Add New Station</p>
                    </div>
                    <div className={"main-sidebar-toggle " + (this.props.sidebarToggle ? 'active' : '')} onClick={this.sidebarToggleOuter}>
                        <span class="burger-line line-1"></span>
                        <span class="burger-line line-2"></span>
                        <span class="burger-line line-3"></span>
                    </div>
                </div>
                {content}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        <h1>Route Select</h1>
                    </ModalHeader>
                    <ModalBody>
                        <InputContainer modal_toggle={this.toggle}/>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default connect(mapStateToProps,{sidebar_toggle})(MainBody);
