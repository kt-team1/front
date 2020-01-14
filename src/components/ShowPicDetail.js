import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
// import LinesEllipsis from 'react-lines-ellipsis';

class ShowPicDetail extends Component {
    render() {
        return (
            <div id="pic_detail">
                <p><strong>작품 제목  </strong>{this.props.title}<br/>
                <strong>작가 이름  </strong>{this.props.author}<br/>
                <strong>제작 연도  </strong>{this.props.year}</p>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}

export default ShowPicDetail;