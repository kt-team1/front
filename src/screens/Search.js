import React, { Component } from 'react';
import Map from '../components/Map';
import { markerDisplay } from '../components/Map';
import axios from "axios"
import Exhibition from '../components/Exhibition'
import '../css/Search.css'

const getMap = () => (
  <div>
    <Map/>
  </div>
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
      //     method:'get',
      //     url : 'https://kt_map.gitlab.io/data/public_parking.json',
      //     responseType: 'json',
      //   }).then(res => {
      //     markerDisplay(res, map);
      //   }).catch(err => console.log(err));
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
          <section className="container">
            <div className="map" style={{
                  width:'40%',
                  backgroundColor: 'red'
                }}>
                  <div className="searchMessage" style={{
                    width:'100%',
                    height:'20%',
                    backgroundColor: 'yellow'
                  }}>
                    <h1>keyword에 대한 검색결과 입니다.</h1>
                  </div>
              <div id='map_div' style={{
                  width:'80%',
                  height:'60%'
                }}>
                  {getMap()}
              </div>
            </div>
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
          </section>
        )
      }
      </section>
      )
    }
}
  
export default Search;