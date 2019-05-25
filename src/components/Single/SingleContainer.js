import React, { Component } from 'react';
import { connect } from "react-redux";
import SingleStop from './StopSingle';
import './single.scss';

const mapStateToProps = (state) => {
    return {
        state: state.selectedStations
    }
}

class SingleContainer extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            selectedStation : this.props.state.stations.find(obj => {
                return obj.route_ID == this.props.state.selectedRoute;
            }),
            
        };
    }

    componentDidUpdate(prevProps){
        if(this.props.state.selectedRoute != prevProps.state.selectedRoute){
            this.setState({selectedStation : this.props.state.stations.find(obj => {
                return obj.route_ID == this.props.state.selectedRoute;
            })})
        }
    }

    render() {

        let stops;
        let header_content;
        if(this.props.state.stations){  
            let data = this.props.state.stations.find(obj => {
                return obj.route_ID == this.props.state.selectedRoute;
            });
            if(data.detail){
                var stops_data = data.detail.stops;
                var last_stop = stops_data[stops_data.length - 1];

                header_content = (
                    <div className="main-info">
                        <p>Departs {this.state.selectedStation.origin_station}: {this.state.selectedStation.data.aimed_departure_time} | Platform: {this.state.selectedStation.data.platform}</p>
                        <p>Arrives {this.state.selectedStation.destination_station}: {last_stop.aimed_arrival_time} | Platform: {last_stop.platform}</p>
                    </div>
                )
        
                if(stops_data.length > 0){
                    stops = (
                        <div className="stops-container">
                            {stops_data.map((stop, i) => 
                                <SingleStop key={i} data={stop}/>  
                            )}
                        </div>
                    )
                }
            }
        }

        return (
            <div className="single-main-container">
                <div className="single-main-header text-center">
                    <h1 className="single-main-title">{this.state.selectedStation.origin_station} to {this.state.selectedStation.destination_station}</h1>
                    {header_content}
                </div>
                {stops}
            </div>
        );
    }
}

export default connect(mapStateToProps)(SingleContainer);
