import React, { Component } from 'react';

class StopSingle extends Component {

    render() {

        var data = this.props.data

        let late_checker;
        let late_checker_indicator = false;

        if(data.status === 'LATE'){
            late_checker_indicator = true;
            late_checker = (
                <p className="single-stop-subtext">Late - {data.expected_departure_time ? data.expected_departure_time :  data.expected_arrival_time}</p>
            )
        } else if(data.status === 'ON TIME'){
            late_checker_indicator = true;
            late_checker = (
                <p className="single-stop-subtext">On Time {data.platform ? '- Platform ' + data.platform : ''}</p>
            )
        }

        return (

            <div className="single-stop">
                <div className="single-stop-inner">
                    <div className={(data.status ? 'status-indicator coming' : 'status-indicator arrived') + ' ' + (late_checker_indicator ? 'subtext' : 'no-subtext')}></div>
                    <div className="single-stop-content">
                        <p className="single-stop-text">{data.station_name} - {data.aimed_departure_time ? data.aimed_departure_time : data.aimed_arrival_time}</p>
                        {late_checker}
                    </div>
                </div>
            </div>
        );
    }
}

export default StopSingle;
