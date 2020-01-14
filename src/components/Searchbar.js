import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InputForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        console.log('asdadad');
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
        var keyword = this.state.value;
        console.log(keyword)
        return (<div>
            <div>
                <h1 style={{marginBottom: "16px"}}>검색</h1>
            </div>
                <div class="ui action input" style={{width: "100%"}}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    {keyword.length == 0 ? (<button class="ui icon button"><Link class="ui action input"
                    ><i aria-hidden="true" class="search icon"></i>
                </Link></button>) : (<button class="ui icon button"><Link class="ui action input"
                    to={{
                    pathname: `/search`,
                    state: {
                        keyword
                    }
                    }} style={{height: '100%', width: '100%', display: 'flex'}}><i aria-hidden="true" class="search icon"></i>
                </Link></button>)}
                    }
            </div>
         </div>
      );
    }
  }

class SearchBar extends Component {
    render() {
        return (
            <div className="search_bar" style={{position: 'relative', height: '100%'}}>
                <h1 style={{fontSize: '2.0vw'}}>기가지니</h1>
                <h2 style={{fontSize: '1.6vw'}}>인기 있는 전시 검색해줘</h2>
                <h4 style={{fontSize: '1.3vw'}}>기가지니와 함께 떠나는 문화 여행</h4>
                <p style={{fontSize: '1.3vw'}}>-</p>
                <p style={{fontSize: '1.3vw'}}>"광화문 주변 전시회 보여줘"</p>
                {/* <p style={{fontSize: '1.3vw'}}>"기가지니 온라인 전시회 보여줘"</p> */}
                <div className="input_container" style={{position: 'absolute', width: '100%', height: '20%', bottom: '0'}}>
                    <InputForm/>
                </div>
            </div>
            
        );
    }
}

export default SearchBar;