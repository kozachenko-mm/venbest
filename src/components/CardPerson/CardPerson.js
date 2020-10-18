import React from "react";

const CardPerson = ({ data }) => {
  return (
    <li>
      <p>
        {data.name} {data.lastname}
      </p>
      <p>вік: {data.age}</p>
      <p>стать: {data.sex === "m" ? "чоловіча" : "жіноча"}</p> 
    </li>
  );
};

export default CardPerson;
