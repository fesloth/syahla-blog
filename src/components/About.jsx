const aboutItems = [
  {
    label: "Project done",
    number: 32,
  },
  {
    label: "Years of experience",
    number: 3,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
          Hai👋, My name is Syahla Nur Azizah, I am a technology enthusiast and a student who is passionate about web and application development. I have a strong interest in server-side development and enjoy working on the logical aspects of building robust and efficient applications.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img src="/img/favicon.svg" alt="logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
