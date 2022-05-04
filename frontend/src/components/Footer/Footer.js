import React from "react";
import "./Footer.scss";
const Footer = () => (
  <footer>
    <div class="footer-bottom-area">
      <div class="container">
        <div class="footer-border">
          <div class="row d-flex align-items-center justify-content-between">
            <div class="col-lg-6">
              <div class="footer-copy-right">
                <p>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>
                  All rights reserved | This template is made with
                  <i class="ti-heart" aria-hidden="true"></i> by
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="footer-menu f-right">
                <ul>
                  <li>
                    <a href="/contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
