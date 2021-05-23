import React from "react";
import "./footer.css";
import logoAsme from "../../ui_utils/img/asmelogowhite.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        {/* <div className="container"> */}
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12 segment-one">
            <img src={logoAsme} />
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 segment-two">
            <h2>Contact Us</h2>
            <hr className="bg-light mb-4 mt-0 d-inline-block mx-auto" />
            <ul>
              <li>
                <i className="fa fa-users" aria-hidden="true" />
                <Link to="/team">Community</Link>
              </li>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true" />
                <a href="https://www.google.com/maps/dir/26.1200452,91.8019519/google+map+nit+silchar+location/@25.4901803,91.7389908,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x374e49dcb63bae9b:0x81efa836714a289b!2m2!1d92.7922929!2d24.7577144">
                  NIT Silchar, Assam, India, 788010
                </a>
              </li>
              {/* <li>
                <i className="fa fa-phone" aria-hidden="true" />
                <a href="tel:+123456789">+123456789</a>
              </li> */}
              <li>
                <i className="fa fa-envelope-o" aria-hidden="true" />
                <a href="mailto:asme.nitsilchar@gmail.com">
                  asme.nitsilchar@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 segment-three">
            <h2>Social</h2>
            <hr className="bg-light mb-4 mt-0 d-inline-block mx-auto" />
            <ul>
              <li>
                <a href="https://www.facebook.com/asme.nits/">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/asme_nits?igshid=1c8mhozmnm3em">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/asme-nits">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/NitsAsme?s=09">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="col-md-3 col-sm-6 col-xs-12 segment-four">
                <h2>Subscribe</h2>
                <hr className="bg-light mb-4 mt-0 d-inline-block mx-auto"  />
                <p>Keep yourself updated. Subscribe to our website.</p>
                <form action>
                  <input type="mail" style={{width:"100%"}} />
                  <input type="submit" defaultValue="Submit" />
                </form>
              </div> */}
        </div>
        {/* </div> */}
      </div>
      <p className="footer-bottom-text">
        All Rights reserved. © ASME NITS Chapter | Designed by{" "}
        <em>SOHAN PAUL</em>
      </p>
    </footer>
  );
};
// | <em> Designed by <a href="www.linkedin.com/in/sohan-paul" className="external">Sohan Paul</a></em>
export default Footer;
