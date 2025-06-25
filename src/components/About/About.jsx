import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-picture">
          <h2>About me</h2>
          <img
            src="/450368397_389977390857503_5078429100215297349_n.jpg"
            alt="profile"
            width="300px"
            height="300px"
          />
        </div>
        <div className="about-info">
          <p>
            My name is Luka, and I hold a master's degree in engineering,
            specializing in fire protection. I graduated from the University of
            Applied Sciences in Karlovac. Although my academic background is in
            fire protection, my true passion lies in technology and programming.
            After completing a front-end developer course at Algebra University,
            I decided to fully shift my career toward web development.
          </p>
          <p>
            Since then, I have been continuously improving my skills, both
            through practical projects and platforms like Codewars, where I
            solve challenges that help me progress. My focus is on front-end
            technologies, particularly HTML, CSS, and JavaScript, but I am also
            interested in full-stack development to expand my knowledge and gain
            a deeper understanding of web application development.
          </p>
          <p>
            I am passionate about keeping up with new technologies and tools
            that shape the industry, always striving to apply best practices in
            my coding. My projects are driven by the goal of creating web
            applications that are intuitive, responsive, and user-friendly. I
            enjoy solving complex problems and building solutions that make a
            real impact.
          </p>
          <p>
            I constantly invest in my skills and believe in the importance of
            lifelong learning. My goal is to combine my technical expertise with
            a creative approach to develop web applications that are not only
            functional but also aesthetically appealing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
