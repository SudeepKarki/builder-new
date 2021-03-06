import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Layout } from "antd";
import * as path from "router/path";
import { MainLogo } from "components/Icons";

const { Header } = Layout;

function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Header className="top-header">
        <nav>
          <div className="container">
            <div className="logo">
              <Link to={"/"}>
                <MainLogo />
              </Link>
            </div>
            <div
              onClick={toggleMenu}
              className={`toggle-icon ${isMenuOpen && "drop-menu"}`}
            >
              <span className="line line-left"></span>
              <span className="line"></span>
              <span className="line line-right"></span>
            </div>
            <div className={`top-header__menu ${isMenuOpen && "drop-menu"}`}>
              <div className="left-wrap">
                <NavLink
                  onClick={toggleMenu}
                  exact={true}
                  to={`${path.HOME}`}
                  activeClassName="active"
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={toggleMenu}
                  to={`${path.ABOUTUS}`}
                  activeClassName="active"
                >
                  About Us
                </NavLink>
                <NavLink
                  onClick={toggleMenu}
                  to={`${path.PROJECTS}`}
                  activeClassName="active"
                >
                  Projects
                </NavLink>
                <NavLink
                  onClick={toggleMenu}
                  to={`${path.CONTACTUS}`}
                  activeClassName="active"
                >
                  Contact Us
                </NavLink>
              </div>
              <div className="right-wrap">
                <span>Schedule a Meeting</span>
                <NavLink
                  onClick={toggleMenu}
                  to={`${path.CONTACTUS}`}
                  activeClassName="active"
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </Header>
    </>
  );
}

export default Index;
