import React from "react";
import PropTypes from "prop-types";
import CardPerson from "../CardPerson/CardPerson";
import styles from "./ListPerson.module.css";

const ListPersons = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <CardPerson key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default ListPersons;

ListPersons.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
