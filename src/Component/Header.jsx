const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
      {/* Removed the "Kang Hao" text div */}
      
      <nav className="flex items-center space-x-8 text-white text-sm font-light w-full justify-end font-lato">
        <a href="#about" className="hover:text-gray-300 transition">About</a>
        <a href="#portfolio" className="hover:text-gray-300 transition">Portfolio</a>
        <a href="#experiences" className="hover:text-gray-300 transition">Other Experiences</a>
        <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        <a
          href="https://www.linkedin.com/in/lee-kang-hao-321b43272/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold hover:opacity-80 transition"
        >
          in
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
