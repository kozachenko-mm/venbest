import React from "react";
import styles from "./CardPerson.module.css";

const CardPerson = ({ data }) => {
  return (
    <li className={styles.listItem}>
      <p className={styles.name}>
        {data.name} {data.lastname}
      </p>
      <p className={styles.age}>
        вік: <span>{data.age}</span>{" "}
      </p>
      <p className={styles.sex}>
        стать: <span>{data.sex === "m" ? "чоловіча" : "жіноча"}</span>{" "}
      </p>
    </li>
  );
};

export default CardPerson;
