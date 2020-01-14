import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { render } from '@testing-library/react';

class SearchDetail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
        history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        console.log(location.state)
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
                        }}><img src={location.state.poster}
                            alt="" style={{height: '100%', width: '100%', objectFit: 'cover'}}/>
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
                            <div className="buttons">
                                <Button size="huge" labelPosition='left' icon='left chevron' content='뒤로가기' onClick={() => {
                                    console.log("뒤로가기");
                                }}/>
                                <Button size="huge" content='온라인전시' 
                                style={{ visibility: location.state.type === 'online' ? 'visible' : 'hidden'}}
                                onClick={() => {
                                    console.log("온라인전시");
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


export default SearchDetail;