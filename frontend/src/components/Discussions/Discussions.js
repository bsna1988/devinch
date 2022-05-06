import React from "react";
import "./Discussions.scss";
import API from "../../API";

export default class Discussions extends React.Component {
  state = {
    discussions: [],
  };

  componentDidMount() {
    this.getDiscussions();
  }

  getDiscussions = async () => {
    let res = await API.get("discussions");
    this.setState({ topics: res.data });
  };

  render() {
    return (
      <section class="blog_area section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mb-5 mb-lg-0">
              <div class="blog_left_sidebar">
                {this.state.discussions.map((e, i) => {
                  return (
                    <article class="blog_item">
                      <div class="blog_details">
                        <a class="d-inline-block" href="single-blog.html">
                          <h2>{e.title}</h2>
                        </a>
                        <p>
                         {e.description}
                        </p>
                        <ul class="blog-info-link">
                          <li>
                            <a href="#">
                              <i class="fa fa-user"></i> {e.tags}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-comments"></i> {e.commentsCount} Comments
                            </a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  );
                })}
                <nav class="blog-pagination justify-content-center d-flex">
                  <ul class="pagination">
                    <li class="page-item">
                      <a href="#" class="page-link" aria-label="Previous">
                        <i class="ti-angle-left"></i>
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">
                        1
                      </a>
                    </li>
                    <li class="page-item active">
                      <a href="#" class="page-link">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link" aria-label="Next">
                        <i class="ti-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
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

                <aside class="single_sidebar_widget post_category_widget">
                  <h4 class="widget_title">Category</h4>
                  <ul class="list cat-list">
                    <li>
                      <a href="#" class="d-flex">
                        <p>Technology</p>
                        <p>(37)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex">
                        <p>Life in Switzerland</p>
                        <p>(10)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex">
                        <p>Housing</p>
                        <p>(03)</p>
                      </a>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
