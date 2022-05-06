import React from "react";
import "./Preloader.scss";
import logoUrl from "../../assets/img/logo/logo.png";
const Preloader = () => (
  <div id="preloader-active">
    <div class="preloader d-flex align-items-center justify-content-center">
      <div class="preloader-inner position-relative">
        <div class="preloader-circle"></div>
        <div class="preloader-img pere-text">
          <img src={logoUrl} />
        </div>
      </div>
    </div>
  </div>
);
export default Preloader;
