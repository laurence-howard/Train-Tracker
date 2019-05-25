import React, { Component } from 'react';
import Input from '../Input/input';
import Datetime from 'react-datetime';
import DateTimePicker from 'react-datetime-picker';
import { connect } from "react-redux";
import {addDate_Search, clear_Search} from '../../redux/actions/actions';
import moment from 'moment';
import RouteSelect from './routeSelect';
import './input.scss';

const mapStateToProps = (state) => {
    return {
        state: state
    }
  }

class InputContainer extends Component {

    constructor(props){
        super(props)
        this.state = {searchedStations:[]};
    }

    componentDidMount(){
        this.props.addDate_Search(new Date());
    }

    route_search = () => {
        this.setState({searchedStations : 'load'});
        if(this.props.state.selection.origin.st_code != '' && this.props.state.selection.destination.st_code != '' && this.props.state.selection.time != ''){
            var url = "https://transportapi.com/v3/uk/train/station/"+ this.props.state.selection.origin.st_code +"/" + moment(this.props.state.selection.time).format("YYYY-MM-DD") + "/"+ moment(this.props.state.selection.time).format("HH:mm") +"/timetable.json?app_id="+ process.env.REACT_APP_TRANSPORT_ID +"&app_key="+ process.env.REACT_APP_TRANSPORT_KEY +"&calling_at=" +  this.props.state.selection.destination.st_code +"&train_status=passenger";
            console.log(url);
            fetch(url)
                .then((response) => {
                    if(response.ok){
                        return response.json();
                    } else {
                        throw new Error('sometime went wrong');
                    }
                })
                .then(data => this.setState({searchedStations : data.departures.all}))
                .catch((error) => {
                    this.setState({searchedStations : 'error'});
                    console.log(error);
                  });
        }
    }

    route_search_clear = () => {
        this.setState({searchedStations:[]});
        this.props.modal_toggle();
    }

    date_extract = (e) => {
        this.props.addDate_Search(e._d);
    }

    render() {

        let route_select;

        if(this.state.searchedStations === 'load'){
            route_select = (
                <div>
                    <p>Loading Results</p>
                </div>
            )
        } else if(this.state.searchedStations === 'error'){
            route_select = (
                <div>
                    <p>Sorry there has been an error, please try again</p>
                </div>
            )
        } else {
            route_select = (
                <RouteSelect searchedStations={this.state.searchedStations} route_clear={this.route_search_clear}/>
            )
        }

        let popup_container;

        if( this.state.searchedStations === undefined || this.state.searchedStations.length == 0 ){
            popup_container = (
                <div className="main-input-wrapper">
                    <Input title="Origin"/>
                    <h3 className="input-title">Departure Time</h3>
                    <div className="date-input">
                        <DateTimePicker onChange={e => this.date_extract(e)} disableClock={true} value={new Date()} />
                    </div>
                    <Input title="Destination"/>
                    <button className="input-submit" onClick={this.route_search}>Find Routes</button>
                </div>
            )
        } else {
            popup_container = (
                <div className="main-input-results">
                    {route_select}
                </div>
            )
        }

        return (
           <div className="main-container-input">
                {popup_container}
           </div>
        );
    }
}

export default connect(
    mapStateToProps,
    { addDate_Search,clear_Search }
  )(InputContainer);
