import React from "react";
import PropTypes, { func } from "prop-types";
import '../css/Exhibition.css'

function Exhibition({id, title, place, address, date, time, price, poster}){
    return <div className="exhibition">
        <img src={poster} alt={title} title={title}/>
        <div className="exhibition_data">
            <h3 className="exhibition_title">{title}</h3>
            <h5 className="exhibition_date">{date}</h5>
            {/* <ul className="exhibition_genres">{genres.map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}</ul> */}
            <p className="exhibition_place">{place}</p>
        </div>
    </div>
}

Exhibition.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
    // genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Exhibition;