import React, { Component } from 'react';
// import Recommendation from '../components/Recommendation';
import SearchBar from '../components/Searchbar';
import '../css/home.css';
import { Grid, Button } from 'semantic-ui-react';
import Exhibition from '../components/Exhibition';
import '../css/Search.css';
import axios from "axios";


class Home extends Component {
    state = {
        isLoading: true,
        keyword: "...을 검색한 결과입니다.",
        exhibitions: []
    };
    
    getExhibitions = async () => {
        const {
            data: {
                data
            }

        } = await axios.get('http://211.254.213.185:5000/search/place');
        this.setState({ exhibitions: data, isLoading: false })
        console.log(data);
    }

    async componentDidMount() {
        this.getExhibitions();
    }


    render() {
        const { isLoading, exhibitions } = this.state
        console.log("render start");
        return (
            <div class="home">
                <Grid style={{
                    width: '100%',
                    height: '100%',
                    padding: '5%',
                    margin: '0px'
                }}>

                    <div class="home_search_bar">
                        <SearchBar />
                    </div>

                    <Grid.Column celled='internally' width={12} style={{
                        height: '100%'
                    }}>
                        <Grid style={{
                            height: '7%'
                        }}>
                            <div className="category_div" style={{
                                width: '100%',
                                height: '100%'
                            }}>
                                <h1 style={{
                                    color: 'white',
                                    fontSize: '2.0vw',
                                    fontWeight: '500',
                                    textAlign: 'left',
                                    textShadow: '1px 1px 30px white',
                                }}>추천 전시</h1>
                            </div>
                        </Grid>
                        <Grid columns={4} style={{
                            height: '40%',
                            marginBottom: '5%',
                        }}>
                            <Grid.Column>{
                                (exhibitions.length == 0) ? <div></div> :
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
                                (exhibitions.length == 0) ? <div></div> :
                                    <Exhibition
                                        key={exhibitions[1].exhibit_id}
                                        id={exhibitions[1].exhibit_id}
                                        title={exhibitions[1].title}
                                        place={exhibitions[1].place}
                                        address={exhibitions[1].address}
                                        date={exhibitions[1].date}
                                        time={exhibitions[1].time}
                                        price={exhibitions[1].price}
                                        poster={exhibitions[1].poster}
                                        index={1}
                                    />

                            }</Grid.Column>
                            <Grid.Column>{
                                (exhibitions.length == 0) ? <div></div> :

                                    <Exhibition
                                        key={exhibitions[2].exhibit_id}
                                        id={exhibitions[2].exhibit_id}
                                        title={exhibitions[2].title}
                                        place={exhibitions[2].place}
                                        address={exhibitions[2].address}
                                        date={exhibitions[2].date}
                                        time={exhibitions[2].time}
                                        price={exhibitions[2].price}
                                        poster={exhibitions[2].poster}
                                        index={2}
                                    />

                            }</Grid.Column>
                            <Grid.Column>{
                                (exhibitions.length == 0) ? <div></div> :

                                    <Exhibition
                                        key={exhibitions[3].exhibit_id}
                                        id={exhibitions[3].exhibit_id}
                                        title={exhibitions[3].title}
                                        place={exhibitions[3].place}
                                        address={exhibitions[3].address}
                                        date={exhibitions[3].date}
                                        time={exhibitions[3].time}
                                        price={exhibitions[3].price}
                                        poster={exhibitions[3].poster}
                                        index={3}
                                    />


                            }</Grid.Column>
                        </Grid>
                        <Grid style={{
                            height: '7%'
                        }}>
                            <div className="category_div" style={{
                                width: '100%',
                                height: '100%'
                            }}>
                                <h1 style={{
                                    color: 'white',
                                    fontSize: '2.0vw',
                                    fontWeight: '500',
                                    textAlign: 'left',
                                    textShadow: '1px 1px 30px white',
                                }}>기가지니 온라인 전시</h1>
                            </div>
                        </Grid>
                        <Grid columns={4} style={{
                            height: '40%'
                        }}>
                            <Grid.Column>{
                                (exhibitions.length == 0) ? <div></div> :

                                    <Exhibition
                                        key={exhibitions[4].exhibit_id}
                                        id={exhibitions[4].exhibit_id}
                                        title={exhibitions[4].title}
                                        place={exhibitions[4].place}
                                        address={exhibitions[4].address}
                                        date={exhibitions[4].date}
                                        time={exhibitions[4].time}
                                        price={exhibitions[4].price}
                                        poster={exhibitions[4].poster}
                                        index={4}
                                    />

                            }</Grid.Column>
                            <Grid.Column>{
                                (exhibitions.length == 0) ? <div></div> :

                                    <Exhibition
                                        key={exhibitions[5].exhibit_id}
                                        id={exhibitions[5].exhibit_id}
                                        title={exhibitions[5].title}
                                        place={exhibitions[5].place}
                                        address={exhibitions[5].address}
                                        date={exhibitions[5].date}
                                        time={exhibitions[5].time}
                                        price={exhibitions[5].price}
                                        poster={exhibitions[5].poster}
                                        index={5}
                                    />

                            }</Grid.Column>
                            <Grid.Column>{
                                (exhibitions.length == 0) ? <div></div> :

                                    <Exhibition
                                        key={exhibitions[6].exhibit_id}
                                        id={exhibitions[6].exhibit_id}
                                        title={exhibitions[6].title}
                                        place={exhibitions[6].place}
                                        address={exhibitions[6].address}
                                        date={exhibitions[6].date}
                                        time={exhibitions[6].time}
                                        price={exhibitions[6].price}
                                        poster={exhibitions[6].poster}
                                        index={6}
                                    />

                            }</Grid.Column>
                            <Grid.Column>{
                                (exhibitions.length == 0) ? <div></div> :

                                    <Exhibition
                                        key={exhibitions[7].exhibit_id}
                                        id={exhibitions[7].exhibit_id}
                                        title={exhibitions[7].title}
                                        place={exhibitions[7].place}
                                        address={exhibitions[7].address}
                                        date={exhibitions[7].date}
                                        time={exhibitions[7].time}
                                        price={exhibitions[7].price}
                                        poster={exhibitions[7].poster}
                                        index={7}
                                    />

                            }</Grid.Column>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </div>

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
