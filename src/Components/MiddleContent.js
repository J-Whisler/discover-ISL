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
          Main Content 2
        </div>
        <div className={active === 3 ? "main-content-3" : "main-content"}>
          Main Content 3
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
