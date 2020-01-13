import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
// import LinesEllipsis from 'react-lines-ellipsis';


function App() {
    return (
      <img style = {{
        display:'inline-block',
        width:'80%',
        height:'90%',
        marginTop:"5%",
        marginBottom:"5%",
        marginLeft:"15%",
    }}
       src="https://search.pstatic.net/common?type=ofullfill&size=256x368&quality=95&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F3029_000_8%2F20200106182919448_4RE2ZHDC5.jpg%2F%25EC%2595%258C%25EC%25A5%2590.jpg%3Ftype%3Dm1501"
       alt="new"
       margin = "10000"
       />
    );
  }

  const extra = (
    <div>
      <Button style={{
          backgroundColor:'pink',
          float:"left",
          width:'30%',
          height:'100%',
          fontSize:'130%'
          }}>온라인 전시</Button>
    </div>
)

  function ellipsisText(text) {
      if(text.length>10){
          text.substring(0,4)
      }
      return

  }

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