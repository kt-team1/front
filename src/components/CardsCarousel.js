import React, { Component } from 'react';
import { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import {Container, Header, Button, Card, Image, Icon, Grid, GridColumn, Segment, Menu, Table} from 'semantic-ui-react'

const extra = (
    <div>
      <Button size='mini' primary>온라인 전시</Button>
    </div>
)
  
const CardExample = () => (
    <Card style = {{
        display:'inline-block',
        width:'100%',
        height:'100%'
    }}
      image='https://cphoto.asiae.co.kr/listimglink/1/2017081115530600874_1.png'
      header='전시회 이름'
      description='전시회 장소'
      extra={extra}
    />
)
  
const CardExampleGroups = () => (
    <Card.Group>
        {CardExample()}
        {CardExample()}
        {CardExample()}
    </Card.Group>
)

const samples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default (param) => {
    console.log(param);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
      <div style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
            infiniteLoop
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={1}
          gutter={20}
          leftChevron={<button>{'<'}</button>}
          rightChevron={<button>{'>'}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >   
        
        <div>
        <Container>
            <Grid columns={3} divided>
                <Grid.Row>
                    
                    <Grid.Column>
                        <div style={{ height: 250, background: '#EEE' }}>7{CardExample()}</div>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ height: 250, background: '#EEE' }}>8{CardExample()}</div>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ height: 250, background: '#EEE' }}>9{CardExample()}</div>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <div style={{ height: 250, background: '#EEE' }}>10{CardExample()}</div>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ height: 250, background: '#EEE' }}>11{CardExample()}</div>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ height: 250, background: '#EEE' }}>12{CardExample()}</div>
                    </Grid.Column>
                </Grid.Row>
                
            </Grid>
        
            </Container>
        </div>
        <div>
        <Container>
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <div style={{ height: 250, background: '#EEE' }}>7{CardExample()}</div>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ height: 250, background: '#EEE' }}>8{CardExample()}</div>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ height: 250, background: '#EEE' }}>9{CardExample()}</div>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <div style={{ height: 250, background: '#EEE' }}>10{CardExample()}</div>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ height: 250, background: '#EEE' }}>11{CardExample()}</div>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ height: 250, background: '#EEE' }}>12{CardExample()}</div>
                    </Grid.Column>
                </Grid.Row>
                
            </Grid>
        
            </Container>
        </div>
        </ItemsCarousel>
      </div>
    );
  };