import khImage from "../assets/kh.jpeg"; // adjust path if needed



const About = () => (
  <section
    id="about"
    className="relative h-screen w-full flex text-white"
    style={{
      backgroundColor: "black",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

    {/* Content wrapper */}
    <div className="relative z-10 flex w-full h-full">
      {/* Left - Image (40%) */}
      <div className="w-2/5 h-full flex items-center justify-center p-6">
        <img
          src={khImage}
          alt="kh"
          className="w-full max-w-sm rounded-full shadow-xl object-cover"
        />
      </div>

      {/* Right - Text (60%) */}
      <div className="w-3/5 h-full flex flex-col justify-center p-10 pr-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Lee Kang Hao</h1>
        <p className="text-lg md:text-xl font-light leading-relaxed max-w-xl">
          I'm a passionate web developer who enjoys crafting interactive and modern websites.
          With strong interests in frontend technologies and user experience, I strive to make
          clean, functional designs come to life.
        </p>
      </div>
    </div>
  </section>
);

export default About;
