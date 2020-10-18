import React from "react";
import CardPerson from '../CardPerson/CardPerson'

const ListPersons = ({data}) => {
  return (
    <ul>
      {data.map((item) => (
        <CardPerson key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default ListPersons;
