import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import React, { useState } from "react";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  if (!project) return <div className="container-page section"><h1 className="title">Project not found</h1><Link to="/projects" className="btn-primary mt-8">Back to Projects</Link></div>;

  return (
    <div className="container-page section">
      <Link to="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300"><ArrowLeft size={16}/> Back to projects</Link>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
        <div className={`grid min-h-72 place-items-center rounded-3xl bg-gradient-to-br ${project.color} grid-bg`}>
          <span className="text-8xl font-black text-white/10">{"</>"}</span>
        </div>
        <div className="mt-10 max-w-4xl">
          <p className="eyebrow">{project.category}</p>
          <h1 className="title">{project.title}</h1>
          <p className="muted mt-5 text-lg">{project.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">{project.technologies.map(t=><span key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">{t}</span>)}</div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn-secondary"><Github size={18}/> GitHub</a>
            <a href="#" className="btn-primary"><ExternalLink size={18}/> Live Demo</a>
          </div>
        </div>
        <div className="mt-14">
          <h2 className="text-2xl font-bold">Key Features</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">{project.features.map(f=><div key={f} className="glass rounded-2xl p-5"><CheckCircle2 className="text-cyan-300"/><p className="mt-3 font-medium">{f}</p></div>)}</div>
        </div>
      </motion.div>
    </div>
  );
}