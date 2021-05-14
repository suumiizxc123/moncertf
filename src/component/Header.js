import React from "react";
const css_test = {
  color: "red"
}
export default function Header() {
  return (
    <>
      <header
        className="site-navbar js-sticky-header site-navbar-target"
        role="banner"
      >
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="site-logo">
              <a href="index-2.html" className="text-black">
                <span className="text-primary">Moncertf</span>
              </a>
            </div>
            <div className="col-12">
              <nav
                className="site-navigation text-right ml-auto "
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  <li className="has-children">
                    <a href="#home-section" className="nav-link">
                      ABOUT US 
                    </a>
                    <ul className="dropdown arrow-top">
                      <li>
                        <a href="#team-section" className="nav-link">
                          OUR TEAM
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a href="#services-section" className="nav-link">
                      SERVICES
                    </a>
                    <ul className="dropdown arrow-top">
                      <li>
                        <a href="#team-section" className="nav-link">
                          CLIENT
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a href="#dashboard" className="nav-link">
                      PROCESS
                    </a>
                    <ul className="dropdown arrow-top">
                      <li>
                        <a href="#team-section" className="nav-link">
                          CLIENT
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a href="#team-section" className="nav-link">
                      CLIENTS
                    </a>
                    <ul className="dropdown arrow-top">
                      <li>
                        <a href="#team-section" className="nav-link">
                          CLIENT
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a href="#faq-section" className="nav-link">
                      ACCREDATITATION
                    </a>
                    <ul className="dropdown arrow-top">
                      <li>
                        <a href="#team-section" className="nav-link">
                          CLIENT
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a href="#contact-section" className="nav-link">
                      TRAINING
                    </a>
                    <ul className="dropdown arrow-top">
                      <li>
                        <a href="#team-section" className="nav-link">
                          CLIENT
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a href="#contact-section" className="nav-link">
                      TEAM
                    </a>
                    <ul className="dropdown arrow-top">
                      <li>
                        <a href="#team-section" className="nav-link">
                          CLIENT
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a href="#contact-section" className="nav-link">
                      CONTACT
                    </a>
                    <ul className="dropdown arrow-top">
                      <li>
                        <a href="#team-section" className="nav-link">
                          CLIENT
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="toggle-button d-inline-block d-lg-none">
              <a
                href="#"
                className="site-menu-toggle py-5 js-menu-toggle text-white"
              >
                <span className="icon-menu h3" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
