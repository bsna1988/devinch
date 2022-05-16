import React from "react";
import "./Categories.scss";
import API from "../../API";

export default class Categories extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    let res = await API.get("category");
    this.setState({ categories: res.data });
  };

  selectCategory = async (category) => {
    this.props.selectCategory(category);
  }

  render() {
    return (
      <aside class="single_sidebar_widget post_category_widget">
        <h4 class="widget_title">Category</h4>
        <ul class="list cat-list">
          {this.state.categories.map((e, i) => {
            return (
              <li key={e.title}>
                <a href="#" class="d-flex" onClick={ () => this.selectCategory(e.title)}>
                  <p>{e.title}</p>
                  <p>({e.count})</p>
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    );
  }
}
