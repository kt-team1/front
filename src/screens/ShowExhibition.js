import React, { Component } from 'react';

class ShowExhibition extends Component {
    render() {
        return (
            <div className="show_exhibition">
                <img src={require('../resources/andy/andy-1.jpg')}
                width="100%" height="100%"></img>
            </div>
        );
    }
}

export default ShowExhibition;