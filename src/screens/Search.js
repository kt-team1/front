import React, { Component } from 'react';
import Map from '../components/Map';
import SearchList from '../components/SearchList';
import {Container, Header, Button, Card, Image, Icon, Grid, GridColumn, Segment, Menu, Table} from 'semantic-ui-react'
import axios from "axios"
import CardsCarousel from '../components/CardsCarousel';

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
    <Container style={{ padding: '5em 0em' }}>
      <Header textAlign="center" as='h2'>{message}</Header>
      <Grid columns={2}>
        <Grid.Column>
          <Map />
            
        </Grid.Column>

        <Grid.Column>
            <div>
                <Container>
                  <Grid.Row>
                    <div>
                      <h1>추천 전시</h1>
                    </div>
                  </Grid.Row>
                    <Grid.Row>
                        {/* <div>{CardExampleGroups()}</div> */}
                        <CardsCarousel infos="넘길정보들"/>
                    </Grid.Row>
                    <Grid.Row>
                    <div>
                      <h1>온라인 전시</h1>
                    </div>
                  </Grid.Row>
                    <Grid.Row>
                        {/* <div>{CardExampleGroups()}</div> */}
                        <CardsCarousel infos="넘길정보들"/>
                    </Grid.Row>
                </Container>
          </div>
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