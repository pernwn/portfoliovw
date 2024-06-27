import React, { useEffect, useRef } from "react";
import { FieldCard } from "./ui/cards";
import { faCode, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { SocialsButton } from "./ui/buttons";
import styles from "@/app/style";



const DynamicColorH3 = ({ title, text }) => {
  const h3Ref = useRef(null);

  useEffect(() => {
    const h3 = h3Ref.current;
    if (h3) {
      const words = h3.innerText.split(' ');
      if (words.length > 1) {
        const lastWords = words.slice(-2).join(' ');
        const firstPart = words.slice(0, -2).join(' ');

        h3.innerHTML = `${firstPart} <span class="text-accent">${lastWords}</span>`;
      }
    }
  }, [title]);

  return (
    <div>
      <h3 ref={h3Ref} className="dynamic-color">
        {title}
      </h3>
      <p>{text}</p>
    </div>
  );
};



const Skills = () => {
  return (
    <section className="space-y-20">
      <div className="flex gap-12 sm:flex-col sm:gap-8">
        <FieldCard
          icon={faCode}
          title="Web Development"
          content="Lorem ipsum dolor sit amet consectetur. Orci diam vestibulum amet venenatis ut. Mauris senectus ut porttitor massa convallis arcu in lacus sit."
        />
        <FieldCard
          icon={faFigma}
          title="User Interface"
          content="Lorem ipsum dolor sit amet consectetur. Orci diam vestibulum amet venenatis ut. Mauris senectus ut porttitor massa convallis arcu in lacus sit."
        />
        <FieldCard
          icon={faUser}
          title="User Experience"
          content="Lorem ipsum dolor sit amet consectetur. Orci diam vestibulum amet venenatis ut. Mauris senectus ut porttitor massa convallis arcu in lacus sit."
        />
      </div>
      <div className={`${styles.flexCenter}`}>
        <span>
          <DynamicColorH3
        title="My professional toolbox"
        text="Lorem ipsum dolor sit amet consectetur. Orci diam vestibulum amet venenatis ut."
      />
        <skillIcons/>
        </span>
        <SocialsButton icon={faFigma} />
      </div>
    </section>
  );
};

export default Skills;
