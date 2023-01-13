import React from "react";
import "./Contact.css";
import map from "../../images/data/Map.png";
import Layout from "../../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="arow">
        <div className="acol">
          <img className="aimage-map" src={map} alt="" />
        </div>
        <div className="aform">
          <div className="createform">
            <div className="con">
              <h2 className="hd">CONTACT US</h2>
              <p className="para">We would love to hear from you anytime!</p>
              <form>
                <label className="label-name">Full Name</label>
                <div className="input-div-about">
                  <input
                    type="text"
                    id="fname"
                    placeholder="    Enter your full name"
                    required
                  />
                </div>
                <label className="label-email">Email Address</label>
                <div className="input-div-about">
                  <input
                    type="text"
                    id="email"
                    placeholder="    Enter your email address"
                    required
                  />
                </div>
                <label className="label-msg">Message</label>
                <div className="name-input">
                  <textarea
                    placeholder="Type your message here"
                    id="message"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
                <div className="btn-message">
                  <button className="btn-msg">SEND MESSAGE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
