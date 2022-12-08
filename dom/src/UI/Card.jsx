import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data: { flag, population, name, capital, region } }) => {
  return (
    <>
      <Link to={`/countries/${name}`}>
        <li className="countries__card-item">
          <img width="267" height="163" src={flag} alt={name} />
          <div className="countries__item-text-wrapper">
            <h2>{name}</h2>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
          </div>
        </li>
      </Link>
    </>
  );
};

export default Card;
