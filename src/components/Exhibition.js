import React from "react";
import PropTypes, { func } from "prop-types";
// import '../css/exhibition.css'
import { Card, Image} from 'semantic-ui-react'

import { Link, Router, Route, browserHistory, IndexRoute } from 'react-router-dom';


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

function Exhibition({id, title, place, address, date, time, price, poster, index, x, y}){
    return (
        <Card class='exhibiton_card' style={{color: 'black', height:'100%', 
        width: '100%'}}>
            <div style={{height: '100%', width: '100%', display: 'flex'}}>

                <img src={poster} alt={title} title={title} style={{width: '50%', height: '100%', objectFit: 'cover'}}/>
                <div className="exhibition_data" style={{width: '50%', height: '100%', padding: '20px'}}>
                    <div style={{height: '50%'}}>
                    <Link to={{
                        pathname: "/exhibition/detail",
                        data: "data" // your data array of objects
                    }}><h2 className="exhibition_title" 
                     style={{fontSize: '1vw'}}><strong>{title}</strong></h2></Link>
                    </div>
                    <div style={{height: '30%', position: 'relative'}}>
                     <h3 className="exhibition_year" 
                     style={{fontSize: '0.8vw', position: "absolute", bottom: '0'}}>{place}</h3>
                    </div>
                    <div style={{height: '20%', position: 'relative'}}>
                      <p className="exhibition_summary" 
                      style={{fontSize: '0.7vw', position: "absolute", bottom: '0'}}>{date}</p>
                    </div>
                </div>
            </div>                
        </Card>
    )
}

// Exhibition.proptypes = {
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     place: PropTypes.string.isRequired,
//     address: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     time: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired,
//     index: PropTypes.number
// };

export default Exhibition;