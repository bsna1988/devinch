import React from "react";
import Discussions from "../../components/Discussions/Discussions";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Preloader from "../../components/Preloader/Preloader";

class DiscussionsPage extends React.Component {
  render() {
    return (
      <div className="App">
        <Preloader/>
        <Header />
        <Discussions />
        <Footer />
      </div>
    );
  }
}
export default DiscussionsPage;
