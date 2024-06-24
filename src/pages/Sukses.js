import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { API_URL } from "../utils/constants";
import axios from "axios";

export default class Sukses extends Component {
  componentDidMount() {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        keranjangs.map(function (item) {
          return axios
            .delete(API_URL + "keranjangs/" + item.id)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="mt-4 text-center">
        <Image src="assets/images/sukses.svg" width="500" />
        <h2>Sukses Pesan</h2>
        <p>Terimakasih sudah memesan di kami</p>
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </div>
    );
  }
}
