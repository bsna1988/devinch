import React from "react";
import "./WhatsNew.scss";
import FollowUs from "../FollowUs/FollowUs";
import API from "../../API";

export default class WhatsNew extends React.Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    this.getTopics();
  }

  getTopics = async () => {
    let res = await API.get("topic");
    this.setState({ topics: res.data });
  };

  render() {
    return (
      <main>
        <section class="whats-news-area pt-50 pb-20">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="row d-flex justify-content-between">
                  <div class="col-lg-3 col-md-3">
                    <div class="section-tittle mb-30">
                      <h3>Whats New</h3>
                    </div>
                  </div>
                  <div class="col-lg-9 col-md-9">
                    <div class="properties__button">
                      <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                          <a
                            class="nav-item nav-link active"
                            id="nav-home-tab"
                            data-toggle="tab"
                            href="#nav-home"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                          >
                            All
                          </a>
                          <a
                            class="nav-item nav-link"
                            id="nav-profile-tab"
                            data-toggle="tab"
                            href="#nav-profile"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                          >
                            Lifestyle
                          </a>
                          <a
                            class="nav-item nav-link"
                            id="nav-contact-tab"
                            data-toggle="tab"
                            href="#nav-contact"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="false"
                          >
                            Travel
                          </a>
                          <a
                            class="nav-item nav-link"
                            id="nav-last-tab"
                            data-toggle="tab"
                            href="#nav-last"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="false"
                          >
                            Fashion
                          </a>
                          <a
                            class="nav-item nav-link"
                            id="nav-Sports"
                            data-toggle="tab"
                            href="#nav-nav-Sport"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="false"
                          >
                            Sports
                          </a>
                          <a
                            class="nav-item nav-link"
                            id="nav-technology"
                            data-toggle="tab"
                            href="#nav-techno"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="false"
                          >
                            Technology
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="tab-content" id="nav-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <div class="whats-news-caption">
                          <div class="row">
                            {this.state.topics.map((e, i) => {
                              return (
                                <div class="col-lg-6 col-md-6">
                                  <div class="single-what-news mb-100">
                                    <div class="what-img">
                                      <img src={e.image} />
                                    </div>
                                    <div class="what-cap">
                                      <span class="color1">{e.title}</span>
                                      <h4>
                                        <a href="#">{e.description}</a>
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <FollowUs />
                <div class="news-poster d-none d-lg-block">
                  <img src="assets/img/news/news_card.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
