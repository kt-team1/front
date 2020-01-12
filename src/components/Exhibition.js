import React from "react";
import PropTypes, { func } from "prop-types";
// import '../css/Exhibition.css'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const numberingWithIndex = (index) => {
    switch (index) {
        case 0:
            return <h1>A</h1>
            break;
        case 1:
            return <h1>B</h1>
            break;
        case 2:
            return <h1>C</h1>
            break;
        case 3:
            return <h1>D</h1>
            break;
        case 4:
            return <h1>E</h1>
            break;
        default:
            return <h1>F</h1>
            break;
    }
}

function Exhibition({id, title, place, address, date, time, price, poster, index}){
    console.log(index);
    return (
        <Card style={{height:'210px'}}>
            <Card.Content>
                <Image
                floated='right'
                size='tiny'
                src={poster}
                alt={title}
                title={title}
                />
                <Card.Header>{numberingWithIndex(index)}</Card.Header>
                <Card.Meta><strong>{title}</strong></Card.Meta>
                <Card.Description>
                {place}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Card.Meta>{date}</Card.Meta>
            </Card.Content>
        </Card>
    )
}

Exhibition.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    index: PropTypes.number
    // genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Exhibition;