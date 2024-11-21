// components

import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: 'img/projek1.png',
      title: 'Calculator',
      tags: ['Javascript', 'Development', 'Math'],
      projectLink: 'https://fesloth.github.io/calculator-with-js'
    },
    {
      imgSrc: 'img/projek2.png',
      title: 'SkendAnimation Website',
      tags: ['Blog', 'Social Media'],
      projectLink: 'https://github.com/fesloth/skendanimation-revision'
    },
    {
      imgSrc: 'img/projek3.png',
      title: 'Minigames',
      tags: ['Games', 'Javascript', 'Tic-tac-toe'],
      projectLink: 'https://syahlaminigames.vercel.app'
    },
    {
      imgSrc: 'img/projek4.png',
      title: 'Countdown Days Since',
      tags: ['Countdown', 'Javasript'],
      projectLink: 'https://fesloth-countdown.vercel.app/'
    },
    {
      imgSrc: 'img/projek5.png',
      title: 'MeditAja Website',
      tags: ['Meditation', 'Laravel', 'MySQL', 'Database'],
      projectLink: 'https://github.com/fesloth/MeditAja'
    },
    {
      imgSrc: 'img/projek6.png',
      title: 'Todolist',
      tags: ['Todolist', 'Simply'],
      projectLink: 'https://feslothtodo.vercel.app/'
    },
  ];

const Work = () => {
  return (
    <section 
    id="work"
    className="section">
        <div className="container">
            <h2 className="headline-2 mb-8">
            My portfolio highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => 
                (
                <ProjectCard 
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work