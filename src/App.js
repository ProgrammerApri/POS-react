import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavbarComponent } from "./component";
import { Dashboard, Home, Kasir, Pembayaran, Products, Sukses } from "./pages";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Routes>
            <Route path="/" Component={Home} exact />
            <Route path="/pembayaran" Component={Pembayaran} exact />
            <Route path="/sukses" Component={Sukses} exact />
            <Route path="/dashboard" Component={Dashboard} exact />
            <Route path="/kasir" Component={Kasir} exact />
            <Route path="/Products" Component={Products} exact />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
