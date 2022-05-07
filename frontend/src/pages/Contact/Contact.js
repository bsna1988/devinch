import React, { Component } from "react";
import Preloader from "../../components/Preloader/Preloader";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

class ContactPage extends Component {
  render() {
    return (
      <div className="App">
        <Preloader/>
        <Header />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default ContactPage;
