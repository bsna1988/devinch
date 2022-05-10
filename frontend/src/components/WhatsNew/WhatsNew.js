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
