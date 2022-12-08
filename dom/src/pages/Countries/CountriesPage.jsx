import "./countries.scss";
import { Api } from "../../api/Api";
import React, { useState, useEffect } from "react";
import Card from "../../UI/Card";

const CountriesPage = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    Api.getAll().then((result) => {
      setData(result.data);
      if (result.data) {
        setLoad(true);
      }
    });
  }, []);
  console.log(data);
  if (!load) {
    return <h4>LOADING . . .</h4>;
  }
  return (
    <>
      <header className="countries">
        <div className="container countries__container">
          <h2 className="countries__title">Where in the world?</h2>
          <div className="countries__input-wrapper">
            <input
              className="searchInput"
              placeholder="Search for a country…"
              type="search"
            />
            <select className="countries-form">
              <option selected disabled>
                Filter by Region
              </option>
              <option value="">Africa</option>
              <option value="">America</option>
              <option value="">Asia</option>
              <option value="">Europe</option>
            </select>
          </div>
          <ul className="countries__card-list">
            {data.length > 0
              ? data.map((el) => {
                  return <Card data={el}/>;
                })
              : "data is empty"}
          </ul>
        </div>
      </header>
    </>
  );
};

export default CountriesPage;
