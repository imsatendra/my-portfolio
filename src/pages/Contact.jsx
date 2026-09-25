import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = e => { e.preventDefault(); setSent(true); e.currentTarget.reset(); setTimeout(()=>setSent(false), 4000); };

  return (
    <div className="container-page section">
      <SectionTitle eyebrow="Contact" title="Let's build something useful." description="This frontend form is ready for API integration later."/>
      <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
        <div className="space-y-4">
          <div className="glass rounded-2xl p-6"><Mail className="text-cyan-300"/><p className="mt-4 font-semibold">Email</p><a className="mt-1 block text-slate-400 hover:text-cyan-300" href="mailto:hello@example.com">hello@example.com</a></div>
          <div className="glass rounded-2xl p-6"><MapPin className="text-cyan-300"/><p className="mt-4 font-semibold">Location</p><p className="mt-1 text-slate-400">India</p></div>
          <div className="flex gap-3"><a href="https://github.com/" target="_blank" rel="noreferrer" className="btn-secondary"><Github size={18}/> GitHub</a><a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="btn-secondary"><Linkedin size={18}/> LinkedIn</a></div>
        </div>
        <motion.form onSubmit={submit} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="glass rounded-3xl p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm text-slate-300">Name<input required className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan-400/50" placeholder="Your name"/></label>
            <label className="text-sm text-slate-300">Email<input required type="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan-400/50" placeholder="you@example.com"/></label>
          </div>
          <label className="mt-5 block text-sm text-slate-300">Subject<input required className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan-400/50" placeholder="Project discussion"/></label>
          <label className="mt-5 block text-sm text-slate-300">Message<textarea required rows="6" className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan-400/50" placeholder="Tell me about your project..."/></label>
          <button className="btn-primary mt-6"><Send size={18}/> Send Message</button>
          {sent && <p className="mt-4 text-sm text-emerald-300">Message captured in the frontend demo. Backend can be connected later.</p>}
        </motion.form>
      </div>
    </div>
  );
}