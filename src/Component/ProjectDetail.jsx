import { useParams } from 'react-router-dom';
import starlightlogo from '../assets/starlightlogo.jpg';
import dishwash from '../assets/dishwash.png';
import Sweetescape from '../assets/Sweetescape.png';
import Sweetescapevideo from '../assets/ITD_IMmerge_Walkthrough.mp4';
import starlightvideo from '../assets/ID_Starlight_pitch.mp4';
import walkthrough from '../assets/11_LeeKangHao_walkthru.mp4';
import Japanimage  from '../assets/japanese.png'
import sleepystudios from '../assets/sleepystudios.jpeg'
import DivineDecreevideo from '../assets/STLD_DivineDecree_Walkthrough.mp4'




const projectStyles = {
  1: {
    bg: "bg-gradient-to-b from-purple-700 via-pink-600 to-red-600",
    text: "text-pink-300",
    border: "border-pink-700",
    img: starlightlogo,
    name: "A Sweet Escape – VR Game for Kids (Group Project)",
    description: `GitHub: github.com/KangHaoo/ID_IP_project
Built With: HTML · CSS · JavaScript · Maya

A promotional website created to showcase a custom-designed candle collection. Each candle was modeled in Maya, and the website was styled to reflect the aesthetic and mood of the products.

🔧 My Role:
• Designed a Sakura-themed candle in Maya, focusing on shape, color, and detail for a serene and elegant style
• Developed a visually appealing and responsive website using HTML and CSS to highlight the candle collection
• Collaborated with team members to ensure a consistent visual theme and smooth layout across pages
• Focused on elegant UI/UX design that reflects the calming and luxurious nature of the candle products`,
    video: starlightvideo,
    links: [
      { label: "GitHub Repo", url: "https://github.com/KangHaoo/ID_IP_project" }
    ]
  },

  2: {
    bg:"bg-gradient-to-b from-green-900 via-green-800 to-green-700",
    text: "text-stone-200",
    border: "border-blue-700",
    img: dishwash,
    name: "Dishdashvr",
    description: `GitHub: https://github.com/KangHaoo/ITD_Assg2_DishDashVr
Built With: Unity · C# · Firebase · HTML · CSS

An interactive cooking-themed VR game that teaches players about nutrition and healthy eating through fun, hands-on gameplay involving food preparation activities.

🔧 My Role:
• Developer responsible for implementing all core gameplay mechanics in Unity using C#
• Created a full cooking simulation including food preparation stages such as cutting, washing, and cooking
• Integrated Firebase Realtime Database to track user progress and store gameplay stats like cooking speed
• Built a companion website using HTML and CSS to display gameplay results and nutritional feedback from Firebase
• Designed an end-of-game summary system to show players how healthy their virtual meal is
• Focused on delivering a fun, educational experience that promotes healthy habits in an engaging way`,
    video: null,
    links: [
      { label: "GitHub Repo", url: "https://github.com/KangHaoo/ITD_Assg2_DishDashVr" }
    ]
  },

  3: {
    bg: "bg-gradient-to-b from-pink-700 via-rose-600 to-red-600",
    text: "text-pink-200",
    border: "border-pink-500",
    img: Sweetescape,
    name: "🧩 A Sweet Escape – VR Game for Kids (Group Project)",
    description: `Built With: Unity · C# · Firebase · XR Toolkit
  
  A VR educational game designed for children (ages 4–8) to develop motor and cognitive skills through a series of interactive mini-games.
  
  🔧 My Role:
  • Developer responsible for coding all game mechanics in Unity using C#
  • Integrated Firebase Authentication and Realtime Database to manage user login and save game progress
  • Developed mini-games: jigsaw puzzle, coin collection, jelly bean color matching, card matching, and spelling
  • Designed and tested interactions using the XR Toolkit for a smooth VR experience
  • Focused on intuitive design for young children with bright visuals and responsive feedback`,
    video: Sweetescapevideo,
    links: [
      { label: "GitHub Repo", url: "https://github.com/bonthajohn/IP-Y2S2" }
    ]
  },
  4: {
    bg: "bg-gradient-to-r from-red-800 via-amber-600 to-rose-400",
    text: "text-yellow-200",
    border: "border-pink-500",
    img: Japanimage,
    name: "3D enviroment ",
    description: `Built With: Unity · Maya · URP · Substance Painter

A stylized 3D environment inspired by traditional Japanese aesthetics. The scene features peaceful gardens, flowing water, stone lanterns, and iconic architecture such as torii gates and pagodas, designed for an immersive and serene experience.

🔧 My Role:
• Modeled key assets in Maya: torii gates, bridges, lanterns, shrines, and terrain elements
• Textured assets using Substance Painter to achieve a stylized yet believable look
• Assembled and lit the entire scene in Unity using the Universal Render Pipeline (URP)
• Designed the overall composition and atmosphere using dynamic lighting, fog, and environmental VFX
• Optimized the scene for smooth real-time performance`,
    video: walkthrough,
    links: null
  },

  5: {
    bg: "bg-gradient-to-b from-indigo-800 via-purple-700 to-pink-600",
    text: "text-rose-200",
    border: "border-purple-600",
    img: sleepystudios,
    name: "⚔️ Divine Decree – Narrative Action Game (Group Project) ",
    description: `
Built With: Unity · C# · Cinemachine

A short story-driven action game that allows players to fight NPCs in a visually stunning world, with immersive cutscenes and combat experiences crafted in Unity.

🔧 My Role:
• Developed core boss and enemy NPC scripts using C# for dynamic combat interactions  
• Designed and implemented cinematic cutscenes for each story scene using Unity’s Cinemachine for smooth camera transitions and dramatic storytelling  
• Contributed to the game’s immersive experience through scripting, scene setup, and event triggers  
• Collaborated with the team to enhance the visual presentation, leveraging Unity's tools to build compelling environments and storytelling moments`,
    video: DivineDecreevideo,
    links: null
  },


  6: {
    bg: "bg-gradient-to-r from-indigo-900 via-purple-800 to-rose-700",
    text: "text-rose-200",
    border: "border-purple-600",
    img: sleepystudios,
    name: "⚔️ Divine Decree – Narrative Action Game (Group Project) ",
    description: `
Built With: Unity · C# · Cinemachine

A short story-driven action game that allows players to fight NPCs in a visually stunning world, with immersive cutscenes and combat experiences crafted in Unity.

🔧 My Role:
• Developed core boss and enemy NPC scripts using C# for dynamic combat interactions  
• Designed and implemented cinematic cutscenes for each story scene using Unity’s Cinemachine for smooth camera transitions and dramatic storytelling  
• Contributed to the game’s immersive experience through scripting, scene setup, and event triggers  
• Collaborated with the team to enhance the visual presentation, leveraging Unity's tools to build compelling environments and storytelling moments`,
    video: DivineDecreevideo,
    links:  [
        { label: "GitHub Repo", url: "https://github.com/KangHaoo/ITD_LeeKangHao_asg1" }
      ]
  },


 


  default: {
    bg: "bg-black",
    text: "text-white",
    border: "border-gray-700",
    img: "/default-project.jpg",
    name: "Untitled Project",
    description: "No specific project selected. Please choose a project from the list to see more details.",
    video: Sweetescapevideo,
    links: []
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const style = projectStyles[id] || projectStyles.default;

  return (
    <div className={`min-h-screen px-6 py-20 ${style.bg} text-white`}>
      <div className="max-w-6xl mx-auto w-full space-y-12">
        {/* Top Section: Project Name */}
        <div className="text-center">
          <h1 className={`text-5xl font-bold mb-2 ${style.text}`}>{style.name}</h1>
        </div>

        {/* Middle Section: Split Left/Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Image */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-white/50 bg-white bg-opacity-10 backdrop-blur-md">
            <img
              src={style.img}
              alt={`Project ${id}`}
              className="w-full h-[400px] object-contain"
            />
          </div>

          {/* Right: Project Details */}
          <div className="p-6 rounded-xl shadow-lg bg-white bg-opacity-20 backdrop-blur-md">
            <h2 className={`text-2xl font-semibold mb-4 ${style.text}`}>
              Project Details
            </h2>
            <p className="text-gray-300 mb-4 whitespace-pre-line">
              {style.description}
            </p>

            {/* Links Section */}
            {style.links && style.links.length > 0 && (
              <div className="space-y-2 mt-4">
                <h3 className="text-lg font-semibold text-white">🔗 Links</h3>
                <ul className="list-disc list-inside text-blue-400">
                  {style.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section: Video */}
        {style.video && (
          <div className="mt-12">
            <h3 className={`text-3xl font-bold mb-4 ${style.text}`}>Project Video</h3>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <video
                src={style.video}
                controls
                className="w-full h-auto max-h-[500px] object-cover rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
