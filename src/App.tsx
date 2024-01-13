import React, {useState} from "react";
import "./App.css";
import {amountOfOrders, Order} from "./types";
import ButtonToAddOrder from "./Components/ButtonToAddOrder/ButtonToAddOrder";

function App() {
  const [amountOfOrders, setAmountOfOrders] = useState<amountOfOrders[]>([
    {name: "Hamburger", count: 0},
    {name: "Coffee", count: 0},
    {name: "Cheeseburger", count: 0},
    {name: "Tea", count: 0},
    {name: "Fries", count: 0},
    {name: "Cola", count: 0},
  ]);

  const orderOptions: Order[] = [
    {name: "Hamburger", price: 80, style: "styleSpoon"},
    {name: "Coffee", price: 70, style: "styleCup"},
    {name: "Cheeseburger", price: 90, style: "styleSpoon"},
    {name: "Tea", price: 50, style: "styleCup"},
    {name: "Fries", price: 45, style: "styleSpoon"},
    {name: "Cola", price: 40, style: "styleDrink"},
  ];

  const addOrder = (name: string) => {
    return setAmountOfOrders((prevState) => prevState.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          count: item.count + 1,
        };
      }

      return item;
    }));
  };

  const removeOrder = (name: string) => {
    setAmountOfOrders((prevState) => prevState.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          count: item.count - 1,
        };
      }

      return item;
    }));
  };

  const totalCost = [{message: "Please  add some items!", sum: 0}];

  const calculator: React.FC<amountOfOrders> = (item) => {
    const sum = orderOptions.reduce((acc, order) => {
      if (item.name === order.name) {
        return item.count * order.price;
      } else {
        return acc;
      }
    }, 0);

    totalCost[0].sum += sum;

    return sum;
  };

  return (
    <div className={"container"}>
      <div className={"orderDetails"}>
        {amountOfOrders.map((item) => {
          if (item.count > 0) {
            return (
              <div className={"orderLine"}>
                <h6 className={"orderLineHeadline"}>{item.name}</h6>
                <span className={"orderLinePrice"}>x{item.count}  {calculator(item)} KGS</span>
                <button type={"button"} onClick={() => removeOrder(item.name)} className={"buttonRemove"}></button>
              </div>
            )
          }
        })}
        <h1 className={"totalPrice"}>Total price {totalCost.map((value) => {
          if (value.sum > 0) {
            return value.sum
          } else {
            return value.message
          }
        })} KGS</h1>
      </div>

      <div className={"addItems"}>
        {orderOptions.map((item, index) => {
          return (
            <ButtonToAddOrder
              key={`ButtonToAddOrder${index}`}
              name={item.name}
              price={item.price}
              style={item.style}
              addOrder={() => addOrder(item.name)}
            />
          );
        })}
      </div>
    </div>
  );

}

export default App;
