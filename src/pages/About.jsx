import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { experience } from "../data/experience";
import { skills } from "../data/skills";
import React, { useState } from "react";

export default function About() {
  return (
    <div className="container-page section">
      <SectionTitle eyebrow="About Me" title="A developer focused on useful, maintainable software." description="I enjoy turning product requirements into clean interfaces and reliable application flows."/>
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div className="glass rounded-3xl p-7">
          <div className="grid h-20 w-20 place-items-center rounded-2xl bg-cyan-400 text-3xl font-black text-slate-950">SK</div>
          <h3 className="mt-6 text-2xl font-bold">Satendra Kumar</h3>
          <p className="mt-2 text-cyan-300">MERN Full Stack Developer</p>
          <p className="muted mt-5">I work across React-based frontend experiences and Node.js backend workflows. My focus is responsive UI, API integration, state management and practical problem solving.</p>
        </div>
        <div>
          <h3 className="mb-6 text-2xl font-bold">Experience</h3>
          <div className="space-y-5">
            {experience.map((e,i) => (
              <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} key={e.company} className="glass rounded-2xl p-6">
                <div className="flex flex-col justify-between gap-2 sm:flex-row"><div><h4 className="text-xl font-bold">{e.company}</h4><p className="text-cyan-300">{e.role}</p></div><span className="text-sm text-slate-500">{e.period}</span></div>
                <p className="muted mt-4">{e.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold">Core Skills</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{skills.map(s => <div key={s.name} className="glass rounded-2xl p-5"><div className="flex justify-between"><span className="font-semibold">{s.name}</span><span className="text-xs text-cyan-300">{s.level}%</span></div><div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-cyan-400" style={{width:`${s.level}%`}}/></div></div>)}</div>
      </div>
    </div>
  );
}