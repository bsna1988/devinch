import React from "react";
import "./Pagination.scss";

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let pageCount = Math.ceil(nextProps.totalCount / nextProps.limit);
    let currentPage = Math.trunc(nextProps.offset / nextProps.limit) + 1;
    let pages = Array(pageCount)
      .fill()
      .map((_, idx) => idx + 1);
    console.log(pageCount + " " + currentPage + " " + pages);
    return {
      pages: pages,
      currentPage: currentPage,
    };
  }

  prev() {
    console.log("Prev");
  }

  next() {
    this.props.load(
      Math.min(this.state.pageCount, this.state.currentPage + 1) *
        this.props.limit,
      this.props.limit
    );
  }

  page(n) {
    this.props.load((n - 1) * this.props.limit, this.props.limit);
  }

  render() {
    return (
      <nav class="blog-pagination justify-content-center d-flex">
        <ul class="pagination">
          <li class="page-item">
            <a
              href="#"
              class="page-link"
              aria-label="Previous"
              onClick={() => this.prev()}
            >
              <i class="ti-angle-left"></i>
            </a>
          </li>
          {this.state.pages.map((e, i) => {
            if (e == this.state.currentPage) {
              return (
                <li class="page-item active">
                  <a href="#" class="page-link" onClick={() => this.page(e)}>
                    {e}
                  </a>
                </li>
              );
            } else {
              return (
                <li class="page-item">
                  <a href="#" class="page-link" onClick={() => this.page(e)}>
                    {e}
                  </a>
                </li>
              );
            }
          })}
          <li class="page-item">
            <a
              href="#"
              class="page-link"
              aria-label="Next"
              onClick={() => this.next()}
            >
              <i class="ti-angle-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
