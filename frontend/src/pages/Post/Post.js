import React from "react";
import Post from "../../components/Post/Post";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Preloader from "../../components/Preloader/Preloader";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Preloader />
        <Header />
        <Post id={this.props.params.id} />
        <Footer />
      </div>
    );
  }
}
export default PostPage;
