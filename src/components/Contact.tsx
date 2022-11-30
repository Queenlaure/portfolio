import React from "react";
import "./styles.css";
import Navbar from "./Navbar";

interface Contact {}

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="home mt-3 text-black">
        <div className="heading1 mb-2">Contact Me</div>
        <div className="mb-4">
          <p>
            Get in touch with me directly <span className="email text-primary">queennfongeh@gmail.com</span>
          </p>
          <p>
            Currently i am available for any opportunities and you could always <br />
            get to me through my inbox. Whether you have a question or just want <br />
            to say Hi, I will try my best to get back to you
          </p>
        </div>
        <div>
            <input className="input mb-3" type="text" placeholder="Name" /> <br />
            <input className="input mb-3" type="text" placeholder="Email" /> <br />
            <textarea className="input1" name="Message" placeholder="Message" ></textarea>
        </div>
        <div>
        <button className="msg text-white bg-primary mt-3">
          Send Message
        </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
