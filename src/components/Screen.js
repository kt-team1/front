import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { render } from '@testing-library/react';


function done() { 
    return <Link to="/exhibition"></Link>
}

class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            id: 1,
            source: '',
            right: false,
            img: '',
            back: false, 
            step: true
        }
    };

    render() {
        console.log(this.state.source, "\n", this.state.id);

        if (this.state.id === 1) {
            this.state.data = this.props.theme;
            this.state.source = this.state.data[0].source;
            this.state.right = this.state.data[0].right;
        }

        return (
            <div>
                <img id="up" src={require('../resources/arrow.png')} 
                    style={{visibility: this.state.step ? 'visible' : 'hidden'}}
                    onClick={function(e) {
                        // console.log(e);
                        try {
                            this.setState({
                                id: this.state.id + 1,
                                source: this.state.data[this.state.id].source,
                                right: this.state.data[this.state.id].right
                            });
                        } catch {
                            done();
                        }
                    }.bind(this)} />
                <img id="back" src={require('../resources/back.png')}
                    style={{visibility: this.state.back ? 'visible' : 'hidden'}} 
                    onClick={function(e) {
                        // console.log(e);
                        if (this.state.back === true) {
                            this.setState({
                                source: this.state.data[this.state.id].source,
                                step: true,
                                back: false
                            });
                        }
                    }.bind(this)}/>
                <img id="right" src={require('../resources/right.png')}
                    onClick={function(e) {
                        // console.log(e);
                        this.setState({
                            step: false,
                            right: false,
                            source: this.state.data[this.state.id].img, 
                            back: true
                        });
                    }.bind(this)}
                    style={{ visibility: this.state.right ? 'visible' : 'hidden'}} />
                <img id="picture" src={this.state.source}
                    width="100vw" height="100vh" />

            </div>
        );
    }


}

export default Screen;