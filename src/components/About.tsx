import React from "react";
import "./styles.css";
import Navbar from "./Navbar";

interface About {}

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="home row mt-3 text-black">
        <div className="col-6">
          <div className="heading1 mb-2">Get To Know Me!</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,{" "}
            <br />
            laudantium omnis atque eius libero dolores architecto illum, est{" "}
            <br />
            quod expedita voluptatem praesentium. Quis aliquid dolores eligendi{" "}
            <br />
            repellendus nostrum. Id, consequuntur.
          </p>
          <button className="msg text-white bg-primary mt-3">Contact Me</button>
        </div>
        <div className="col-6">
          <div className="skills mb-1">Skills</div>
          <div className="heading2 mb-1">Web</div>
          <div className="row web">
            <button className="col-3 web-skills">HTML</button>
            <button className="col-3 web-skills">CSS</button>
            <button className="col-3 web-skills">Javascript</button>
            <button className="col-3 web-skills mt-1">Figma</button>
            <button className="col-3 web-skills mt-1">ReactJS</button>
            <button className="col-3 web-skills mt-1">Bootstrap</button>
            <button className="col-3 web-skills mt-1">Typescript</button>
            <button className="col-3 web-skills mt-1">NextJS</button>
            <button className="col-3 web-skills mt-1">Redux</button>
            <button className="col-3 web-skills mt-1">Redux-Toolkit</button>
          </div>
          <div className="heading2 mt-2">Technologies</div>
          <div className="row web">
            <button className="col-3 web-skills mt-1">Git</button>
            <button className="col-3 web-skills mt-1">NodeJS</button>
          </div>
          <div className="heading2 mt-2">Mobile</div>
          <div className="row web">
            <button className="col-3 web-skills mt-1">React-native</button>
          </div>
          <div className="heading2 mt-2">Backend</div>
          <div className="row web">
            <button className="col-3 web-skills mt-1">Firebase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
