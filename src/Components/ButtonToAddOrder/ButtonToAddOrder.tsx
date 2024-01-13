import React from "react";
import "./ButtonToAddOrder.css";

interface Props {
  name: string,
  price: number,
  style: string,
  addOrder: React.MouseEventHandler
}
const ButtonToAddOrder: React.FC<Props> = (
  {
    name,
    price,
    style,
    addOrder,
  }) => {
  return (
    <div onClick={addOrder} className={`card`}>
      <div className={`styleImage ${style}`}></div>
      <div className={`aboutCard`}>
        <h6 className={`cardHeadline`}>{name}</h6>
        <span className={`cardPrice`}>Price: ${price} KGS</span>
      </div>
    </div>
  );
};

export default ButtonToAddOrder;