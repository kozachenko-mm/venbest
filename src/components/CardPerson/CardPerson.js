import React from "react";

const CardPerson = ({ data }) => {
  return (
    <div>
      <p>
        {data.name} {data.lastname}
      </p>
      <p>вік: {data.age}</p>
      <p>стать: {data.sex === "m" ? "чоловіча" : "жіноча"}</p> 
    </div>
  );
};

export default CardPerson;
