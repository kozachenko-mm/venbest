import React, { useState, useEffect } from "react";
import Filter from "./Filter/Filter";
import ListPersons from "./ListPersons/ListPersons";
import getData from "../services/api";
import addId from "../services/addId";
import changeData from "../services/changeData";
import Loader from "react-loader-spinner";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [filtered, setFiltered] = useState(data);

  useEffect(() => {
    getData()
      .then(({ data }) => setData(data))
      .catch((err) => setIsError(!!err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setFiltered(data);
    addId(data);
    changeData(data);
  }, [data]);
  // /////////////////////////////////////
  const handleFilter = (form) => {
    let currentList = data,
      newList = [];

    newList = currentList.filter((el) =>
      el.name.toLowerCase().indexOf(form.name.trim().toLowerCase()) !== -1
        ? el.name
        : null
    );
    setFiltered(newList);
    currentList = newList;

    newList = currentList.filter((el) =>
      el.lastname.toLowerCase().indexOf(form.lastname.trim().toLowerCase()) !==
      -1
        ? el.lastname
        : null
    );
    setFiltered(newList);
    currentList = newList;

    newList = currentList.filter((el) =>
      el.age.indexOf(form.age.trim()) !== -1 ? el.age : null
    );
    setFiltered(newList);
    currentList = newList;

    newList = currentList.filter((el) => (form.man ? el.sex === "m" : el));
    setFiltered(newList);
    currentList = newList;

    newList = currentList.filter((el) => (form.fem ? el.sex === "f" : el));
    setFiltered(newList);
    currentList = newList;
  };

  return (
    <div>
      <Filter filter={handleFilter} />
      {isError && <p>Error please reload the page!</p>}
      {isLoading && (
        <Loader type="Oval" color="#00BFFF" height={300} width={300} />
      )}
      {data.length > 0 && <ListPersons data={filtered} />}
      {!filtered.length && <p>Немає збігів!</p>}
    </div>
  );
};

export default App;
