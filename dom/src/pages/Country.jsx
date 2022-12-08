import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Api } from "../api/Api";

const Country = () => {
  const [data, setData] = useState([]);
  const { abc } = useParams();
  const goBack = useNavigate();
  useEffect(() => {
    Api.getItem(abc).then((res) => setData(res.data[0]));
  }, [abc]);
  const { flag, capital, population, region, name } = data;
  console.log(data);
  return (
    <>
      <button
        className="country__back-button"
        onClick={() => {
          goBack(-1);
        }}
      >
        Back
      </button>
      <div>
        <img width="264" height="164" src={flag} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>population: {population}</p>
          <p>capital: {capital}</p>
          <p>region: {region}</p>
        </div>
      </div>
    </>
  );
};

export default Country;
