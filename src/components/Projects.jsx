import React from "react";
import "../style/Projects.scss";
import { MdLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { TbTicTac } from "react-icons/tb";
import { MdQuiz } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";

const projects = [
  {
    title: "To-Do App",
    description: "A simple to-do list with task management features.",
    link: "https://your-todo-app-link.com",
    repo: "https://github.com/yourgithub/todo-app",
    icon: <LuListTodo />,
  },
  {
    title: "Quiz App",
    description:
      "An interactive quiz application with multiple-choice questions.",
    link: "https://your-quiz-app-link.com",
    repo: "https://github.com/yourgithub/quiz-app",
    icon: <MdQuiz />,
  },
  {
    title: "Tic-Tac-Toe",
    description: "A classic Tic-Tac-Toe game with a smart AI opponent.",
    link: "https://your-tic-tac-toe-link.com",
    repo: "https://github.com/yourgithub/tic-tac-toe",
    icon: <TbTicTac />,
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
