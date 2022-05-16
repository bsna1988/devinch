import React from "react";
import Pagination from "../Pagination/Pagination";
import Categories from "../Categories/Categories";
import SearchPost from "../SearchPost/SearchPost";
import "./Discussions.scss";
import API from "../../API";

export default class Discussions extends React.Component {
  state = {
    posts: [],
    searchText: "",
    category: "",
    offset: 0,
    limit: 1,
    totalCount: 0,
  };

  componentDidMount() {
    this.getPosts(0, 1);
  }

  getPosts = async (offset, limit) => {
    let res = await API.get(`post?offset=${offset}&limit=${limit}`);
    this.setState({
      posts: res.data.posts,
      offset: res.data.offset,
      limit: res.data.limit,
      totalCount: res.data.totalCount,
    });
  };

  searchPosts = async (searchText, offset = 0, limit = 10) => {
    console.log("Searching " + searchText);
    let res = await API.get(
      `post?search=${searchText}&offset=${offset}&limit=${limit}`
    );
    this.setState({
      posts: res.data.posts,
      searchText: searchText,
      category: "",
      offset: res.data.offset,
      limit: res.data.limit,
      totalCount: res.data.totalCount,
    });
  };

  selectCategory = async (category, offset = 0, limit = 10) => {
    console.log("Category " + category);
    let res = await API.get(
      `post?category=${category}&offset=${offset}&limit=${limit}`
    );
    this.setState({
      posts: res.data.posts,
      searchText: "",
      category: category,
      offset: res.data.offset,
      limit: res.data.limit,
      totalCount: res.data.totalCount,
    });
  };

  render() {
    return (
      <section class="blog_area section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mb-5 mb-lg-0">
              <div class="blog_left_sidebar">
                {this.state.posts.map((e, i) => {
                  return (
                    <article class="blog_item" key={e.id}>
                      <div class="blog_details">
                        <a class="d-inline-block" href="single-blog.html">
                          <h2>{e.title}</h2>
                        </a>
                        <p>{e.description}</p>
                        <ul class="blog-info-link">
                          <li>
                            <a href="#">
                              <i class="fa fa-user"></i> {e.author}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-comments"></i> {e.commentsCount}{" "}
                              Comments
                            </a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  );
                })}
                <Pagination
                  offset={this.state.offset}
                  limit={this.state.limit}
                  totalCount={this.state.totalCount}
                  load={this.getPosts}
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="blog_right_sidebar">
                <SearchPost search={this.searchPosts} />
                <Categories selectCategory={this.selectCategory} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
