import { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
  const handleSmoothScroll = (e, targetId) => {
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#leadership" onClick={(e) => handleSmoothScroll(e, '#leadership')}>
          Leadership
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#journey" onClick={(e) => handleSmoothScroll(e, '#journey')}>
          Journey
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>
          Contact
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link flex items-center gap-2" href="https://drive.google.com/uc?export=download&id=1Eg4yd3zEvALF7WB3Z5pPiIaFeyy28ZFl" target="_blank" rel="noopener noreferrer">
          Resume
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Ahmed
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
