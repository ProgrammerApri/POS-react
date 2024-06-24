import axios from "axios";
import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import { API_URL } from "../utils/constants";
import { faUtensils, faCoffee, faCheese } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ nama }) => {
  if (nama === "Makanan") return <FontAwesomeIcon icon={faUtensils} className="icon-margin" />;
  if (nama === "Minuman") return <FontAwesomeIcon icon={faCoffee} className="icon-margin" />;
  if (nama === "Cemilan") return <FontAwesomeIcon icon={faCheese} className="icon-margin" />;
};

export default class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { categories } = this.state;
    const { changeCategory, categoriYangdipilih } = this.props;
    return (
      <Col md={2} className="mt-2">
        <h4>
          <strong>List Kategori</strong>
        </h4>
        <ListGroup className="mt-3">
          {categories &&
            categories.map((category) => (
              <ListGroup.Item key={category.id} onClick={() => changeCategory(category.nama)} className={categoriYangdipilih === category.nama ? "category-aktif" : ""} style={{ cursor: "pointer" }}>
                <h5>
                  <Icon nama={category.nama} />
                  {category.nama}
                </h5>
              </ListGroup.Item>
            ))}
        </ListGroup>
        <hr />
      </Col>
    );
  }
}
