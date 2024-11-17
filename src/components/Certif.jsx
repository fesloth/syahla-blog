// components

import CertifCard from "./CertifCard";

const certif = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "Full stack music app",
    tags: ["API", "MVC", "Development"],
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Free stock photo app",
    tags: ["API", "SPA"],
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    tags: ["Development", "API"],
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development"],
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],

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
