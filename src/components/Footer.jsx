import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import React, { useState } from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-page flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold">Satendra Kumar</p>
          <p className="mt-1 text-sm text-slate-500">
            MERN Full Stack Developer
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-3 hover:bg-white/10"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-3 hover:bg-white/10"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:hello@example.com"
            className="rounded-full border border-white/10 p-3 hover:bg-white/10"
          >
            <Mail size={18} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-full border border-white/10 p-3 hover:bg-white/10"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
