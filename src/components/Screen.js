import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import { render } from '@testing-library/react';
// import  { Redirect } from 'react-router-dom';
import Explain from '../components/ShowPicDetail';
import '../css/pic_detail.css';


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
        console.log(this.props.theme);
        if (this.state.id === 1) {
            this.state.data = this.props.theme;
            this.state.source = this.state.data[0].source;
            this.state.right = this.state.data[0].right;
        }
        // console.log("current: ", this.state.source, "\n", this.state.id);

        return (
            <div>
                <img id="up" src={require('../resources/arrow.png')}
                    style={{ visibility: this.state.step ? 'visible' : 'hidden' }}
                    onClick={function (e) {
                        // console.log("step");
                        try {
                            this.setState({
                                id: this.state.id + 1,
                                source: this.state.data[this.state.id].source,
                                right: this.state.data[this.state.id].right
                            });
                        } catch {
                            alert("전시 관람이 종료되었습니다. \n기가지니 온라인 전시 화면으로 돌아갑니다.");
                            window.location = '/';
                        }
                    }.bind(this)} />
                <img id="back" src={require('../resources/back.png')}
                    style={{ visibility: this.state.back ? 'visible' : 'hidden' }}
                    onClick={function (e) {
                        // console.log("back");
                        if (this.state.back === true) {
                            this.setState({
                                source: this.state.data[this.state.id - 1].source,
                                step: true,
                                back: false
                            });
                        }
                    }.bind(this)} />
                <img id="right" src={require('../resources/right.png')}
                    onClick={function (e) {
                        // console.log("right");
                        this.setState({
                            step: false,
                            right: false,
                            source: this.state.data[this.state.id - 1].img,
                            back: true
                        });
                    }.bind(this)}
                    style={{ visibility: this.state.right ? 'visible' : 'hidden' }} />
                <img id="picture" src={this.state.source}
                    width="100vw" height="100vh" />
                {/* <Explain title="전시 제목" author="작가 이름" year="제작 연도" desc="작품 설명입니다"/> */}
            </div>
        );
    }


}

export default Screen;