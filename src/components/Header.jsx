// components

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img src="/img/favicon.svg" width={40} height={40} />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button className="menu-btn md:hidden" onClick={null}>
            <span className="fa-solid fa-bars"></span>
          </button>
          <Navbar/>
        </div>
        <a href="#contact" className="">Contact Me</a>
      </div>
    </header>
  );
};

export default Header;
