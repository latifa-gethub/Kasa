import React from 'react';

function Card(props) {
  return (
    <div className="card-wrapper">
      <img src={props.image} className="img-card" />
      <h3 className="title-card">
        {props.title}
      </h3>
    </div>
  );
}
export default Card;
