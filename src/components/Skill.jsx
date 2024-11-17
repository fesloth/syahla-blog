// compoments

import Skillcard from "./Skillcard";

const skillItem = [
  {
    imgSrc: "/img/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/img/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/img/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/img/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/img/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/img/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/img/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/img/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/img/php.svg",
    label: "PHP",
    desc: "Backend Scripting Language",
  },
  {
    imgSrc: "/img/laravel.svg",
    label: "Laravel",
    desc: "PHP Framework",
  },
  {
    imgSrc: "/img/flutter.svg",
    label: "Flutter",
    desc: "Cross-platform UI Toolkit",
  },
  {
    imgSrc: "/img/dart.svg",
    label: "Dart",
    desc: "Programming Language",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Essetial Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.</p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <Skillcard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
