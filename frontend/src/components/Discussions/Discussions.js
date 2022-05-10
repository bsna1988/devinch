import React from "react";
import Pagination from "../Pagination/Pagination";
import Categories from "../Categories/Categories";
import "./Discussions.scss";
import API from "../../API";

export default class Discussions extends React.Component {
  state = {
    posts: [],
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
                <aside class="single_sidebar_widget search_widget">
                  <form action="#">
                    <div class="form-group">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search Keyword"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Search Keyword'"
                        />
                        <div class="input-group-append">
                          <button class="btns" type="button">
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

                <Categories />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
