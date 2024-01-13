import {useState} from "react";
import "./App.css";
import {amountOfOrders, Order} from "./types";

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
    {name: "Hamburger", price: 80, class: ""},
    {name: "Coffee", price: 70, class: ""},
    {name: "Cheeseburger", price: 90, class: ""},
    {name: "Tea", price: 50, class: ""},
    {name: "Fries", price: 45, class: ""},
    {name: "Cola", price: 40, class: ""},
  ];

  const changeState = (name:string) => {
    setAmountOfOrders((prevState) => prevState.map((items) => {
      if(items.name === name) {
        return {
          ...items,
          count: items.count + 1,
        }
      }

      return items
    }))
  }

  const removeOrder = (name:string) => {
    setAmountOfOrders((prevState) => prevState.map((items) => {
      if(items.name === name) {
        return {
          ...items,
          count: items.count - 1,
        }
      }

      return items
    }))
  }

  return (
    <div className={"container"}>
      <div className={"OrderDetails"}>

      </div>

      <div className={"AddItems"}>

      </div>
    </div>
  )

}

export default App;
