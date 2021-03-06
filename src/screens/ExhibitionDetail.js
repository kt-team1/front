import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

class ExhibitionDetail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
        history.push("/");
        }
    }
    state = {
        img: require('../resources/home-icon.JPG')
      };
    render() {
        const { location } = this.props;
        console.log(location.state);
        if (location.state) {
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
                            <div style={{height: '7%', width: '100%', objectFit: 'cover'}} >
                    <div style={{height: '100%', width: '10%', objectFit: 'cover', float:"left"}}></div><Link to="/">
              <img style = {{float:"left",}} src={this.state.img}
                width="6%" height="80%"></img></Link></div>
                            <img src={location.state.poster}
                            alt="" style={{height: '80%', width: '80%', objectFit: 'cover'}}/>
                            <div style={{height: '13%', width: '100%', objectFit: 'cover'}}></div>
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
                            }}><strong>{location.state.title}</strong></h2>
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
                                    }}>{location.state.date}</h2>
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
                                    }}>{location.state.place}</h2>
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
                                    }}>{location.state.address}</h2>
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
                                        {location.state.desc}
                                    </h2>
                                </Grid.Column>
                            </Grid>
                        </Grid.Row>
                        <Grid.Row columns={2} style={{
                            height: '10%',
                            padding: '16px'
                        }}>
                            {/* <div className="buttons">
                        <Button size="huge" labelPosition='left' icon='left chevron' content='뒤로가기' style={{
          backgroundColor:'pink',
          }} onClick={() => {
                            console.log("뒤로가기");
                        }}/>
                        <Link to="/exhibition/detail/main"><Button size="huge" content='온라인전시'style={{
          backgroundColor:'pink',
          }}/></Link>
                    </div> */}

                    <div className="buttons">
                                <Button size="huge" labelPosition='left' icon='left chevron' content='뒤로가기' 
                                onClick={function(e) {
                                    this.props.history.goBack();
                                }.bind(this)} />
                                <Button size="huge" content='온라인전시' 
                                style={{ visibility: location.state.type === 'online' ? 'visible' : 'hidden'}}
                                onClick={() => {
                                    if (location.state.id === '1000') {
                                        window.location = '/exhibition/detail/' + location.state.id + '/main';
                                    }
                                    else {
                                        alert("아직 준비 중입니다!")
                                    }
                                }}/>
                            </div>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            );
        } else {
            return null;
        }
    }
    
}


export default ExhibitionDetail;
