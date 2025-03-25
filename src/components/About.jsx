import React from "react";
import "../style/About.scss";

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
            Zovem se Luka, magistar inženjer sigurnosti, specijaliziran za
            zaštitu od požara, diplomirao sam na Veleučilištu u Karlovcu. Iako
            moje akademsko obrazovanje uključuje zaštitu od požara, moj pravi
            interes leži u tehnologiji i programiranju. Nakon završetka tečaja
            za front-end developera na Sveučilištu Algebra, odlučio sam u
            potpunosti usmjeriti svoju karijeru prema web razvoju.
          </p>
          <p>
            Od tada neprestano radim na vlastitom usavršavanju, kako kroz
            praktične projekte, tako i kroz platforme poput Codewars, gdje
            rješavam izazove koji mi pomažu u stalnom napredovanju. Moj fokus je
            na front-end tehnologijama, posebno na HTML-u, CSS-u i JavaScriptu,
            ali također se interesiram za full-stack razvoj kako bih proširio
            svoje znanje i stekao dublje razumijevanje razvoja web aplikacija.
          </p>
          <p>
            Strastveno pratim nove tehnologije i alate koji oblikuju industriju,
            te uvijek nastojim primijeniti najbolje prakse u svom kodiranju.
            Moji projekti su motivirani stvaranjem web aplikacija koje su
            intuitivne, responzivne i prilagođene korisnicima. Volim rješavati
            složene probleme i stvarati rješenja koja imaju pravi utjecaj.
          </p>
          <p>
            Stalno ulažem u svoje vještine i vjerujem u važnost neprekidnog
            učenja. Cilj mi je kombinirati svoje tehničko znanje s kreativnim
            pristupom kako bih stvarao web aplikacije koje su ne samo
            funkcionalne, već i estetski ugodne.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
