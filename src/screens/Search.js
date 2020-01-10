import React, { Component } from 'react';
import SearchList from '../components/SearchList';
import {Container, Header, Button, Card, Image, Icon, Grid, GridColumn, Segment, Menu, Table} from 'semantic-ui-react'
import axios from "axios"
import ReactDOM from "react-dom";

const getResults = async () => {
    try {
      return await axios.get('http://211.254.213.185:5000');
    } catch (error) {
      console.error(error);
    }
};
  
const showResults = async () => {
    const results = await getResults();
    
    console.log(results)
};
  
const extra = (
    <div>
      <Button primary>온라인 전시</Button>
    </div>
)
  
const CardExample = () => (
    <Card style = {{
        display:'inline-block',
        width:'30%',
        height:'30%'
    }}
      image='https://cphoto.asiae.co.kr/listimglink/1/2017081115530600874_1.png'
      header='전시회 이름'
      description='전시회에 대한 설명입니다. 전시회에 대한 설명입니다. '
      extra={extra}
    />
)
  
  const CardExampleGroups = () => (
    <Card.Group>
      {CardExample()}
      {CardExample()}
      {CardExample()}
    </Card.Group>
  )


  const SearchLayout = (message) => (
    <Container style={{ padding: '5em 0em' }}>
      <Header textAlign="center" as='h2'>{message}</Header>
      <Grid columns={2}>
        <Grid.Column>
            <div id='map_div' style={{
                width:'100%',
                height:'100%',
                background:'red'
            }}>
                {extra}
            </div>
        </Grid.Column>

        <Grid.Column>
            <div>
                <Container>
                    <Grid.Row>
                        <div>{CardExampleGroups()}</div>
                    </Grid.Row>
                    <Grid.Row>
                        <div>{CardExampleGroups()}</div>
                    </Grid.Row>
                </Container>
          </div>
        </Grid.Column>
      </Grid>
    </Container>
  )


class Search extends React.Component {
    state = {
      searchResultMessage: "...을 검색한 결과입니다."

    };
    

    async componentDidMount(){
        var mapOpts = {
            center: new window.olleh.maps.UTMK(960823.7, 1945435.52),
            zoom: 8,
            mapTypeId: 'ROADMAP'
        };

        var map = new window.olleh.maps.Map(document.getElementById("map_div",),
            mapOpts
        );
    }

    render() {
        return (
            <div>
                {SearchLayout(this.state.searchResultMessage)}
            </div>
        );
    }
}
  
export default Search;