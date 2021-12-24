import React from "react";
import { Button, ButtonToolbar } from "react-bootstrap";

const Header = () => (
  <div>
    <div className="container">
      <h2>React + Redux Tutorial - Product Management</h2>
      <ButtonToolbar>
        <Button bsStyle="info" href="/">
          Home
        </Button>
        <Button bsStyle="info" href="/products">
          List
        </Button>
        <Button bsStyle="info" href="/product">
          Create
        </Button>
      </ButtonToolbar>
    </div>
    <hr />
  </div>
);

export default Header;
