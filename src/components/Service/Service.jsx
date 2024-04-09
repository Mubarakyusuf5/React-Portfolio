import React from "react";
import "./Service.css";
import { ServCard } from "./ServCard";

export const Service = () => {
  const Services = [
    {
      id: 1,
      img: "/dev.png",
      name: "Web Development",
      statement:
        "Development of custom web pages. Using current technologies of different varieties.",
    },
    { id: 2, img: "/design.png", name: "Web Design", statement: "I offer design ofweb interfaces and mobile application made in figma and adobe xd." },
    {
      id: 3,
      img: "/graphic.png",
      name: "Graphic Design",
      statement:
        "I make design's at the client's request. logo design, Flyers, buisness cards and many more.",
    },
  ];

  const place = Services.map((Service) => (
    <ServCard
      key={Service.id}
      img={Service.img}
      name={Service.name}
      statement={Service.statement}
    />
  ));
  return (
    <>
      <section className="service" id="service">
        <h5>Services</h5>
        <h2>My Services</h2>
        <div className="serv-con">{place}</div>
      </section>
    </>
  );
};
