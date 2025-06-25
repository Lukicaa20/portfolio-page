import React from "react";
import "./Projects.scss";
import { MdLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { TbTicTac } from "react-icons/tb";
import { MdQuiz } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { SiRedux } from "react-icons/si";

const projects = [
  {
    title: "To-Do App",
    description: "A simple to-do list with task management features.",
    link: "https://todo-app-neon-nine-12.vercel.app/",
    repo: "https://github.com/Lukicaa20/TodoApp",
    icon: <LuListTodo />,
  },
  {
    title: "Quiz App",
    description:
      "An interactive quiz application with multiple-choice answers.",
    link: "https://quiz-app-five-flame-21.vercel.app/",
    repo: "https://github.com/Lukicaa20/QuizApp",
    icon: <MdQuiz />,
  },
  {
    title: "Tic-Tac-Toe",
    description: "A classic Tic-Tac-Toe game for two people.",
    link: "https://tic-tac-toe-xi-cyan.vercel.app/",
    repo: "https://github.com/Lukicaa20/Tic-Tac-Toe",
    icon: <TbTicTac />,
  },
  {
    title: "Simple Cart App - Redux Toolkit",
    description:
      "A minimal e-commerce app where users can add, increase, decrease, or remove items from the cart. ",
    link: "https://redux-cart-phi-ochre.vercel.app/",
    repo: "https://github.com/Lukicaa20/redux-cart",
    icon: <SiRedux />,
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <hr />
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-info">
              <h3>
                <span>{project.icon}</span>
                {project.title}
              </h3>
              <p>{project.description}</p>
            </div>

            <div className="project-media">
              <div className="project-links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdLiveTv />
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
