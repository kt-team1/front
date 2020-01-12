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
  console.log(page);
  const pagedExhibitions = [];
  console.log(exhibitions);
  console.log(exhibitions[7]);
  for (let index = page*6; index < (page+1)*6; index++) {
    console.log(exhibitions[index]);
    pagedExhibitions.push(exhibitions[index]);
  }
  console.log(pagedExhibitions);

  return pagedExhibitions;
}

class Search extends React.Component {
    state = {
      isLoading: true,
      keyword: "...을 검색한 결과입니다.",
      exhibitions: [],
      currentExhibitions: [],
      page: 0
    };
    
    getExhibitions = async () => {
      const {
          data: {
            search
          }
      } = await axios.get('http://211.254.213.185:5000/searchapi');
      console.log(search);
      const pagedExhibitions = pagingExhibitions(search, 0);
      this.setState({exhibitions: search, currentExhibitions:pagedExhibitions, isLoading: false})
      console.log("aaaaaa");
      console.log(search);
      console.log("bbbbb");
    }

    async componentDidMount() {
      this.getExhibitions();
    }

    nextPaging = () => {
      console.log("nextPaging");
      const { exhibitions, page } = this.state
      console.log({exhibitions});
      const pagedExhibitions = pagingExhibitions({exhibitions}, 1);
      console.log(pagedExhibitions);
      this.setState({currentExhibitions: pagedExhibitions, page: page+1})
    }

  render() {
    const { isLoading, exhibitions, page, currentExhibitions } = this.state
    return (
      <div>
        <div className="searchMessage" style={{
            width:'100%',
            height:'20%',
            backgroundColor: 'yellow'
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
              <div className="map" style={{
                    width:'30%',
                    backgroundColor: 'red'
                  }}>
                    
                <div id='map_div' style={{
                    width:'80%',
                    height:'60%'
                  }}>
                    {getMap()}
                </div>
              </div>
              <div className="exhibitions">
                  {currentExhibitions.map(exhibition => (
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
              <Button variant="contained" onClick={() => {
                  this.nextPaging();
                  console.log({exhibitions});
                }}>다음</Button>
            </section>
          )
        }
        </section>
      </div>
      )
    }
}
  
export default Search;