import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Products extends Component {
  render() {
    return (
      <div className="mt-4 text-center">
        <Image src="assets/images/mainten.png" width="500" />
        <h2>Sedang dalam pengembangan</h2>
        <h4>Mohon maaf atas ketidak nyamanannya...</h4>
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </div>
    );
  }
}
