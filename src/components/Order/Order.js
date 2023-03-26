import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import "./Order.css";

const Order = ({ player, removeItem }) => {
  const { id, name, img, salary } = player;
  return (
    <div className="order-summary">
      <div className="details">
        <img src={img} alt={name} />
        <div>
          <p>{name}</p>
          <h6>Salary: ${salary}</h6>
        </div>
      </div>
      <div>
        <Button
          onClick={() => removeItem(id)}
          variant="success"
          className="fs-6"
        >
          Remove <FontAwesomeIcon className="icon" icon={faTrash} />
        </Button>
      </div>
    </div>
  );
};

export default Order;
