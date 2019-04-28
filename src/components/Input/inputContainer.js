import React, { Component } from 'react';
import Input from '../Input/input';
import Datetime from 'react-datetime';
import { connect } from "react-redux";
import {addDate_Search, clear_Search} from '../../redux/actions/actions';
import moment from 'moment';
import RouteSelect from './routeSelect';

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
        if(this.props.state.selection.origin.st_code != '' && this.props.state.selection.destination.st_code != '' && this.props.state.selection.time != ''){
            var url = "https://transportapi.com/v3/uk/train/station/"+ this.props.state.selection.origin.st_code +"/" + moment(this.props.state.selection.time).format("YYYY-MM-DD") + "/"+ moment(this.props.state.selection.time).format("HH:mm") +"/timetable.json?app_id=7f7aa472&app_key=9d2926df23f4a5df26e9e9363eaf535d&destination=" +  this.props.state.selection.destination.st_code +"&train_status=passenger";
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({searchedStations : data.departures.all}))
        }
    }

    route_search_clear = () => {
        this.setState({searchedStations:[]});
    }

    date_extract = (e) => {
        this.props.addDate_Search(e._d);
    }

    render() {
        return (
           <div className="main-container">
                <Input title="Origin"/>
                <h3>Departure Time</h3>
                <Datetime onChange={e => this.date_extract(e)} defaultValue={new Date()}/>
                <Input title="Destination"/>
                <button onClick={this.route_search}>Find Routes</button>
                <RouteSelect searchedStations={this.state.searchedStations} route_clear={this.route_search_clear}/>
           </div>
        );
    }
}

export default connect(
    mapStateToProps,
    { addDate_Search,clear_Search }
  )(InputContainer);
