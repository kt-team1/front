import React, { Component } from 'react';
import Map from '../components/Map';
import { markerDisplay } from '../components/Map';
import axios from "axios"
import Exhibition from '../components/Exhibition'
import '../css/Search.css'
import Button from '@material-ui/core/Button';

const getMap = () => (
  <div>
    <Map/>
  </div>
)

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
      maxPage: 0
    };
    
    getExhibitions = async () => {
      const {
          data: {
            search
          }
      } = await axios.get('http://211.254.213.185:5000/searchapi');
      const pagedExhibitions = pagingExhibitions(search, 0);
      const maxPage = parseInt(search.length/6);
      this.setState({exhibitions: search, currentExhibitions:pagedExhibitions, maxPage: maxPage, isLoading: false})
    }

    async componentDidMount() {
      this.getExhibitions();
    }

    nextPaging = (exhibitions, page) => {
      const pagedExhibitions = pagingExhibitions(exhibitions, page)
      this.setState({currentExhibitions: pagedExhibitions, page: page})
    }

  render() {
    const { isLoading, exhibitions, page, maxPage, currentExhibitions } = this.state
    console.log(currentExhibitions);
    return (
      <div>
        <div className="searchMessage" style={{
            width:'100%',
            height:'20%'
          }}>
            <h1>keyword에 대한 검색결과 입니다.</h1>
          </div>
          <section className="container">
          {isLoading ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
          ) : (
            <section className="container">
              <div className="map_container">
                    
                <div id='map_div'>
                    {getMap()}
                </div>
              </div>
              <div className="exhibitions">
                  {currentExhibitions.map(exhibition => (
                    <Exhibition
                      key={exhibition.exhibit_id}
                      id={exhibition.exhibit_id}
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
            </section>
          )
        }
        </section>
        <div>
          <Button variant="contained" onClick={() => {
            if (page>0) {
              this.nextPaging(exhibitions, page-1);
            } else {
              console.log('nothing');
            }
          }}>이전</Button>
          <Button variant="contained" onClick={() => {
            if (page<maxPage) {
              this.nextPaging(exhibitions, page+1);
            } else {
              this.nextPaging(exhibitions, 0);
            }
          }}>다음</Button>
        </div>
      </div>
      )
    }
}
  
export default Search;