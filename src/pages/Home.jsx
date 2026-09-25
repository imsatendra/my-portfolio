import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import React, { useState } from "react";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="container-page relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-20 lg:grid-cols-[1.2fr_.8fr]">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-sm text-cyan-200">
              <Sparkles size={15}/> Available for frontend & full-stack opportunities
            </div>
            <p className="eyebrow">MERN Full Stack Developer</p>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
              Building <span className="gradient-text">modern</span><br/> web experiences.
            </h1>
            <p className="muted mt-7 max-w-2xl text-lg">
              Hi, I'm Satendra Kumar. I build responsive, scalable and user-focused applications using React, Node.js, Express and MongoDB.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">View Projects <ArrowRight size={18}/></Link>
              <a href="/resume.pdf" download className="btn-secondary"><Download size={18}/> Download Resume</a>
            </div>
            <div className="mt-8 flex gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 hover:bg-white/10"><Github size={19}/></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 hover:bg-white/10"><Linkedin size={19}/></a>
              <a href="mailto:hello@example.com" className="rounded-full border border-white/10 p-3 hover:bg-white/10"><Mail size={19}/></a>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:.8}} className="mx-auto w-full max-w-md">
            <div className="glow glass rounded-[2rem] p-5">
              <div className="rounded-[1.5rem] bg-slate-900 p-7">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm text-slate-400">developer.json</span>
                  <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40"/>
                </div>
                <pre className="overflow-x-auto text-sm leading-7 text-slate-300"><code>{`{
  "name": "Satendra Kumar",
  "role": "MERN Developer",
  "experience": "4.5+ years",
  "frontend": [
    "React",
    "JavaScript",
    "Redux Toolkit",
    "Tailwind"
  ],
  "backend": [
    "Node.js",
    "Express",
    "MongoDB"
  ]
}`}</code></pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-5 sm:grid-cols-3">
          {[["4.5+", "Years Experience"], ["3.5", "Years at TCS"], ["1", "Year at TechSunset"]].map(([n,l]) => (
            <div key={l} className="glass rounded-2xl p-6"><p className="text-3xl font-extrabold text-cyan-300">{n}</p><p className="mt-2 text-sm text-slate-400">{l}</p></div>
          ))}
        </div>
      </section>

      <section className="section border-y border-white/10">
        <div className="container-page">
          <SectionTitle eyebrow="Selected Work" title="Projects that solve real problems." description="A selection of frontend and MERN applications designed with reusable components and practical product workflows."/>
          <div className="grid gap-6 md:grid-cols-2">{projects.slice(0,4).map(p => <ProjectCard key={p.id} project={p}/>)}</div>
          <div className="mt-10 text-center"><Link to="/projects" className="btn-secondary">View all projects <ArrowRight size={17}/></Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionTitle eyebrow="Tech Stack" title="Tools I work with."/>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {skills.map(s => <div key={s.name} className="glass rounded-2xl p-5"><div className="text-xl font-bold">{s.icon}</div><p className="mt-3 font-semibold">{s.name}</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-cyan-400" style={{width:`${s.level}%`}}/></div></div>)}
          </div>
        </div>
      </section>
    </>
  );
}