import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Player.css";

const Player = ({ player, btnClick }) => {
  const { img, name, team, bat, role, info } = player;
  return (
    <Card>
      <div className="img-area">
        <Card.Img className="img" variant="top" src={img} />
      </div>
      <Card.Body>
        <Card.Title className="mb-3">{name}</Card.Title>
        <Card.Title className="mb-3">Team: {team}</Card.Title>

        <Card.Text>{info}</Card.Text>
      </Card.Body>
      <div className="skils mx-4">
        <h5>
          Role: <span className="text-danger"> {role} </span>
        </h5>
        <h5>
          Bat: <span className="text-danger"> {bat} </span>
        </h5>
      </div>

      <Button className="p-2 mt-2 fs-5" onClick={() => btnClick(player)}>
        Select
      </Button>
    </Card>
  );
};

export default Player;
