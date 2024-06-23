import React from "react";

import Hero from "./lib/comps/hero";
import Skills from "./lib/comps/skills";
import styles from "./style";


const Page = () => {
  return (
    <main className={`pt-40 ${styles.padding}`}>
      <Hero />
      <Skills/>
    </main>
  );
};

export default Page;
