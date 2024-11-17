// components

import CertifCard from "./CertifCard";

const certif = [
  {
    imgSrc: "/img/1.jpg",
    title: "Command Line",
    tags: ["CLI", "CMD"],
  },
  {
    imgSrc: "/img/2.jpg",
    title: "GIT",
    tags: ["GIT"],
  },
  {
    imgSrc: "/img/3.jpg",
    title: "Javascript",
    tags: ["Javascript", "Javascrip Basic"],
  },
  {
    imgSrc: "/img/4.jpg",
    title: "MongoDB",
    tags: ["MongoDB", "NoSQL"],
  },
];

const Certif = () => {
  return (
    <section id="certif" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My Certification</h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {certif.map(({ imgSrc, title, tags }, key) => (
            <CertifCard key={key} imgSrc={imgSrc} title={title} tags={tags} classes="hover:shadow-2xl" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certif;
