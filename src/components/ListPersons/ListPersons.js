import React from "react";
import CardPerson from '../CardPerson/CardPerson'
import styles from './ListPerson.module.css'

const ListPersons = ({data}) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <CardPerson key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default ListPersons;
