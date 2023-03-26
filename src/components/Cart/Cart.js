import React from "react";
import { Button } from "react-bootstrap";
import Order from "../Order/Order";
import "./Cart.css";

const Cart = ({ cart, removeBtn }) => {
  let total = 0;
  for (const player of cart) {
    total = total + player.salary;
  }

  return (
    <div className="cart">
      <div className="order-title">
        <h5>Selected Players: {cart.length}</h5>
      </div>
      <div className="orders">
        {cart.map((player) => (
          <Order
            player={player}
            removeItem={removeBtn}
            total={total}
            key={player.id}
          ></Order>
        ))}
      </div>
      <div className="total">
        <h4>Total Budget: ${total}</h4>
        <Button variant="success">Update Team</Button>
      </div>
    </div>
  );
};

export default Cart;
