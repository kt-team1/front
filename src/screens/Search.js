import React, { Component } from 'react';
import Map from '../components/Map';
import axios from "axios"
import Exhibition from '../components/Exhibition'
import '../css/Search.css'
import { Grid, Button } from 'semantic-ui-react'

function latlngToUtmk(x, y){ 
  let p = window.olleh.maps.UTMK.valueOf(new window.olleh.maps.LatLng(x, y))
  return p
}

const pagingExhibitions = (exhibitions, page) => {
  const pagedExhibitions = [];
  const maxPage = parseInt(exhibitions.length/6);
  if(page==maxPage) {
    const remainder = exhibitions.length%6;
    for (let index = page*6; index < page*6+remainder; index++) {
      pagedExhibitions.push(exhibitions[index]);
    }
  } else {
    for (let index = page*6; index < (page+1)*6; index++) {
      pagedExhibitions.push(exhibitions[index]);
    }
  }
  return pagedExhibitions;
}

class Search extends React.Component {
    state = {
      isLoading: true,
      keyword: "...을 검색한 결과입니다.",
      exhibitions: [],
      currentExhibitions: [],
      page: 0,
      maxPage: 0,
      map: Map
    };
    

    markers = []
    displayMarker = (map, exhibitions) => {
      this.markers.some((marker, index) => {
        marker.erase();
      })
      this.markers = null
      this.markers = []
      
      exhibitions.some((element, idx) => {
        let point = latlngToUtmk(element.longitude, element.latitude)
        let marker = new window.olleh.maps.overlay.Marker({
          position: point
        });
        marker.setMap(map);        
        marker['attribute'] = element
        this.markers.push(marker)
        })
      
      var latitudes = []
      var longitudes = []
      exhibitions.some((element, index) => {
        if(!(element.latitude == null || element.longitude == null)) {
          latitudes.push(element.latitude);
          longitudes.push(element.longitude);
        }
      })

      var top = Math.max.apply(null, latitudes)
      var bottom = Math.min.apply(null, latitudes)
      var right = Math.max.apply(null, longitudes)
      var left = Math.min.apply(null, longitudes)

      var lb = new window.olleh.maps.LatLng(left, bottom); // 좌측 하단 좌표
      var rt = new window.olleh.maps.LatLng(right, top); // 우측 상단 좌표
      var bounds = new window.olleh.maps.Bounds(lb, rt);
      

      exhibitions.some((element) => {
        map.panToBounds(bounds);
      })
    }

    getExhibitions = async (keyword) => {
      const {
        data: {
          data
        }
      } = await axios.post(
      'http://211.254.213.185:5000/search', 
      {keyword : keyword});
      
      if (data == null) {
        return;
      }
      const pagedExhibitions = pagingExhibitions(data, 0);
      const maxPage = parseInt(data.length/6);

      var mapOpts = {
        center: new window.olleh.maps.UTMK(960823.7, 1945435.52),
        zoom: 8,
        mapTypeId: 'ROADMAP',
        panControl: true,
        disableDefaultUI: true,
        zoomControl: true
      };
      var map = new window.olleh.maps.Map(document.getElementById("map_div",),
          mapOpts
      );

      

      this.setState({exhibitions: data, currentExhibitions: pagedExhibitions, maxPage: maxPage, isLoading: false, map: map})
    }

    async componentWillMount() {
      const { location, history } = this.props;
      console.log(location.state.keyword);
      this.getExhibitions(location.state.keyword);
    }

    nextPaging = (exhibitions, page) => {
      const pagedExhibitions = pagingExhibitions(exhibitions, page)
      this.setState({currentExhibitions: pagedExhibitions, page: page})
    }

  render() {
    const { isLoading, exhibitions, page, maxPage, currentExhibitions, map } = this.state;
    this.displayMarker(map, currentExhibitions);
    
    return (
      <Grid style={{
        width: '100%',
        height: '100%',
        padding: '54px 96px 54px 96px',
        margin: '0'
      }}>
        <Grid.Row style={{
            height: '15%'
          }}>
          <Grid.Column width={16} style={{
              height:'100%'
            }}>
            {/* 검색키워드 들어갈곳 */}
            <div className="searchMessage" style={{
              width:'100%',
              height:'100%'
            }}>
              <h1><strong>전시회</strong> 검색결과 입니다.</h1>
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{
            height: '85%'
          }}>
          <Grid.Column width={4} style={{
            height: '80%',
            padding: '50px 50px 0px 0px'
          }}>
            {/* 지도들어갈곳 */}
            <div className="map_container" style={{
              width: '100%',
              height: '100%'
            }}>
              <div id='map_div' style={{
                    width:'100%',
                    height:'100%'
                }}>
                  </div>
            </div>
          </Grid.Column>
          <Grid.Column celled='internally' width={12} style={{
              height: '100%'
            }}>
            <Grid style={{
              height: '90%'
            }}>
              {/* 전시회목록 */}
              <Grid.Row columns={3} style={{
                height: '50%'
              }}>
                <Grid.Column className="middle aligned" style={{
                  height: '100%'
                }}>
                  {
                    (currentExhibitions.length == 0)? <div></div> :
                    <Exhibition
                      key={currentExhibitions[0].exhibit_id}
                      id={currentExhibitions[0].exhibit_id}
                      title={currentExhibitions[0].title}
                      place={currentExhibitions[0].place}
                      address={currentExhibitions[0].address}
                      date={currentExhibitions[0].date}
                      time={currentExhibitions[0].time}
                      price={currentExhibitions[0].price}
                      poster={currentExhibitions[0].poster}
                      index={0}
                      x={currentExhibitions[0].latitude}
                      y={currentExhibitions[0].latitude}
                    />                     
                  }
                </Grid.Column>
                <Grid.Column className="middle aligned">
                  {
                    (currentExhibitions.length <= 1)? <div></div> :
                    <Exhibition
                      key={currentExhibitions[1].exhibit_id}
                      id={currentExhibitions[1].exhibit_id}
                      title={currentExhibitions[1].title}
                      place={currentExhibitions[1].place}
                      address={currentExhibitions[1].address}
                      date={currentExhibitions[1].date}
                      time={currentExhibitions[1].time}
                      price={currentExhibitions[1].price}
                      poster={currentExhibitions[1].poster}
                      index={1}
                    />                     
                  }
                </Grid.Column>
                <Grid.Column className="middle aligned">
                  {
                    (currentExhibitions.length <= 2)? <div></div> :
                    <Exhibition
                      key={currentExhibitions[2].exhibit_id}
                      id={currentExhibitions[2].exhibit_id}
                      title={currentExhibitions[2].title}
                      place={currentExhibitions[2].place}
                      address={currentExhibitions[2].address}
                      date={currentExhibitions[2].date}
                      time={currentExhibitions[2].time}
                      price={currentExhibitions[2].price}
                      poster={currentExhibitions[2].poster}
                      index={2}
                    />                     
                  }
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={3} style={{
                height: '50%'
              }}>
                <Grid.Column className="middle aligned">
                  {
                    (currentExhibitions.length <= 3)? <div></div> :
                    <Exhibition
                      key={currentExhibitions[3].exhibit_id}
                      id={currentExhibitions[3].exhibit_id}
                      title={currentExhibitions[3].title}
                      place={currentExhibitions[3].place}
                      address={currentExhibitions[3].address}
                      date={currentExhibitions[3].date}
                      time={currentExhibitions[3].time}
                      price={currentExhibitions[3].price}
                      poster={currentExhibitions[3].poster}
                      index={3}
                    />                     
                  }
                </Grid.Column>
                <Grid.Column className="middle aligned">
                  {
                    (currentExhibitions.length <= 4)? <div></div> :
                    <Exhibition
                      key={currentExhibitions[4].exhibit_id}
                      id={currentExhibitions[4].exhibit_id}
                      title={currentExhibitions[4].title}
                      place={currentExhibitions[4].place}
                      address={currentExhibitions[4].address}
                      date={currentExhibitions[4].date}
                      time={currentExhibitions[4].time}
                      price={currentExhibitions[4].price}
                      poster={currentExhibitions[4].poster}
                      index={4}
                    />                     
                  }
                </Grid.Column>
                <Grid.Column className="middle aligned">
                  {
                    (currentExhibitions.length <= 5)? <div></div> :
                    <Exhibition
                      key={currentExhibitions[5].exhibit_id}
                      id={currentExhibitions[5].exhibit_id}
                      title={currentExhibitions[5].title}
                      place={currentExhibitions[5].place}
                      address={currentExhibitions[5].address}
                      date={currentExhibitions[5].date}
                      time={currentExhibitions[5].time}
                      price={currentExhibitions[5].price}
                      poster={currentExhibitions[5].poster}
                      index={5}
                    />                     
                  }
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid style={{
              // height: '10%'
            }}>
              <Grid.Row>
                <Grid.Row columns={1}>
                  <Grid.Column>
                    {/* 버튼들 들어갈곳 */}
                    <div className="buttons">
                      {page == 0 ? (
                        <Button disabled size="huge" labelPosition='left' icon='left chevron' content='이전' onClick={() => {
                          if (page>0) {
                            this.nextPaging(exhibitions, page-1);
                          } 
                        }}/>
                      ) : (
                        <Button size="huge" labelPosition='left' icon='left chevron' content='이전' onClick={() => {
                          if (page>0) {
                            this.nextPaging(exhibitions, page-1);
                          } 
                        }}/>
                      )}
                      <div style={{color: 'white'}}>
                        <h1 style={{marginTop: '1rem'}}>({page+1}/{maxPage+1})</h1>
                      </div>
                      <Button size="huge" labelPosition='right' icon='right chevron' content='다음' onClick={() => {
                        if (page<maxPage) {
                          this.nextPaging(exhibitions, page+1);
                        } else {
                          this.nextPaging(exhibitions, 0);
                        }
                      }}/>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      )
    }
}
  
export default Search;