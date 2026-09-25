import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function ProjectCard({ project }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="glass overflow-hidden rounded-3xl">
      <div className={`relative h-48 bg-gradient-to-br ${project.color} p-6`}>
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative flex h-full items-end justify-between">
          <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-cyan-200">{project.category}</span>
          <span className="text-6xl font-black text-white/10">{"</>"}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map(t => <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{t}</span>)}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <Link to={`/projects/${project.id}`} className="btn-primary px-4 py-2 text-sm">Details <ArrowUpRight size={16}/></Link>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-sm"><Github size={16}/> GitHub</a>
        </div>
      </div>
    </motion.article>
  );
}