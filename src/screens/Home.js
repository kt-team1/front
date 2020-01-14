import React, { Component } from 'react';
// import Recommendation from '../components/Recommendation';
import SearchBar from '../components/Searchbar';
import '../css/home.css';
import { Grid, Button } from 'semantic-ui-react'
import Exhibition from '../components/Exhibition'
import '../css/Search.css'
import axios from "axios"

function startGenie(){
    var options={};
        options.mode=1
        options.voicemsg="기가지니, 온라인 전시 서비스 시작합니다."
        gigagenie.voice.getVoiceText(options,function(result_cd,result_msg,extra){
            if(result_cd===200){
                console.log("Received Text is "+extra.voicetext);
            };
        });
}



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
        this.setState({ exhibitions: search, isLoading: false })
    }

    async componentDidMount() {
        this.getExhibitions();
    }
    

    render() {
        const { isLoading, exhibitions } = this.state
        console.log("render start");
        return (
            <div class="home">
                <div>
                    <startGenie/>
                </div>
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