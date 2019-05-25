import React, { Component } from 'react';

class InputSelection extends Component {

    constructor(props) {
        super(props);
        this.stations = this.props.stations;
        this.state = {input: ""};
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.stations != this.props.stations){
            this.stations = this.props.stations;
        }
    }

    clickedValue = (text) => {
        this.stations= [];
        this.props.inputClick(text);
    }

    render() {

        var stations_content;
        if(this.stations.length > 0){
            stations_content = (
                <div className="search-selection-container">
                    {this.stations.map((single =>
                        <div className="search-selection-single" onClick={e => this.clickedValue(single)}>
                            <p>{single["Station Name"]}</p>
                        </div>
                    ))}
                </div>
            );
        }
        return (
            <div className="search-selection-container-outer">
                {stations_content}
            </div>
        );
    }
}


export default InputSelection;
