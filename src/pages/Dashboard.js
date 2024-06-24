import axios from "axios";
import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import { faUtensils, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { API_URL } from "../utils/constants";

const Icon = ({ nama }) => {
  if (nama === "Dashboard") return <FontAwesomeIcon icon={faUtensils} className="icon-margin" />;
  if (nama === "Product") return <FontAwesomeIcon icon={faCoffee} className="icon-margin" />;
  return null;
};

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuDashboards: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "menuDashboards")
      .then((res) => {
        const menuDashboards = res.data;
        this.setState({ menuDashboards });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { menuDashboards } = this.state;
    const { changeDashbor, dashborYangdipilih } = this.props;

    return (
      <Col md={2} className="mt-2">
        <h4>
          <strong>List Menu</strong>
        </h4>
        <ListGroup className="mt-3">
          {menuDashboards &&
            menuDashboards.map((dashbor) => (
              <ListGroup.Item key={dashbor.id} className={dashborYangdipilih === dashbor.nama ? "category-aktif" : ""} style={{ cursor: "pointer" }} onClick={() => changeDashbor(dashbor.nama)}>
                <h5>
                  <Icon nama={dashbor.nama} />
                  {dashbor.nama}
                </h5>
              </ListGroup.Item>
            ))}
        </ListGroup>
        <hr />
      </Col>
    );
  }
}
