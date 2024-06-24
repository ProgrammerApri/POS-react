import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { API_URL } from "../utils/constants";
import { formatNumber } from "../utils/utils";

function TotalBayar({ keranjangs }) {
  const navigate = useNavigate();

  const submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: keranjangs,
    };
    axios
      .post(API_URL + "pesanans", pesanan)
      .then((res) => {
        navigate("/sukses");
      })
      .catch((error) => {
        console.error("There was an error submitting the order:", error);
      });
  };

  const totalBayar = keranjangs.reduce((result, item) => result + item.total_harga, 0);

  return (
    <>
      {/* web */}
      <div className="fixed-bottom d-none d-md-block">
        <Row>
          <Col className="mt-3 offset-9 px-4">
            <h4 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Total Harga :</span>
              <strong style={{ marginLeft: "15px" }}>Rp. {formatNumber(totalBayar)}</strong>
            </h4>
            <Button variant="primary" className="mb-2 mt-4" size="lg" style={{ width: "100%" }} onClick={() => submitTotalBayar(totalBayar)}>
              <FontAwesomeIcon icon={faShoppingCart} /> <strong>Bayar</strong>
            </Button>
          </Col>
        </Row>
      </div>

      {/* mobile */}
      <div className="d-sm-block d-md-none">
        <Row>
          <Col className="mt-3 offset-9 px-4">
            <h4 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Total Harga :</span>
              <strong style={{ marginLeft: "15px" }}>Rp. {formatNumber(totalBayar)}</strong>
            </h4>
            <Button variant="primary" className="mb-2 mt-4" size="lg" style={{ width: "100%" }} onClick={() => submitTotalBayar(totalBayar)}>
              <FontAwesomeIcon icon={faShoppingCart} /> <strong>Bayar</strong>
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default TotalBayar;
