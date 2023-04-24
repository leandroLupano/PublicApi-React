/* eslint-disable jsx-a11y/anchor-has-content */
import './footer.scss';
export function Footer() {
  return (
    <footer className="container__footer">
      <div className="footer-logo-title">
        <div className="footer-title">
          <a href="Home">
            <img
              className="header__MainLogo"
              src="./img/logo2-transparent.png"
              alt=""
            />
          </a>
        </div>
        <div className="footer-title2">
          Beers City
          <p className="title-small">
            Copyright © Beers City 2020 All rights reserved
          </p>
        </div>
      </div>

      <div className="small-menu">
        <span>Contact Info</span>
        <span>+123 456 789</span>
        <span>Info@BeersCity.com</span>
        <span>1245, Madrid, Spain</span>
      </div>

      <div className="qlq">
        <p>Follow us on</p>

        <div className="list-logo">
          <a href="https://www.instagram.com/"></a>
          <img
            className="instagram"
            src="./img/instagram-green.png"
            alt=""
            width="30px"
            height="30px"
          />
          <a href="https://twitter.com/?lang=es"></a>
          <img
            src="./img/twitter-green.png"
            alt="Twitter"
            width="30px"
            height="30px"
          />
          <a href="https://es-es.facebook.com/"></a>
          <img
            src="./img/facebook-green.png"
            alt="Facebook"
            width="30px"
            height="30px"
          />
        </div>
      </div>
    </footer>
  );
}
