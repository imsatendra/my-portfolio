import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import React from "react";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filtered = useMemo(
    () =>
      projects.filter((p) => {
        const matchesCategory = category === "All" || p.category === category;
        const text =
          `${p.title} ${p.description} ${p.technologies.join(" ")}`.toLowerCase();
        return matchesCategory && text.includes(search.toLowerCase());
      }),
    [search, category],
  );

  return (
    <div className="container-page section">
      <SectionTitle
        eyebrow="Portfolio"
        title="Selected projects"
        description="Explore projects by category or search by technology."
      />
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-md">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            size={18}
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-11 pr-4 outline-none placeholder:text-slate-600 focus:border-cyan-400/50"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-2 text-sm ${category === c ? "bg-cyan-400 text-slate-950" : "border border-white/10 bg-white/5 text-slate-300"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      {filtered.length ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      ) : (
        <div className="glass rounded-3xl p-12 text-center text-slate-400">
          No projects found.
        </div>
      )}
    </div>
  );
}
