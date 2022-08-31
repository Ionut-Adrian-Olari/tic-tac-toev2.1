/*import React from "react";
const Square = ({ value, onClick }) => {
  const style = value ? "squares ${value}" : "square";
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;*/
import React from "react";

const Square = ({ value, onClick }) => {
  const style = value ? "squares ${value}" : "square";
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
