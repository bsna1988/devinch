import React, { Component } from "react";
import Preloader from "../../components/Preloader/Preloader";
import Header from "../../components/Header/Header";
import WhatsNew from "../../components/WhatsNew/WhatsNew";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Preloader />
        <Header />
        <WhatsNew />
        <Footer />
      </div>
    );
  }
}
export default Home;
