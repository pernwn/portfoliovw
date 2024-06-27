import React from "react";

import Hero from "./lib/comps/hero";
import Skills from "./lib/comps/skills";
import styles from "./style";


const Page = () => {
  return (
    <main className={`pt-[14%] sm:pt-[32%] ${styles.padding}`}>
      <Hero />
      <Skills/>
    </main>
  );
};

export default Page;
