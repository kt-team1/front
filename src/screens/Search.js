import React, { Component } from 'react';
import Map from '../components/Map';
import { markerDisplay } from '../components/Map';
import {Container, Header, Button, Card, Image, Icon, Grid, GridColumn, Segment, Menu, Table, Form} from 'semantic-ui-react'
import axios from "axios"
import Exhibition from '../components/Exhibition'
import '../css/Search.css'

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
      <h1 style={{fontSize: '3.5vw', color: "white", textAlign:"center", fontWeight:"initial", marginBottom: '1em'}}>{message}</h1>
      <Grid columns={2} style={{height: '100%'}}>
        <Grid.Column style={{height: '100%'}}>
          <Container style={{height: '100%'}}><Map/></Container>
          
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
      isLoading: true,
      keyword: "...을 검색한 결과입니다.",
      exhibitions: []
    };
    
    getExhibitions = async () => {
      const {
          data: {
            search
          }
      } = await axios.get('http://211.254.213.185:5000/searchapi');
      console.log(search);
      this.setState({exhibitions: search, isLoading: false})
    }

    async componentDidMount() {
      this.getExhibitions();
      

      // axios({
      //   method:'get',
      //   url : 'https://kt_map.gitlab.io/data/public_parking.json',
      //   responseType: 'json',
      // }).then(res => {
      //   markerDisplay(res, map);
      // }).catch(err => console.log(err));
    }

  render() {
    const { isLoading, exhibitions } = this.state
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="exhibitions">
            {
              exhibitions.map(exhibition => (
                <Exhibition
                  key={exhibition.id}
                    id={exhibition.id}
                    title={exhibition.title}
                    place={exhibition.place}
                    address={exhibition.address}
                    date={exhibition.date}
                    time={exhibition.time}
                    price={exhibition.price}
                    poster={exhibition.poster}
                    />
                ))}
          </div>
        )
      }
      </section>
      )
    }



    // render() {
    //     console.log(this.state.searchResultMessage)
    //     return (
    //         <div>
    //             {SearchLayout(this.state.keyword)}
    //         </div>
            
    //     );
    // }
}
  
export default Search;