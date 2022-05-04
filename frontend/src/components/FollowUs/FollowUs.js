import React from "react";
import "./FollowUs.scss";
const FollowUs = () => (
  <div>
    <div class="section-tittle mb-40">
      <h3>Follow Us</h3>
    </div>
    <div class="single-follow mb-45">
      <div class="single-box">
        <div class="follow-us d-flex align-items-center">
          <div class="follow-social">
            <a href="#">
              <img src="assets/img/news/icon-tw.png" alt="" />
            </a>
          </div>
          <div class="follow-count">
            <span>8,045</span>
            <p>Fans</p>
          </div>
        </div>
        <div class="follow-us d-flex align-items-center">
          <div class="follow-social">
            <a href="#">
              <img src="assets/img/news/icon-ins.png" alt="" />
            </a>
          </div>
          <div class="follow-count">
            <span>8,045</span>
            <p>Fans</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default FollowUs;
