import React, { Component } from 'react';
import {Grid, Button} from 'semantic-ui-react';

const SearchDetail = (props) => {
    const { data } = this.props.location
    console.log(data)
    return (
        <Grid style={{
            width: '100%',
            height: '100%',
            padding: '54px 96px 54px 96px',
            margin: '0'
          }}>
            <Grid.Column width={8} style={{
                height:'100%',
                textAlign: 'center',
                padding: '16px'
                }}>
                    <img src="https://search.pstatic.net/common?type=ofullfill&size=256x368&quality=95&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F3029_000_8%2F20200106182919448_4RE2ZHDC5.jpg%2F%25EC%2595%258C%25EC%25A5%2590.jpg%3Ftype%3Dm1501"
                    alt="new" style={{height: '100%', width: '100%', objectFit: 'cover'}}/>
            </Grid.Column>
            <Grid.Column width={8} style={{
                height:'100%'
                }}>
                <Grid.Row columns={2} style={{
                    height: '26%',
                    padding: '16px'
                }}>
                    <h2 style={{
                     fontSize: '3vw',
                     color: 'white',
                     height: '100%',
                     textOverflow: 'ellipsis',
                     overflow: 'hidden'
                 }}><strong>알-쥐! 너를 응원해!</strong></h2>
                </Grid.Row>
                <Grid.Row columns={2} style={{
                    height: '8%',
                    padding: '16px'
                }}>
                    <Grid style={{
                        height: '100%'
                    }}>
                        <Grid.Column width={3} style={{
                            height:'100%',
                            textAlign: 'left'
                        }}>
                            <h2 style={{
                                fontSize: '2.85vh',
                                color: 'white'
                            }}>기간</h2>
                        </Grid.Column>
                        <Grid.Column width={13} style={{
                            height:'100%',
                            textAlign: 'left'
                        }}>
                            <h2 style={{
                                fontSize: '2.85vh',
                                color: 'white'
                            }}>2019.10.10 ~ 2020.12.02</h2>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
                <Grid.Row columns={2} style={{
                    height: '8%',
                    padding: '16px'
                }}>
                    <Grid style={{
                        height: '100%'
                    }}>
                        <Grid.Column width={3} style={{
                            height:'100%',
                            textAlign: 'left'
                        }}>
                            <h2 style={{
                                fontSize: '2.85vh',
                                color: 'white'
                            }}>장소</h2>
                        </Grid.Column>
                        <Grid.Column width={13} style={{
                            height:'100%',
                            textAlign: 'left'
                        }}>
                            <h2 style={{
                                fontSize: '2.85vh',
                                color: 'white'
                            }}>갤러리 이즈</h2>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
                <Grid.Row columns={2} style={{
                    height: '8%',
                    padding: '16px'
                }}>
                    <Grid style={{
                        height: '100%'
                    }}>
                        <Grid.Column width={3} style={{
                            height:'100%',
                            textAlign: 'left'
                        }}>
                            <h2 style={{
                                fontSize: '2.85vh',
                                color: 'white'
                            }}>주소</h2>
                        </Grid.Column>
                        <Grid.Column width={13} style={{
                            height:'100%',
                            textAlign: 'left'
                        }}>
                            <h2 style={{
                                fontSize: '2.85vh',
                                color: 'white'
                            }}>서울 종로구 인사동길 52-1</h2>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
                <Grid.Row columns={2} style={{
                    height: '40%',
                    padding: '16px'
                }}>
                    <Grid  style={{height: '100%'}}>
                        <Grid.Column width={3} style={{
                            height:'100%',
                            textAlign: 'left'
                        }}>
                            <h2 style={{
                                fontSize: '2.85vh',
                                color: 'white'
                            }}>개요</h2>
                        </Grid.Column>
                        <Grid.Column width={13} style={{
                            height:'100%',
                            textAlign: 'left'
                        }}>
                            <h2 style={{
                                height: '100%',
                                fontSize: '2.85vh',
                                color: 'white',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden'
                            }}>
                                진채연구소(대표 정해진)는 2020년 경자년 흰색 쥐띠해를 맞아 소망 성취와 평안을 기원하는 그림을 소개하는 ‘세화전’을 연다.
                                ‘알-쥐! 너를 응원해’ 제목으로 1부는 오는 8~13일 서울 인사동 갤러리 이즈에서, 2부는 28~2월5일 북촌 갤러리한옥에서 선보인다.
                                정해진 대표는 “과거 유행했던 세화는 창조성보다 주로 표본이 있는 그림을 반복적 패턴으로 모사하는 방식이었다면, 
                                이번 세화전에 참여한 작가들은 현대적으로 재해석한 작품을 보여준다”고 소개했다. 
                                그는 또 “2020년은 근검절약과 재치·신중함·민첩함을 상징하는 쥐띠 중에서도 길한 흰색 쥐띠해여서 좋은 꿈을 꾸게 한다”고 덧붙였다.
                            </h2>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
                <Grid.Row columns={2} style={{
                    height: '10%',
                    padding: '16px'
                }}>
                    <div className="buttons">
                        <Button size="huge" labelPosition='left' icon='left chevron' content='뒤로가기' onClick={() => {
                            console.log("뒤로가기");
                        }}/>
                        <Button size="huge" content='온라인전시' onClick={() => {
                            console.log("온라인전시");
                        }}/>
                    </div>
                </Grid.Row>
            </Grid.Column>
        </Grid>
    );
}


export default SearchDetail;