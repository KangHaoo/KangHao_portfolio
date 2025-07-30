import { useParams } from 'react-router-dom';
import starlightlogo from '../assets/starlightlogo.jpg';
import dishwash from '../assets/dishwash.png';
import Sweetescape from '../assets/Sweetescape.png';
import Japanimage from '../assets/japanese.png';
import sleepystudios from '../assets/sleepystudios.jpeg';
import game from '../assets/game.png';

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
• Designed a Sakura-themed candle in Maya
• Developed responsive website using HTML/CSS
• Focused on elegant UI/UX design`,
    videoEmbedUrl: "https://www.youtube.com/embed/9J7xXAfxAgk",
    links: [
      { label: "GitHub Repo", url: "https://github.com/KangHaoo/ID_IP_project" }
    ]
  },

  2: {
    bg: "bg-gradient-to-b from-green-900 via-green-800 to-green-700",
    text: "text-stone-200",
    border: "border-blue-700",
    img: dishwash,
    name: "Dishdashvr",
    description: `GitHub: https://github.com/KangHaoo/ITD_Assg2_DishDashVr
Built With: Unity · C# · Firebase · HTML · CSS

A cooking-themed VR game that teaches players about nutrition and healthy eating.`,
    videoEmbedUrl: "https://www.youtube.com/embed/your_dishdash_video_id",
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

A VR educational game for kids aged 4–8 with interactive mini-games.

🔧 My Role:
• Built game mechanics in Unity
• Integrated Firebase for login and saving
• Designed jigsaw, spelling, and memory games`,
    videoEmbedUrl: "https://www.youtube.com/embed/Ok8b9FZYqtc",
    links: [
      { label: "GitHub Repo", url: "https://github.com/bonthajohn/IP-Y2S2" }
    ]
  },
  4: {
    bg: "bg-gradient-to-r from-red-800 via-amber-600 to-rose-400",
    text: "text-yellow-200",
    border: "border-pink-500",
    img: Japanimage,
    name: "3D Environment",
    description: `Built With: Unity · Maya · URP · Substance Painter
  
  This project showcases a highly stylized 3D environment inspired by the serene beauty of traditional Japanese landscapes and architecture. Each asset was meticulously modeled in Maya, textured in Substance Painter, and assembled in Unity using the Universal Render Pipeline (URP) to achieve vibrant colors and atmospheric lighting. 
  
  The scene features classic Japanese elements such as arched wooden bridges, stone lanterns, cherry blossom trees, and tranquil water features. Special attention was given to hand-painted textures, natural lighting, and detailed props to evoke a sense of harmony and immersion. 
  
  Through the integration of advanced rendering techniques and artistic design, this project highlights both technical and creative skills in environment art, 3D asset creation, and real-time visualization.`,
    videoEmbedUrl: "https://www.youtube.com/embed/-14JdxrUDSk",
    links: null
  },
  

  5: {
    bg: "bg-gradient-to-r from-indigo-900 via-purple-800 to-rose-700",
    text: "text-rose-200",
    border: "border-purple-600",
    img: sleepystudios,
    name: "⚔️ Divine Decree – Narrative Action Game (Group Project)",
    description: `Built With: Unity · C# · Cinemachine
  
  Divine Decree is a short, story-driven action game set in a visually stunning world, offering players immersive combat encounters and cinematic storytelling. The game features engaging NPC battles and dramatic cutscenes crafted with Unity's powerful Cinemachine system for seamless camera transitions.
  
  🔧 My Role:
  • Developed core boss and enemy NPC scripts using C# for dynamic and responsive combat interactions.
  • Designed and implemented cinematic cutscenes for each story scene using Unity’s Cinemachine, ensuring smooth camera work and enhancing the narrative experience.
  • Scripted event triggers and managed scene setup to create an immersive and cohesive gameplay flow.
  • Collaborated closely with the team to elevate the game's visual presentation, leveraging Unity's tools to build compelling environments and memorable storytelling moments.
  
  Explore the world of Divine Decree, where narrative and gameplay merge for a captivating player experience.`,
    videoEmbedUrl: "https://www.youtube.com/embed/1AGTd2Z07KY",
    links: [
      { label: "GitHub Repo", url: "https://github.com/alfrdkang/DivineDecree" }
    ]
  },
  7: {
    bg: "bg-gradient-to-r from-indigo-900 via-purple-800 to-rose-700",
    text: "text-rose-200",
    border: "border-purple-600",
    img: game,
    name: "🌌 SPACE WARS – Strategic Cosmic Card Game",
    description: `Built With: Illustrator · Photoshop
  
  SPACE WARS is a tactical, grid-based card game where players battle for cosmic supremacy by harnessing the power of black holes and strategic card play. The game challenges players to outmaneuver their opponents on a dynamic board, using a unique combination of Power and Superpower cards to control the field and become the last one standing.
  
  All game assets, including card illustrations, icons, and visual effects, were originally designed and crafted in Adobe Illustrator and Photoshop. Special attention was given to creating a striking sci-fi theme, with bold colors and cosmic effects that immerse players in the strategic world of SPACE WARS.`,
    videoEmbedUrl: "https://www.youtube.com/embed/LgX7v3j-wMY",
  },
  
  

  default: {
    bg: "bg-black",
    text: "text-white",
    border: "border-gray-700",
    img: "/default-project.jpg",
    name: "Untitled Project",
    description: "No specific project selected. Please choose a project from the list to see more details.",
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    links: []
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const style = projectStyles[id] || projectStyles.default;

  return (
    <div className={`min-h-screen w-full px-2 sm:px-4 md:px-8 py-10 md:py-16 ${style.bg} text-white flex flex-col items-center`}>
      <div className="w-full max-w-screen-xl mx-auto space-y-12">
        {/* Top Section */}
        <div className="text-center">
          <h1 className={`text-4xl sm:text-5xl font-bold mb-2 ${style.text}`}>{style.name}</h1>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          {/* Left: Image */}
          <div className="flex justify-center items-center">
            <div className="rounded-xl overflow-hidden shadow-lg border border-white/50 bg-white bg-opacity-10 backdrop-blur-md w-full max-w-[520px] min-w-[240px]">
              <img
                src={style.img}
                alt={`Project ${id}`}
                className="w-full h-[320px] md:h-[400px] lg:h-[460px] object-contain transition-all duration-300"
              />
            </div>
          </div>
          {/* Right: Details */}
          <div className="p-6 rounded-xl shadow-lg bg-white bg-opacity-20 backdrop-blur-md w-full max-w-[520px]">
            <h2 className={`text-2xl font-semibold mb-4 ${style.text}`}>Project Details</h2>
            <p className="text-gray-300 mb-4 whitespace-pre-line">{style.description}</p>
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

        {/* Bottom: YouTube Video */}
        {style.videoEmbedUrl && (
          <div className="w-full flex flex-col items-center">
            <h3 className={`text-3xl font-bold mb-4 ${style.text}`}>Project Video</h3>
            <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={style.videoEmbedUrl}
                title="Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;