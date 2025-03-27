import React from "react";
import "../style/Skills.scss";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      <div className="skills-section__container">
        <div className="skills-section__info">
          <h3>Intermediate</h3>
          <ul>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaHtml5 />
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCss3Alt />
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaJs />
              </a>
            </li>
            <li>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaReact />
              </a>
            </li>
            <li>
              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGitAlt />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
        <div className="skills-section__info">
          <h3>Familiar with</h3>
          <ul>
            <li>
              <a
                href="https://nodejs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaNode />
              </a>
            </li>
            <li>
              <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiExpress />
              </a>
            </li>
            <li>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiMongodb />
              </a>
            </li>
          </ul>
        </div>
        <div className="skills-section_info">
          <h3 className="codewars-h3">Codewars progress</h3>
          <ul>
            {" "}
            <a
              href="https://www.codewars.com/users/Lukicaa20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.codewars.com/users/Lukicaa20/badges/large"
                alt="Codewars Badge"
                className="codewars-badge"
              />
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
