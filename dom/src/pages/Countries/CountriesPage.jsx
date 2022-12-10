import "./countries.scss";
import "./loader.scss"
import { Api } from "../../api/Api";
import React, { useState, useEffect } from "react";
import Card from "../../UI/Card";

const CountriesPage = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    Api.getAll().then((result) => {
      setData(result.data);
      if (result.data) {
        setLoad(true);
        result.data.forEach((el) => {
          if (!category.includes(el.region)) {
            category.push(el.region);
            setCategory(category);
          }
        });
      }
    });
  }, []);
  const searchByName = (text) => {
    Api.searchByName(text)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const filterCountry = (country) => {
    Api.filterCountry(country).then((res) => setData(res.data));
  };
  if (!load) {
    return <div class="lds-hourglass">wait . . .</div>;
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
              value={search}
              onChange={(e) => {
                searchByName(e.target.value);
                setSearch(e.target.value);
              }}
            />
            <select
              className="countries-form"
              onChange={(e) => {
                filterCountry(e.target.value);
              }}
            >
              <option selected disabled>
                Filter by Region
              </option>
              {category.sort().map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <ul className="countries__card-list">
            {data.length > 0
              ? data.map((el) => {
                  return <Card data={el} key={el.name} />;
                })
              : "data is empty"}
          </ul>
        </div>
      </header>
    </>
  );
};

export default CountriesPage;
