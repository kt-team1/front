import React, { Component } from 'react';
import SearchList from '../components/SearchList';
import {Container, Header, Button, Card, Image, Icon, Grid, GridColumn, Segment, Menu, Table} from 'semantic-ui-react'
import axios from "axios"

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

//--- 하단은 gis 관련 코드입니다. ---
function markerDisplay(res, map){
    res.data.DATA.some((element, idx) => {
      if(element.xcode && element.ycode){
        let point = latlngToUtmk(element.ycode, element.xcode)
        let marker = new window.olleh.maps.overlay.Marker({
          position: point,
          caption: '공영주차장',
          map: map
        });
        // marker.setIcon('https://www.gunpopark.or.kr/images/main/about_icon.png');
        marker['attribute'] = element
        marker.onEvent('click', function(e) {
          window.olleh.infoWindowShow(this)
        });
      }
    })
  }

function latlngToUtmk(x, y){ 
    let p = window.olleh.maps.UTMK.valueOf(new window.olleh.maps.LatLng(x, y))
    return p
}
//--- 상단은 gis 관련 코드입니다. ---

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
        var mapOpts = {
            center: new window.olleh.maps.UTMK(960823.7, 1945435.52),
            zoom: 8,
            mapTypeId: 'ROADMAP'
        };
        var map = new window.olleh.maps.Map(document.getElementById("map_div",),
            mapOpts
        );

        axios({
            method:'get',
            url : 'https://kt_map.gitlab.io/data/public_parking.json',
            responseType: 'json',
          }).then(res => {
            markerDisplay(res, map);
          }).catch(err => console.log(err));

 
        console.log(this.state.searchResultMessage)
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