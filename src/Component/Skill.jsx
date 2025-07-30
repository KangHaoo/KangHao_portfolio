const skillData = [
  { name: "Figma", red: 80, blue: 20 },
  { name: "C#", red: 80, blue: 20 },
  { name: "JavaScript", red: 90, blue: 10 },
  { name: "Python", red: 65, blue: 35 },
  { name: "ReactJS", red: 85, blue: 15 },
  { name: "Firebase", red: 60, blue: 40 },
  { name: "Supabase", red: 50, blue: 50 },
  { name: "GitHub", red: 75, blue: 25 },
  { name: "Photoshop", red: 60, blue: 40 },
  { name: "Illustrator", red: 55, blue: 45 },
  { name: "Premiere Pro", red: 80, blue: 20 },
  { name: "Jira", red: 40, blue: 60 },
  { name: "Maya", red: 35, blue: 65 },
  { name: "Substance 3D Painter", red: 30, blue: 70 },
  { name: "Unity", red: 85, blue: 15 },
];

const languageData = [
  { name: "English", level: 85 },
  { name: "Chinese", level: 70 },
];

const Skills = () => {
  const mid = Math.ceil(skillData.length / 2);
  const left = skillData.slice(0, mid);
  const right = skillData.slice(mid);

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-12 bg-black"
    >
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-bold text-pink-400 mb-3 text-center font-[Poppins] drop-shadow-lg">
        Skills Chart
      </h2>
      <p className="text-xl font-semibold text-gray-200 mb-10 text-center">
        A showcase of my key skills and language proficiency.
      </p>

      {/* Skill Bars */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="flex flex-col gap-8">
          {left.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {right.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>

      {/* Language Proficiency Section */}
      <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl ring-1 ring-white/20 mb-8">
        <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center font-[Poppins]">Language Proficiency</h3>
        <div className="flex flex-col gap-6">
          {languageData.map((lang) => (
            <div key={lang.name}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-lg text-white">{lang.name}</span>
                <span className="text-base text-cyan-200">{getProficiencyText(lang.level)}</span>
              </div>
              <div className="w-full h-4 rounded-full bg-gray-800 shadow-inner overflow-hidden">
                <div
                  className="h-4 transition-all"
                  style={{
                    width: `${lang.level}%`,
                    background: "linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)",
                    boxShadow: "0 0 8px 2px #06b6d4aa"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function for proficiency text
function getProficiencyText(level) {
  if (level >= 90) return "Fluent";
  if (level >= 65) return "Advanced";
  if (level >= 40) return "Conversational";
  if (level >= 20) return "Basic";
  return "Beginner";
}

// Skill bar with gradient
function SkillBar({ skill }) {
  return (
    <div>
      <div className="text-lg text-gray-100 font-medium mb-2">
        {skill.name}
      </div>
      <div className="w-full h-5 rounded-full overflow-hidden bg-gray-900 shadow-inner">
        {/* Red section as left gradient */}
        <div
          className="h-5"
          style={{
            width: `${skill.red}%`,
            background: "linear-gradient(90deg, #fb7185 0%, #fbbf24 100%)",
            boxShadow: "0 0 10px 2px #fb718599"
          }}
        />
        {/* Blue section as right gradient */}
        <div
          className="h-5"
          style={{
            width: `${skill.blue}%`,
            background: "linear-gradient(90deg, #3b82f6 0%, #818cf8 100%)",
            boxShadow: "0 0 10px 2px #3b82f688"
          }}
        />
      </div>
    </div>
  );
}

export default Skills;
