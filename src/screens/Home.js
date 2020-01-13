import React, { Component } from 'react';
import Recommendation from '../components/Recommendation';
import SearchBar from '../components/Searchbar';
import '../css/home.css';
import { Grid, Button } from 'semantic-ui-react'
import Exhibition from '../components/Exhibition'
import '../css/Search.css'
import axios from "axios"

class Home extends Component {
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
        this.setState({exhibitions: search, isLoading: false})
      }
  
      async componentDidMount() {
        this.getExhibitions();
      }


    render() {
        const { isLoading, exhibitions } = this.state
        return (
            <Grid style={{
                width: '100%',
                height: '100%',
                padding: '50px',
                margin: '0'
              }}>
                <Grid.Column width={4} style={{
                    height:'100%',
                    backgroundColor: 'yellow'
                }}>
                    <div class="home">
                        <div class="home_search_bar">
                            <SearchBar />
                        </div>          
                    </div>          
                </Grid.Column>
                <Grid.Column celled='internally' width={12} style={{
                    height:'100%',
                    backgroundColor: 'red'
                }}>
                    <Grid style={{
                        height: '10%'
                    }}>
                        <div className="category_div" style={{
                            width:'100%',
                            height:'100%'
                            }}>
                            <h1 style={{
                                color: 'white',
                                fontSize: '2.5vw',
                                fontWeight: '500',
                                textAlign: 'left'
                            }}>추천 전시</h1>
                        </div>
                    </Grid>
                    <Grid columns={4} style={{
                        height: '40%'
                    }}>
                        <Grid.Column>{
                            (exhibitions.length == 0)? <div></div> :
                            <Exhibition
                            key={exhibitions[0].exhibit_id}
                            id={exhibitions[0].exhibit_id}
                            title={exhibitions[0].title}
                            place={exhibitions[0].place}
                            address={exhibitions[0].address}
                            date={exhibitions[0].date}
                            time={exhibitions[0].time}
                            price={exhibitions[0].price}
                            poster={exhibitions[0].poster}
                            index={0}
                            />                     
                        }</Grid.Column>
                        <Grid.Column>{                 
                        }</Grid.Column>
                        <Grid.Column>{               
                        }</Grid.Column>
                        <Grid.Column>{             
                        }</Grid.Column>
                    </Grid>
                    <Grid style={{
                        height: '10%'
                    }}>
                        <div className="category_div" style={{
                            width:'100%',
                            height:'100%'
                            }}>
                            <h1 style={{
                                color: 'white',
                                fontSize: '2.5vw',
                                fontWeight: '500',
                                textAlign: 'left'
                            }}>기가지니 온라인 전시</h1>
                        </div>
                    </Grid>
                    <Grid style={{
                        height: '40%'
                    }}>
                    </Grid>
                </Grid.Column>
            </Grid>

            // <div class="home">
            //     <div class="home_search_bar">
            //         <SearchBar />
            //     </div>

            //     <div class="home_lists">
            //             <Recommendation title="추천 전시" />
            //             <Recommendation title="기가지니 온라인 전시" />
            //     </div>

            // </div>

        )
    }
}

export default Home;