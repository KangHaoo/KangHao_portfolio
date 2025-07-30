import React from 'react';
import { Link } from 'react-router-dom';
import starlightlogo from "../assets/starlightlogo.jpg";
import dishwash from '../assets/dishwash.png';
import Sweetescape from '../assets/Sweetescape.png'
import Japanimage  from '../assets/japanese.png'
import sleepystudios from '../assets/sleepystudios.jpeg'
import game from '../assets/game.png';
import lostsoul from '../assets/lostsoul.png';




const projectData = [
  {
    id: 1,
    name: "Starlight Project",
    description: " A promotional website created to showcase a custom-designed candle collection. Each candle was modeled in Maya, and the website was styled to reflect the aesthetic and mood of the products.",
    image: starlightlogo,
  },
  {
    id: 2,
    name: "ITD_Assg2_NutriGoals",
    description: "An interactive cooking-themed VR game that teaches players about nutrition and healthy eating through fun, hands-on gameplay involving food preparation activities.",
    image: dishwash,
  },
  {
    id: 3,
    name: "A Sweet Escape",
    description: "A VR educational game designed for children (ages 4–8) to develop motor and cognitive skills through a series of interactive mini-games.",
    image: Sweetescape
  },
  {
    id: 4,
    name: "3D enviroment",
    description: "A beautifully crafted Japanese-themed 3D environment featuring traditional architecture, serene landscapes, and immersive cultural details.",
    image: Japanimage
  },
  {
    id: 5,
    name: "⚔️ Divine Decree – Narrative Action Game (Group Project)",
    description: "A short story-driven action game that allows players to fight NPCs in a visually stunning world, with immersive cutscenes and combat experiences crafted in Unity.",
    image: sleepystudios
  },



    {
      id: 7,
      name: "SPACE WARS",
      description: "A tactical card game where players battle for cosmic dominance using strategic moves and visually striking, custom-designed cards.",
      image: lostsoul
    }
    

  

  
];

const Projects = () => {
  return (
    <section id="portfolio" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My School Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div
                  className="w-full aspect-[4/3] mb-4 rounded-md bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'

                }}
              />
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-sm mt-2 mb-4">{project.description}</p>
              <Link
                to={`/projects/${project.id}`}
                className="text-blue-400 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
