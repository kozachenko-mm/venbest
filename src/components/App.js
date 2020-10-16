import React, { useState, useEffect } from "react";
import getData from "../services/api";
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
  console.log(data);
  return (
    <div>
      {isLoading && (
        <Loader type="Oval" color="#00BFFF" height={300} width={300} />
      )}
      {isError && <div>Error please reload the page!</div>}
    </div>
  );
};

export default App;
