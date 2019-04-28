import React, { Component } from 'react';
import { connect } from "react-redux";
import InputContainer from '../Input/inputContainer';

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

class MainBody extends Component {

    render() {

        let content;

        if(this.props.selectedRoute != false){
            content = (
                <InputContainer />
            )
        } else {
            content = (
                <div>changed</div>
            )
        }

        return (
            <div class="main-container">
                {content}
            </div>
        );
    }
}

export default connect(mapStateToProps)(MainBody);
