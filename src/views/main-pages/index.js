import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Overview from "./overview";
import Education from "./education";
import Experience from "./experience";
import Skill from "./skill";

const Fullpage = () => (
  <ReactFullpage
    scrollingSpeed={1000}
    navigation={true}
    parallax={true}
    slidesNavigation={true}
    sectionsColor={["#87b0a5", "#f2f2f2", "#7BAABE", "#945c4c"]}
    responsiveWidth={700}
    navigationTooltips={["简介", "教育背景", "工作经验"]}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper className="Wrapper">
          <div className="section">
            <Overview />
          </div>
          <div className="section">
            <Education />
          </div>
          <div className="section">
            <Skill />
          </div>
          <div className="section active">
            <Experience />
          </div>

          <div className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button
              onClick={() => {
                fullpageApi.moveSectionDown();
                console.log(123, state);
              }}
            >
              Click me to move down
            </button>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
