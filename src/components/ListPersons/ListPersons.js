import React from "react";
import CardPerson from '../CardPerson/CardPerson'

const ListPersons = ({data}) => {
  return (
    <div>
      {data.map((item) => (
        <CardPerson key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ListPersons;
