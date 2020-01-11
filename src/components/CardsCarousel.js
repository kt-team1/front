import React, { Component } from 'react';
import { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import {Container, Header, Button, Card, Image, Icon, Grid, GridColumn, Segment, Menu, Table} from 'semantic-ui-react'

const extra = (
    <div>
      <Button primary>온라인 전시</Button>
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
          numberOfCards={3}
          gutter={20}
          leftChevron={<button>{'<'}</button>}
          rightChevron={<button>{'>'}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          <div style={{ height: 200, background: '#EEE' }}>{CardExample()}</div>
          <div style={{ height: 200, background: '#EEE' }}>{CardExample()}</div>
          <div style={{ height: 200, background: '#EEE' }}>{CardExample()}</div>
          <div style={{ height: 200, background: '#EEE' }}>{CardExample()}</div>
        </ItemsCarousel>
      </div>
    );
  };