import React from "react";
import "./Intro.css";

export const Intro = () => {
  return (
    <>
      <section className="intro" id="home">
        <div className="intro-left">
          <p className="p">
            Hello, i'm
          </p>
          <h2>Mubarak Yusuf</h2>
          <p className="title">Web Developer | Software Engineer</p>
          <ul className="info">
            <li><a href="mailto:yusufmubarak460@gmail.com"><b>icon</b><span>yusufmubarak460@gmail.com</span></a></li>
            <li><a href="tel:+2348120460649"><b>icon</b><span>+2348120460649</span></a></li>
            <li><a href=""><b>icon</b><span>Katsina, Nigeria</span></a></li>
          </ul>
        </div>
        <div className="intro-right">
          <img src="/me.jpg" alt="" />
        </div>
      </section>
    </>
  );
};
