import React, { useState } from "react";

import "../styles/_middle-content.scss";

const MiddleContent = () => {
  const [active, setActive] = useState(1);

  const toggleTab = (index) => {
    setActive(index);
  };

  return (
    <div className="middle-content-container">
      {/* Left sidebar content */}
      <section className="left-sidebar-container">
        <div className="left-sidebar-indicator-container">
          <div
            className={
              active === 1 ? "indicator indicator-active" : "indicator"
            }
            onClick={() => toggleTab(1)}
          ></div>
          <div
            className={
              active === 2 ? "indicator indicator-active" : "indicator"
            }
            onClick={() => toggleTab(2)}
          ></div>
          <div
            className={
              active === 3 ? "indicator indicator-active" : "indicator"
            }
            onClick={() => toggleTab(3)}
          ></div>
        </div>
      </section>
      {/* Main Content */}
      <main className="main-content-container">
        <div className={active === 1 ? "main-content-1" : "main-content"}>
          <h2>Discover</h2>
          <h4>Iceland!</h4>
          <div className="main-content-1-bottom">
            <p>
              Discover the "Land of Fire and Ice" known for its volcanoes and
              glaciers! Waterfalls, Lagoons and vast green mountain sides make
              this nordic country and great place to visit! Discover Iceland
              now! <i className="fas fa-arrow-right"></i>
            </p>
            <a href="https://visiticeland.com/">Discover Iceland!</a>
          </div>
        </div>
        <div className={active === 2 ? "main-content-2" : "main-content"}>
          <h2>To Do</h2>
          <h4>Eylenda</h4>
          <div className="main-content-2-bottom">
            <p>
              Iceland is known for having a vast selection of things to do
              during your visit including visiting one of its many geothermal
              spas, whale watching, crossing off "see the Northern Lights" off
              your bucket list and much, much more! See more of the many great
              things to do on your trip to Iceland now!
              <i className="fas fa-arrow-right"></i>
            </p>
            <a href="https://guidetoiceland.is/best-of-iceland/top-12-things-to-do-in-iceland">
              To Do Iceland!
            </a>
          </div>
        </div>
        <div className={active === 3 ? "main-content-3" : "main-content"}>
          <h2>Plan</h2>
          <h4>Islandia!</h4>
          <div className="main-content-3-bottom">
            <p>
              Plan out your trip to Iceland thoroughly before you go! If you
              want to see and do as many of the fun things that Iceland has to
              offer it could mean doing a bit of driving so planning out your
              trip is a must! See advice for planning your trip to Iceland!{" "}
              <i className="fas fa-arrow-right"></i>
            </p>
            <a href="https://wearetravelgirls.com/planning-iceland-trip-guide/">
              Plan Iceland!
            </a>
          </div>
        </div>
      </main>
      {/* Right sidebar Content */}
      <section className="sidebar-container">
        <div className="sidebar-nav-container">
          <div className="sidebar-nav-item">
            <h5
              className={
                active === 1
                  ? "sidebar-nav-h5 sidebar-nav-h5-active"
                  : "sidebar-nav-h5"
              }
              onClick={() => toggleTab(1)}
            >
              Discover
            </h5>
          </div>
          <div className="sidebar-nav-item">
            <h5
              className={
                active === 2
                  ? "sidebar-nav-h5 sidebar-nav-h5-active"
                  : "sidebar-nav-h5"
              }
              onClick={() => toggleTab(2)}
            >
              To Do
            </h5>
          </div>
          <div className="sidebar-nav-item">
            <h5
              className={
                active === 3
                  ? "sidebar-nav-h5 sidebar-nav-h5-active"
                  : "sidebar-nav-h5"
              }
              onClick={() => toggleTab(3)}
            >
              Plan
            </h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiddleContent;
