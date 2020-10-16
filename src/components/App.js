import React, { useState, useEffect } from "react";
import Filter from "./Filter/Filter";
import ListPersons from "./ListPersons/ListPersons";
import getData from "../services/api";
import addId from "../services/addId";
import Loader from "react-loader-spinner";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getData()
      .then(({ data }) => setData(data))
      .catch((err) => setIsError(!!err))
      .finally(() => setIsLoading(false));
  }, []);

  addId(data);

  return (
    <div>
      <Filter />
      {isError && <p>Error please reload the page!</p>}
      {isLoading && (
        <Loader type="Oval" color="#00BFFF" height={300} width={300} />
      )}
      {data.length > 0 && <ListPersons data={data} />}
    </div>
  );
};

export default App;
