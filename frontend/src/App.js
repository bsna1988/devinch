import React, { Component } from "react";
import Header from "./components/Header/Header";
import WhatsNew from "./components/WhatsNew/WhatsNew";
import Footer from "./components/Footer/Footer";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <WhatsNew />
        <Footer />
      </div>
    );
  }
}
export default App;
