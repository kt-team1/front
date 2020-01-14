import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import LinesEllipsis from 'react-lines-ellipsis';
import "react-router-dom";


function App({poster}) {
    return (
        <img style={{
            display: 'inline-block',
            width: '80%',
            height: '90%',
            marginTop: "5%",
            marginBottom: "5%",
            marginLeft: "15%",
        }}
            src={poster}
            alt="new"
            margin="10000"
        />
    );
}

const extra = (
    <div>
        <Button style={{
            backgroundColor: 'pink',
            float: "left",
            width: '30%',
            height: '100%',
            fontSize: '130%'
        }}>온라인 전시</Button>
    </div>
)

function ellipsisText(text) {
    if (text.length > 10) {
        text.substring(0, 4)
    }
    return

}

class ExhibitionDetail extends Component {
    render() {
        console.log(this.props.location);
        return (
            <div class="show_exhibition" style={{
                backgroundColor: 'black',
                float: "left",
                width: '100%',
                height: '100%',
            }
            }>  <div style={{
                float: "left",
                width: '50%',
                height: '100%',
            }}>
                    <App poster="https://search.pstatic.net/common?type=ofullfill&size=256x368&quality=95&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F3029_000_8%2F20200106182919448_4RE2ZHDC5.jpg%2F%25EC%2595%258C%25EC%25A5%2590.jpg%3Ftype%3Dm1501"/>
                </div>
                {/* //오른쪽 부분 */}
                <div style={{
                    float: "left",
                    width: '45%',
                    marginLeft: '5%',
                    height: '95%',
                }}>
                    {/* //title */}
                    <p style={{
                        color: "white",
                        width: '80%',
                        height: '10%',
                        marginTop: '5%',
                        fontSize: '450%',
                        fontWeight: 'bold',
                    }}>알쥐알쥐</p>
                    {/* //2번째줄 div */}
                    <div style={{
                        width: '80%',
                        height: '6%',
                    }}>
                        <p style={{
                            color: "white",
                            float: "left",
                            fontSize: '200%',
                            width: '15%',
                            fontWeight: 'bold',
                        }}>기간</p><p style={{
                            color: "white",
                            float: "left",
                            fontSize: '200%',
                        }}>2019.10.10 ~ 2020.12.02</p>
                    </div>
                    {/* //3번째줄 div */}
                    <div style={{
                        width: '80%',
                        height: '6%',
                    }}>
                        <p style={{
                            color: "white",
                            float: "left",
                            fontSize: '200%',
                            width: '15%',
                            fontWeight: 'bold',
                        }}>장소</p><p style={{
                            color: "white",
                            float: "left",
                            fontSize: '200%',
                        }}>갤러리 이즈</p>
                    </div>
                    {/* //4번째줄 div */}
                    <div style={{
                        width: '80%',
                        height: '40%',
                    }}>
                        <p style={{
                            color: "white",
                            float: "left",
                            fontSize: '200%',
                            width: '15%',
                            fontWeight: 'bold',
                        }}>개요</p><p style={{
                            color: "white",
                            float: "left",
                            width: '80%',
                            height: '75%',
                            fontSize: '200%',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden'
                        }}>진채연구소(대표 정해진)는 2020년 경자년 흰색 쥐띠해를 맞아 소망 성취와 평안을 기원하는 그림을 소개하는 ‘세화전’을 연다.
                                ‘알-쥐! 너를 응원해’ 제목으로 1부는 오는 8~13일 서울 인사동 갤러리 이즈에서, 2부는 28~2월5일 북촌 갤러리한옥에서 선보인다.
                                정해진 대표는 “과거 유행했던 세화는 창조성보다 주로 표본이 있는 그림을 반복적 패턴으로 모사하는 방식이었다면,
                                이번 세화전에 참여한 작가들은 현대적으로 재해석한 작품을 보여준다”고 소개했다.
                    그는 또 “2020년은 근검절약과 재치·신중함·민첩함을 상징하는 쥐띠 중에서도 길한 흰색 쥐띠해여서 좋은 꿈을 꾸게 한다”고 덧붙였다.</p>
                    </div>
                    {/* //5번째줄 div */}
                    <div style={{
                        width: '80%',
                        height: '6%',
                    }}><p style={{
                        color: "white",
                        float: "left",
                        fontSize: '200%',
                        width: '15%',
                    }} />
                        {extra}
                        <p style={{
                            color: "white",
                            float: "left",
                            fontSize: '200%',
                            width: '18%',
                        }} />
                        {extra}
                    </div>
                </div>
            </div>
        );
    }
}

export default ExhibitionDetail;