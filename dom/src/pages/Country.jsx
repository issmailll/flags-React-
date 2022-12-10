import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Api } from "../api/Api";
import "./Countries/loader.scss";
const Country = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const { title } = useParams();
  const goBack = useNavigate();
  useEffect(() => {
    Api.getItem(title).then((res) => setData(res.data[0]));
    if (data) {
      setLoad(true);
    }
  }, [title]);
  if (!load) {
    return <div class="lds-hourglass"></div>;
  }
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
