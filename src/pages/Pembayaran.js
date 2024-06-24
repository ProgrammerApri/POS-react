import React, { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Pembayaran extends Component {
  handlePrint = () => {
    window.print();
  };

  render() {
    return (
      <>
        <main>
          <Col md={5} xs={6} className="mb-8">
            {/* <Card> */}
            {/* Header */}
            <header className="text-center mb-5">
              <div>
                <h2>Invoicer</h2>
              </div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Button onClick={this.handlePrint} className="btn btn-print">
                      Cetak
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button className="btn btn-download">Unduh</Button>
                  </li>
                  <li className="list-inline-item">
                    <Button className="btn btn-send">Kirim</Button>
                  </li>
                </ul>
              </div>
            </header>
            {/* End of Header */}

            {/* {isi daftar pesanan} */}
            <section className="custom-margin">
              <h2>Soto ayam</h2>
              <p>Rp. 200.000</p>
            </section>
            <section className="custom-margin">
              <h2>Soto ayam</h2>
              <p>Rp. 200.000</p>
            </section>
            <section className="custom-margin">
              <h2>Soto ayam</h2>
              <p>Rp. 200.000</p>
            </section>
            <section className="custom-margin">
              <h2>Soto ayam</h2>
              <p>Rp. 200.000</p>
            </section>
            <section className="custom-margin">
              <h2>Soto ayam</h2>
              <p>Rp. 200.000</p>
            </section>

            {/* {end isi pesanan} */}
          </Col>
        </main>
      </>
    );
  }
}
