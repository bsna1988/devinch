import React from "react";
import Post from "../../components/Post/Post";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Preloader from "../../components/Preloader/Preloader";

class PostPage extends React.Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div className="App">
        <Preloader />
        <Header />
        <Post id={id} />
        <Footer />
      </div>
    );
  }
}
export default PostPage;
