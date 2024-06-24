import axios from "axios";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { Hasil, ListCategories, Menus } from "../component";
import { API_URL } from "../utils/constants";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoriYangdipilih: "Makanan",
      keranjangs: [],
    };
  }
  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.categoriYangdipilih)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
    // axios
    //   .get(API_URL + "keranjangs")
    //   .then((res) => {
    //     const keranjangs = res.data;
    //     this.setState({ keranjangs });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    this.getListKeranjang();
  }

  getListKeranjang = () => {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        console.log("cek");
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  changeCategory = (value) => {
    this.setState({
      categoriYangdipilih: value,
      menus: [],
    });
    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  masukKeranjang = (value) => {
    axios
      .get(API_URL + "keranjangs?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };

          axios
            .post(API_URL + "keranjangs", keranjang)
            .then((res) => {
              this.getListKeranjang();
              Swal.fire({
                icon: "success",
                title: "sukses ",
                text: "sukses masuk keranjang " + keranjang.product.nama,
                showConfirmButton: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };
          axios
            .put(API_URL + "keranjangs/" + res.data[0].id, keranjang)
            .then((res) => {
              this.getListKeranjang();
              Swal.fire({
                icon: "success",
                title: "sukses ",
                text: "sukses masuk keranjang " + keranjang.product.nama,
                showConfirmButton: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { menus, categoriYangdipilih, keranjangs } = this.state;
    return (
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories changeCategory={this.changeCategory} categoriYangdipilih={categoriYangdipilih} />
            <Col className="mt-2">
              <h4>
                <strong>Daftar Produk</strong>
              </h4>
              <hr />
              <Row className="overflow-auto menu">{menus && menus.map((menu) => <Menus key={menu.id} menu={menu} masukKeranjang={this.masukKeranjang} />)}</Row>
            </Col>
            <Hasil keranjangs={keranjangs} {...this.props} getListKeranjang={this.getListKeranjang} />
          </Row>
        </Container>
      </div>
    );
  }
}
