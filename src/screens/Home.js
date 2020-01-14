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

        const data = await axios.get('http://211.254.213.185:5000/');
        const data2 = await axios.get('http://211.254.213.185:5000/home');
        // console.log(data);
        // console.log(data2);
        const recommend = data.data.data;
        const onlineexh = data2.data.data;
        // console.log(recommend);
        console.log(onlineexh);
        this.setState({ currentExhibitions: recommend, online: onlineexh, isLoading: false })
    }

    async componentDidMount() {
        this.getExhibitions();
    }

    render() {
        const { isLoading, exhibitions, page, maxPage, currentExhibitions, map, online } = this.state;
        var randnum = [0, 1, 2, 3];
        var realrandnum = []
        for (var i = 0; i < 3; i++) {
            var temp = Math.floor(Math.random() * 9);
            // console.log(realrandnum.find((e) => (e === temp)));
            if (realrandnum.find((e) => (e === temp))) {
                i--;
            } else {
                realrandnum.push(temp);
            }
        }
        // console.log(randnum);

        console.log("render start");
        // console.log(currentExhibitions);

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
                                (currentExhibitions.length === 0) ? <div></div> :
                                    <HomeExhibition
                                        key={currentExhibitions[randnum[0]].exhibit_id}
                                        id={currentExhibitions[randnum[0]].exhibit_id}
                                        title={currentExhibitions[randnum[0]].title}
                                        place={currentExhibitions[randnum[0]].place}
                                        address={currentExhibitions[randnum[0]].address}
                                        date={currentExhibitions[randnum[0]].date}
                                        time={currentExhibitions[randnum[0]].time}
                                        price={currentExhibitions[randnum[0]].price}
                                        poster={currentExhibitions[randnum[0]].poster}
                                        index={0}
                                    />
                            }</Grid.Column>
                            <Grid.Column>{
                                (currentExhibitions.length === 0) ? <div></div> :
                                    <HomeExhibition
                                        key={currentExhibitions[randnum[1]].exhibit_id}
                                        id={currentExhibitions[randnum[1]].exhibit_id}
                                        title={currentExhibitions[randnum[1]].title}
                                        place={currentExhibitions[randnum[1]].place}
                                        address={currentExhibitions[randnum[1]].address}
                                        date={currentExhibitions[randnum[1]].date}
                                        time={currentExhibitions[randnum[1]].time}
                                        price={currentExhibitions[randnum[1]].price}
                                        poster={currentExhibitions[randnum[1]].poster}
                                        index={1}
                                    />

                            }</Grid.Column>
                            <Grid.Column>{
                                (currentExhibitions.length === 0) ? <div></div> :

                                    <HomeExhibition
                                        key={currentExhibitions[randnum[2]].exhibit_id}
                                        id={currentExhibitions[randnum[2]].exhibit_id}
                                        title={currentExhibitions[randnum[2]].title}
                                        place={currentExhibitions[randnum[2]].place}
                                        address={currentExhibitions[randnum[2]].address}
                                        date={currentExhibitions[randnum[2]].date}
                                        time={currentExhibitions[randnum[2]].time}
                                        price={currentExhibitions[randnum[2]].price}
                                        poster={currentExhibitions[randnum[2]].poster}
                                        index={2}
                                    />

                            }</Grid.Column>
                            <Grid.Column>{
                                (currentExhibitions.length === 0) ? <div></div> :

                                    <HomeExhibition
                                        key={currentExhibitions[randnum[3]].exhibit_id}
                                        id={currentExhibitions[randnum[3]].exhibit_id}
                                        title={currentExhibitions[randnum[3]].title}
                                        place={currentExhibitions[randnum[3]].place}
                                        address={currentExhibitions[randnum[3]].address}
                                        date={currentExhibitions[randnum[3]].date}
                                        time={currentExhibitions[randnum[3]].time}
                                        price={currentExhibitions[randnum[3]].price}
                                        poster={currentExhibitions[randnum[3]].poster}
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
                                (HomeExhibition.length === 0) ? <div></div> :

                                    <HomeExhibition
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
                            <Grid.Column>{
                                (HomeExhibition.length === 0) ? <div></div> :

                                    <HomeExhibition
                                        key='1001'
                                        id='1001'
                                        title="GOYA Y LUCIENTES"
                                        date="상설 전시"
                                        poster="https://www.wga.hu/detail/g/goya/2/212goya.jpg"
                                        desc="프란시스코 호세 데 고야 이 루시엔테스는 스페인의 대표적인 낭만주의 화가이자 판화가이다. 고야는 궁정화가이자 기록화가로서 많은 작품을 남겼다. 18세기 스페인 회화의 대표자로 특히 고전적인 경향에서 떠나 인상파의 시초를 보인 스페인 근세의 천재 화가로 알려져 있다. "
                                        index='1001'
                                        type='online'
                                    />

                            }</Grid.Column>
                            <Grid.Column>{
                                (HomeExhibition.length === 0) ? <div></div> :

                                    <HomeExhibition
                                        key='1002'
                                        id='1002'
                                        title="MANET"
                                        date="상설 전시"
                                        poster='https://www.wga.hu/detail/m/manet/1/2spanis1.jpg'
                                        desc="에두아르 마네는 프랑스의 인상주의 화가이다. 19세기 현대적인 삶의 모습에 접근하려 했던 화가들중의 하나로 시대적 화풍이 사실주의에서 인상파로 전환되는 데 중추적 역할을 하였다."
                                        index='1002'
                                        type='online'
                                    />

                            }</Grid.Column>
                            <Grid.Column>{
                                (HomeExhibition.length === 0) ? <div></div> :

                                    <HomeExhibition
                                        key='1003'
                                        id='1003'
                                        title="MONET"
                                        date="상설 전시"
                                        poster='https://www.wga.hu/detail/m/monet/01/early11.jpg'
                                        desc="클로드 모네는 프랑스의 인상주의 화가로, 인상파의 개척자이며 지도자다."
                                        index='1003'
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
