import axios from "axios";

const getData = () => {
  return axios.get(
    `https://venbest-test.herokuapp.com/
    `
  );
};
export default getData;
