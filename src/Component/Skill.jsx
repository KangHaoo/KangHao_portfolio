const Skills = () => (
  <section
    id="skills"
    className="relative min-h-screen w-full flex items-center justify-center text-white"
    style={{
      backgroundColor: "#0a0a0a",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

    {/* Content */}
    <div className="relative z-10 max-w-6xl w-full px-6 py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-lg font-light">
        {[
          "Figma", "C#", "JavaScript", "Python",
          "ReactJS", "Firebase", "Supabase", "GitHub",
          "Photoshop", "Illustrator", "Premiere Pro", "Jira",
          "Maya", "Substance 3D Painter", "Unity"
        ].map((skill) => (
          <div
            key={skill}
            className="bg-white bg-opacity-10 rounded-xl p-4 shadow-md hover:bg-opacity-20 transition-all"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
