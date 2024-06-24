import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { formatNumber } from "../utils/utils";

const Menus = ({ menu, masukKeranjang }) => {
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow" onClick={() => masukKeranjang(menu)}>
        <Card.Img variant="top" src={"assets/images/" + menu.category.nama.toLowerCase() + "/" + menu.gambar} />
        <Card.Body>
          <Card.Title>
            {menu.nama} <strong>({menu.kode})</strong>
          </Card.Title>
          <Row>
            <Col>
              <Card.Text>Rp. {formatNumber(menu.harga)}</Card.Text>
            </Col>
            <Col>
              <Card.Text>Stock : 12</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
