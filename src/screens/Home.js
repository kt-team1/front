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
        // console.log(data); // 47
    }

    async componentDidMount() {
        this.getExhibitions();
    }


    render() {
        const { isLoading, exhibitions } = this.state;
        var randnum = []
        for (var i = 0; i < 4; i++) {
            var temp = Math.floor(Math.random() * 47);
            randnum.push(temp);
        }
        // console.log(randnum);
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
                                        key={exhibitions[randnum[0]].exhibit_id}
                                        id={exhibitions[randnum[0]].exhibit_id}
                                        title={exhibitions[randnum[0]].title}
                                        place={exhibitions[randnum[0]].place}
                                        address={exhibitions[randnum[0]].address}
                                        date={exhibitions[randnum[0]].date}
                                        time={exhibitions[randnum[0]].time}
                                        price={exhibitions[randnum[0]].price}
                                        poster={exhibitions[randnum[0]].poster}
                                        index={0}
                                    />
                            }</Grid.Column>
                            <Grid.Column>{
                                (exhibitions.length == 0) ? <div></div> :
                                    <Exhibition
                                        key={exhibitions[randnum[1]].exhibit_id}
                                        id={exhibitions[randnum[1]].exhibit_id}
                                        title={exhibitions[randnum[1]].title}
                                        place={exhibitions[randnum[1]].place}
                                        address={exhibitions[randnum[1]].address}
                                        date={exhibitions[randnum[1]].date}
                                        time={exhibitions[randnum[1]].time}
                                        price={exhibitions[randnum[1]].price}
                                        poster={exhibitions[randnum[1]].poster}
                                        index={1}
                                    />

                            }</Grid.Column>
                            <Grid.Column>{
                                (exhibitions.length == 0) ? <div></div> :

                                    <Exhibition
                                        key={exhibitions[randnum[2]].exhibit_id}
                                        id={exhibitions[randnum[2]].exhibit_id}
                                        title={exhibitions[randnum[2]].title}
                                        place={exhibitions[randnum[2]].place}
                                        address={exhibitions[randnum[2]].address}
                                        date={exhibitions[randnum[2]].date}
                                        time={exhibitions[randnum[2]].time}
                                        price={exhibitions[randnum[2]].price}
                                        poster={exhibitions[randnum[2]].poster}
                                        index={2}
                                    />

                            }</Grid.Column>
                            <Grid.Column>{
                                (exhibitions.length == 0) ? <div></div> :

                                    <Exhibition
                                        key={exhibitions[randnum[3]].exhibit_id}
                                        id={exhibitions[randnum[3]].exhibit_id}
                                        title={exhibitions[randnum[3]].title}
                                        place={exhibitions[randnum[3]].place}
                                        address={exhibitions[randnum[3]].address}
                                        date={exhibitions[randnum[3]].date}
                                        time={exhibitions[randnum[3]].time}
                                        price={exhibitions[randnum[3]].price}
                                        poster={exhibitions[randnum[3]].poster}
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
                                        key='1000'
                                        id='1000'
                                        title="미니 갤러리"
                                        place="KT 분당 본사 3층"
                                        address="경기도 성남시 분당구 불정로 90 KT 본사"
                                        date="상설 전시"
                                        poster={require('../resources/exhibit/exhibit (3).jpg')}
                                        desc="KT 분당 본사 3층에서 제공하는 고품격 명화 갤러리!"
                                        index='1000'
                                        type='online'
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