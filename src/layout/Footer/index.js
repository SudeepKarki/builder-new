import {
  S1Icon,
  S2Icon,
  S3Icon,
  TwitterIcon,
  FacebookIcon,
  RssIcon,
  InstaIcon,
  MainLogo,
} from "components/Icons";
import { Row, Col } from "antd";

function index() {
  return (
    <footer>
      <div className="footer-up">
        <Row justify="center" align="middle">
          <Col xs={24} md={8} lg={8} xl={6}>
            <S1Icon />
            <span>
              7 day project qutation for <b>the project</b>
            </span>
          </Col>
          <Col xs={24} md={8} lg={8} xl={6}>
            <S2Icon />
            <span>
              <b>Support </b>teams across the world
            </span>
          </Col>
          <Col xs={24} md={8} lg={8} xl={6}>
            <S3Icon />
            <span>
              Easy to <b>talk and build for company</b>
            </span>
          </Col>
        </Row>
        <div className="footer-logo">
          <MainLogo />
        </div>
      </div>
      <div className="container">
        <div className="footer-navs">
          <Row justify="center">
            <Col xs={24} lg={20}>
              <Row>
                <Col xs={24} lg={{ span: 4, offset: 2 }}>
                  <h4>Who we Are</h4>
                  <div className="footer-nav-links">
                    <a href="/">About</a>
                    <a href="/">Team</a>
                    <a href="/">Work With Us</a>
                  </div>
                </Col>
                <Col xs={24} lg={{ span: 4 }}>
                  <h4>Woocommerce</h4>
                  <div className="footer-nav-links">
                    <a href="/">Features</a>
                    <a href="/">Payments</a>
                    <a href="/">Marketing</a>
                    <a href="/">Shipping</a>
                    <a href="/">Extension Store</a>
                    <a href="/">eCommerce blog</a>
                    <a href="/">Development blog</a>
                    <a href="/">Ideas board</a>
                    <a href="/">Mobile App</a>
                    <a href="/">Community</a>
                    <a href="/">Style Guide</a>
                    <a href="/">Email Newsletter</a>
                  </div>
                </Col>
                <Col xs={24} lg={{ span: 4 }}>
                  <h4>Other products</h4>
                  <div className="footer-nav-links">
                    <a href="/">Storefront</a>
                    <a href="/">WooSlider</a>
                    <a href="/">Sensei</a>
                    <a href="/">Sensei Extensions</a>
                  </div>
                </Col>
                <Col xs={24} lg={{ span: 4 }}>
                  <h4>Support</h4>
                  <div className="footer-nav-links">
                    <a href="/">Documentation</a>
                    <a href="/">Customizations</a>
                    <a href="/">Support Policy</a>
                    <a href="/">Contact</a>
                    <a href="/">COVID-19 Resources</a>
                    <a href="/">Privacy Notice for</a>
                    <a href="/">California Users</a>
                  </div>
                </Col>
                <Col xs={24} lg={{ span: 4 }}>
                  <h4>We recommend</h4>
                  <div className="footer-nav-links">
                    <a href="/">WooExperts</a>
                    <a href="/">Hosting Solutions</a>
                    <a href="/">Pre-sales FAQ</a>
                    <a href="/">Success Stories</a>
                    <a href="/">Design Feedback Group</a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <Row gutter={15}>
            <Col xs={24} md={8}>
              <div className="footer-social">
                <a href="/">
                  <TwitterIcon />
                </a>
                <a href="/">
                  <FacebookIcon />
                </a>
                <a href="/">
                  <RssIcon />
                </a>
                <a href="/">
                  <InstaIcon />
                </a>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="terms">
                <a href="/">TERMS & CONDITIONS PRIVACY POLICY</a>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="design">
                Designed by <a href="/">Saga Innovation</a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
}

export default index;
