import React from "react";
import "./SearchPost.scss";

export default class SearchPost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {searchText: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchText: event.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.search(this.state.searchText)
  }

  render() {
    return (
      <aside class="single_sidebar_widget search_widget">
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <div class="input-group mb-3">
              <input
                type="text"
                id="searchField"
                value={this.state.searchField}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Search Keyword"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Search Keyword'"
              />
              <div class="input-group-append">
                <button class="btns" type="button" onClick={this.handleSubmit}>
                  <i class="ti-search"></i>
                </button>
              </div>
            </div>
          </div>
          <button
            class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
            type="submit"
          >
            Search
          </button>
        </form>
      </aside>
    );
  }
}
