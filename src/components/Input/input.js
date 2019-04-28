import React, { Component } from 'react';
import { connect } from "react-redux";
import {addOrigin_Search, addDep_Search} from '../../redux/actions/actions';
import{station_codes} from '../../station_codes';
import InputSelection from './inputSelection';

const mapStateToProps = (state) => {
    return {
        state: state
    }
  }

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = { input: "", StationSearch : [], chosenStation : {}};
    }

    updateInput = input => {
        this.stations_sort(input);
        this.setState({input});
    };

    clickedInput = (e) => {
        if(this.props.title === 'Origin'){
            this.props.addOrigin_Search(e["Station Name"], e["CRS Code"]);
        } else if(this.props.title === 'Destination'){
            this.props.addDep_Search(e["Station Name"], e["CRS Code"]);
        }
        this.setState({input : e["Station Name"],  chosenStation : e});
    }

    stations_sort = (input) => {
        var searched_vals = [];
        if(input.length > 2){
            station_codes.forEach(function(element){
                if(element["Station Name"].toLowerCase().indexOf(input.toLowerCase()) > -1){
                    searched_vals.push(element);
                }
            });
        }
        this.setState({StationSearch :searched_vals})
    }

    render() {
        return (
            <div className="input">
                <h3>{this.props.title}</h3>
                <input onChange={e => this.updateInput(e.target.value)} value={this.state.input}/>
                <InputSelection stations={this.state.StationSearch} inputClick={this.clickedInput}/>
            </div>
        );
    }
}


export default connect(
    mapStateToProps,
    { addOrigin_Search,addDep_Search }
  )(Input);
