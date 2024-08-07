"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { resume } from "../data/resume";
import { DynamicColorH3, PicCard } from "./ui/cards";
import Image from "next/image";

export default function Resume() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-4">
      <DynamicColorH3 heading="Resume" title="Experience & Knowledge" />
      <div className="w-full max-w-full">
        <TabGroup>
          <TabList className="flex gap-4 overflow-x-auto">
            {resume.map(({ label }) => (
              <Tab
                key={label}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                <h4>{label}</h4>
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-8 w-[100vw]">
            <PicCard pic="/assets/images/stock1.jpg"/>

            {resume.map(({ label, posts }) => (
              <TabPanel key={label} className="rounded-xl bg-white/5 p-3 w-2/3">
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5 group"
                    >
                      <a href="#" className="font-semibold text-white flex">
                        <span className="absolute inset-0" />
                        <div className="flex flex-col border-b-2 border-primary-200 rounded-md p-4 group-hover:border-transparent">
                          <h3>{post.title}</h3>
                          <p>{post.description}</p>
                        </div>
                        

                        {/* <Image
                          layout="fill"
                          objectFit="contain"
                          alt={posts.title}
                          src="/profile.png"
                        /> */}
                      </a>
                      {/* <ul 
                        className="flex gap-2 text-white/50"
                        aria-hidden="true"
                      > 
                        <li>{post.date}</li> TODO: - Tilføjh ikoner eller liste af skills til hver
                        <li aria-hidden="true">&middot;</li>
                      </ul> */}
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
