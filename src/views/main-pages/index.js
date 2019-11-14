import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Overview from "./overview";
import Education from "./education";
import Experience from "./experience";

const Fullpage = () => (
  <ReactFullpage
    scrollingSpeed={1000}
    navigation={true}
    parallax={true}
    sectionsColor={["#f2f2f2", "#4BBFC3", "#7BAABE"]}
    responsiveWidth={700}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper className="Wrapper">
          <div className="section">
            <Education />
          </div>
          <div className="section active">
            <Overview />
          </div>
          <div className="section">
            <Experience />
          </div>

          <div className="page-move-arrow">
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
