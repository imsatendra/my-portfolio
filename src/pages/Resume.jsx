import { Download, Briefcase, GraduationCap, Code2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import React, { useState } from "react";

export default function Resume() {
  return (
    <div className="container-page section">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionTitle eyebrow="Resume" title="Professional profile" description="A concise overview of my experience, technical skills and development focus."/>
        <a href="/resume.pdf" download className="btn-primary shrink-0"><Download size={18}/> Download PDF</a>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="glass rounded-3xl p-7 lg:col-span-2">
          <div className="flex items-center gap-3"><Briefcase className="text-cyan-300"/><h2 className="text-2xl font-bold">Experience</h2></div>
          <div className="mt-7 space-y-7">
            <div className="border-l border-cyan-400/40 pl-5"><h3 className="text-xl font-bold">TechSunset</h3><p className="text-cyan-300">MERN Full Stack Developer · 1 Year</p><p className="muted mt-3">React, Node.js, Express, MongoDB, REST APIs, reusable components and application workflows.</p></div>
            <div className="border-l border-cyan-400/40 pl-5"><h3 className="text-xl font-bold">TCS</h3><p className="text-cyan-300">Frontend / Application Developer · 3.5 Years</p><p className="muted mt-3">Enterprise application development and support, responsive UI, issue resolution and workflow improvements.</p></div>
          </div>
        </div>
        <div className="glass rounded-3xl p-7">
          <div className="flex items-center gap-3"><Code2 className="text-cyan-300"/><h2 className="text-2xl font-bold">Skills</h2></div>
          <div className="mt-6 flex flex-wrap gap-2">{["React","JavaScript","Redux Toolkit","Tailwind","Node.js","Express","MongoDB","REST API","Git","Axios"].map(s=><span key={s} className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300">{s}</span>)}</div>
        </div>
      </div>
      <div className="glass mt-6 rounded-3xl p-7">
        <div className="flex items-center gap-3"><GraduationCap className="text-cyan-300"/><h2 className="text-2xl font-bold">Professional Summary</h2></div>
        <p className="muted mt-4 max-w-4xl">Results-driven MERN Full Stack Developer with 4.5+ years of professional experience, focused on building responsive, high-performance web applications with React.js, JavaScript, Node.js, Express.js and MongoDB.</p>
      </div>
    </div>
  );
}