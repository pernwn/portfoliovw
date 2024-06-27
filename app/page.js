import React from "react";

import Hero from "./lib/comps/hero";
import Skills from "./lib/comps/skills";
import styles from "./style";


const Page = () => {
  return (
    <section className="flex flex-col space-y-12">
      <Hero />
      <Skills/>
    </section>
  );
};

export default Page;
