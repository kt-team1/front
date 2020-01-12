import React, { Component } from 'react';
import Map from '../components/Map';
import {Container, Header, Button, Card, Image, Icon, Grid, GridColumn, Segment, Menu, Table} from 'semantic-ui-react'
import axios from "axios"

const getResults = async () => {
    try {
      return await axios.get('http://211.254.213.185:5000/searchapi');
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
      <Button size="mini" primary>온라인 전시</Button>
    </div>
)
  
const CardExample = () => (
    <Card style = {{
        display:'inline-block',
        width:'100%',
        height:'100%'
    }}
      image='https://cphoto.asiae.co.kr/listimglink/1/2017081115530600874_1.png'
      header='전시회 이름'
      description='전시회 장소'
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
    <Container style={{ padding: '5em 0em', height: '720px'}}>
      <Header textAlign="center" as='h2'>{message}</Header>
      <Grid columns={2} style={{height: '100%'}}>
        <Grid.Column style={{height: '100%'}}>
          <Map/>            
        </Grid.Column>
        <Grid.Column style={{height: '100%'}}>
          <Grid>
            <Grid.Row  columns={3}>
              <Grid.Column>
                {CardExample()}
              </Grid.Column>
              <Grid.Column>
                {CardExample()}
              </Grid.Column>
              <Grid.Column>
                {CardExample()}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                {CardExample()}
              </Grid.Column>
              <Grid.Column>
                {CardExample()}
              </Grid.Column>
              <Grid.Column>
                {CardExample()}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2}>
              <Grid.Column style={{width: '100%', height: '100%'}}>
                <Button size="mini" primary>이전 </Button>
              </Grid.Column>
              <Grid.Column textAlign="right" style={{width: '100%', height: '100%'}}>
               <Button size="mini" primary>다음 </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Grid.Column>
      </Grid>
    </Container>
  )


class Search extends React.Component {
    state = {
        searchResultMessage: "...을 검색한 결과입니다.",
        searchList: "z"
    };
    
    componentWillMount() {
        // 서버로부터 받은 데이터를 가지고 setState
        this.setState({
            searchResultMessage: "강남역을 검색한 결과입니다.",
            searchList: "asds"
        })
    }

    async componentDidMount() {
      {showResults()}
    }

    render() {
        console.log(this.state.searchResultMessage)
        return (
            <div>
                {SearchLayout(this.state.searchResultMessage)}
            </div>
            
        );
    }
}
  
export default Search;