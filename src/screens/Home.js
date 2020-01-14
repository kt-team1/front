import React, { Component } from 'react';
// import Recommendation from '../components/Recommendation';
import SearchBar from '../components/Searchbar';
import '../css/home.css';
import { Grid, Button } from 'semantic-ui-react';
import HomeExhibition from '../components/HomeExhibition';
import '../css/Search.css';
import axios from "axios";


class Home extends Component {
    state = {
        isLoading: true,
        keyword: "...을 검색한 결과입니다.",
        exhibitions: [],
        currentExhibitions: [],
    };
    
    getExhibitions = async () => {
        const {
            data: {
                data
            }

        } = await axios.get('http://211.254.213.185:5000/search/place');
        this.setState({ currentExhibitions: data, isLoading: false })
        console.log(data);
    }

    async componentDidMount() {
        this.getExhibitions();
    }


    render() {
        const { isLoading, exhibitions, page, maxPage, currentExhibitions, map } = this.state;
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
                                (currentExhibitions.length == 0) ? <div></div> :
                                    <HomeExhibition
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
                                    />
                            }</Grid.Column>
                            <Grid.Column>{
                                (currentExhibitions.length == 0) ? <div></div> :
                                    <HomeExhibition
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

                            }</Grid.Column>
                            <Grid.Column>{
                                (currentExhibitions.length == 0) ? <div></div> :

                                    <HomeExhibition
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

                            }</Grid.Column>
                            <Grid.Column>{
                                (currentExhibitions.length == 0) ? <div></div> :

                                    <HomeExhibition
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
                                (currentExhibitions.length == 0) ? <div></div> :

                                    <HomeExhibition
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

                            }</Grid.Column>
                            <Grid.Column>{
                                (currentExhibitions.length == 0) ? <div></div> :

                                    <HomeExhibition
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

                            }</Grid.Column>
                            <Grid.Column>{
                                (currentExhibitions.length == 0) ? <div></div> :

                                    <HomeExhibition
                                    key={currentExhibitions[6].exhibit_id}
                                    id={currentExhibitions[6].exhibit_id}
                                    title={currentExhibitions[6].title}
                                    place={currentExhibitions[6].place}
                                    address={currentExhibitions[6].address}
                                    date={currentExhibitions[6].date}
                                    time={currentExhibitions[6].time}
                                    price={currentExhibitions[6].price}
                                    poster={currentExhibitions[6].poster}
                                    index={6}
                                    />

                            }</Grid.Column>
                            <Grid.Column>{
                                (currentExhibitions.length == 0) ? <div></div> :

                                    <HomeExhibition
                                    key={currentExhibitions[7].exhibit_id}
                                    id={currentExhibitions[7].exhibit_id}
                                    title={currentExhibitions[7].title}
                                    place={currentExhibitions[7].place}
                                    address={currentExhibitions[7].address}
                                    date={currentExhibitions[7].date}
                                    time={currentExhibitions[7].time}
                                    price={currentExhibitions[7].price}
                                    poster={currentExhibitions[7].poster}
                                    index={7}
                                    />

                            }</Grid.Column>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Home;
