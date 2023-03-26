import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Player from "../Player/Player";
import "./Players.css";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  // ============== cart State ===========

  const [cart, setCart] = useState([]);

  // ============== handle click =============
  const btn = (player) => {
    if (cart.includes(player)) {
      alert("Already Selected");
    } else {
      const newCart = [...cart, player];
      setCart(newCart);
    }
  };

  // ============ removeItem ============

  const removeItem = (id) => {
    const newItem = cart.filter((item) => item.id !== id);
    const newCart = [...newItem];
    setCart(newCart);
  };

  return (
    <div className="d-flex">
      <div className="container">
        {players.map((player) => (
          <Player player={player} key={player.id} btnClick={btn}></Player>
        ))}
      </div>
      <div className="order">
        <Cart cart={cart} removeBtn={removeItem}></Cart>
      </div>
    </div>
  );
};

export default Players;
