import React, { Component } from 'react';
import '../css/showExhibition.css';
import Screen from '../components/Screen';

const exhibit = [
    {
        id: 1, source: require("../resources/exhibit/exhibit (1).jpg"),
        right: false, img: null
    },
    {
        id: 2, source: require('../resources/exhibit/exhibit (2).jpg'),
        right: false, img: null
    },
    {
        id: 3, source: require('../resources/exhibit/exhibit (3).jpg'),
        right: true,
        img: require('../resources/vangogh/vangogh (1).jpg'), 
    },
    {
        id: 4, source: require('../resources/exhibit/exhibit (4).jpg'),
        right: true,
        img: require('../resources/vangogh/vangogh (2).jpg')
    },
    {
        id: 5, source: require('../resources/exhibit/exhibit (5).jpg'),
        right: true,
        img: require('../resources/vangogh/vangogh (3).jpg')
    },
    {
        id: 6, source: require('../resources/exhibit/exhibit (6).jpg'),
        right: true,
        img: require('../resources/vangogh/vangogh (4).jpg')
    },
    {
        id: 7, source: require('../resources/exhibit/exhibit (7).jpg'),
        right: true,
        img: require('../resources/vangogh/vangogh (5).jpg')
    },
    {
        id: 8, source: require('../resources/exhibit/exhibit (8).jpg'),
        right: false, img: null
    },
    {
        id: 9, source: require('../resources/exhibit/exhibit (9).jpg'),
        right: false, img: null
    },
    {
        id: 10, source: require('../resources/exhibit/exhibit (10).jpg'),
        right: false, img: null
    },
    {
        id: 11, source: require('../resources/exhibit/exhibit (11).jpg'),
        right: false, img: null
    },
    {
        id: 12, source: require('../resources/exhibit/exhibit (12).jpg'),
        right: true,
        img: require('../resources/vangogh/vangogh (6).jpg')
    },
    {
        id: 13, source: require('../resources/exhibit/exhibit (13).jpg'),
        right: true, 
        img: require('../resources/vangogh/vangogh (7).jpg')
    },
    {
        id: 14, source: require('../resources/exhibit/exhibit (14).jpg'),
        right: false, img: null
    },
    {
        id: 15, source: require('../resources/exhibit/exhibit (15).jpg'),
        right: false, img: null
    },
    {
        id: 16, source: require('../resources/exhibit/exhibit (16).jpg'),
        right: false, img: null
    },
    {
        id: 17, source: require('../resources/exhibit/exhibit (17).jpg'),
        right: true,
        img: require('../resources/andy/andy (8).jpg')
    },
    {
        id: 18, source: require('../resources/exhibit/exhibit (18).jpg'),
        right: true, 
        img: require('../resources/andy/andy (6).jpg')
    },
    {
        id: 19, source: require('../resources/exhibit/exhibit (19).jpg'),
        right: false, img: null
    },
    {
        id: 20, source: require('../resources/exhibit/exhibit (20).jpg'),
        right: false, img: null
    },
    {
        id: 21, source: require('../resources/exhibit/exhibit (21).jpg'),
        right: false, img: null
    },
    {
        id: 22, source: require('../resources/exhibit/exhibit (22).jpg'),
        right: true, 
        img: require('../resources/andy/andy (5).jpg')
    },
    {
        id: 23, source: require('../resources/exhibit/exhibit (23).jpg'),
        right: true, 
        img: require('../resources/andy/andy (4).jpg')
    },
    {
        id: 24, source: require('../resources/exhibit/exhibit (24).jpg'),
        right: true,
        img: require('../resources/andy/andy (3).jpg')
    },
    {
        id: 25, source: require('../resources/exhibit/exhibit (25).jpg'),
        right: true,
        img: require('../resources/andy/andy (2).jpg')
    },
    {
        id: 26, source: require('../resources/exhibit/exhibit (26).jpg'),
        right: true,
        img: require('../resources/andy/andy (1).jpg')
    },
    {
        id: 27, source: require('../resources/exhibit/exhibit (27).jpg'),
        right: false, img: null
    },
]


class ShowExhibition extends Component {
    render() {
        return (
            <div className="show_exhibition">
                <Screen key={exhibit.id} theme={exhibit} />
            </div>
        );
    }
}

export default ShowExhibition;