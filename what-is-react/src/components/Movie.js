import React from "react";

const Movie = (props) => {
    return ( 
        <div className="wrapper-item">
            <p>{props.data.title} ({props.data.year})</p>
            <p>{props.data.description}</p>
            <p>{props.data.votes}</p>
        </div>
     );
}
 
export default Movie;