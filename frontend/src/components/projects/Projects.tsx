import { useState } from "react";
import ProjectPreview from "./ProjectPreview";
import ProjectTimeline from "./ProjectTimeline";
import type { Project } from "../../types/project";
import { motion } from "framer-motion";

const projects = [
    {
        id: "project-wesley-wei",
        title: "Project Wesley Wei",
        date: "Dec 2017 – Present",
        year: 2017,
        summary:
            "Personal developer portfolio featuring a timeline UI and interactive compass visualization.",
        tech: ["React", "Node.js", "MongoDB"],
        image: "",
    },
    {
        id: "project-wesley-wei",
        title: "Project Wesley Wei",
        date: "Dec 2017 – Present",
        year: 2017,
        summary:
            "Personal developer portfolio featuring a timeline UI and interactive compass visualization.",
        tech: ["React", "Node.js", "MongoDB"],
        image: "",
    },
    {
        id: "project-wesley-wei",
        title: "Project Wesley Wei",
        date: "Dec 2017 – Present",
        year: 2017,
        summary:
            "Personal developer portfolio featuring a timeline UI and interactive compass visualization.",
        tech: ["React", "Node.js", "MongoDB"],
        image: "",
    },
    {
        id: "project-wesley-wei",
        title: "Project Wesley Wei",
        date: "Dec 2017 – Present",
        year: 2017,
        summary:
            "Personal developer portfolio featuring a timeline UI and interactive compass visualization.",
        tech: ["React", "Node.js", "MongoDB"],
        image: "",
    },
    {
        id: "mbt",
        title: "MBT",
        date: "May 2023 - Present",
        year: 2023,
        summary:
            "Sports performance tracking mobile Android app designed to help players improve their game in real time through sports metric utilization.",
        tech: ["Kotlin", "Compose", "YOLOv8"],
        image: "",
    },
    {
        id: "milkbread",
        title: "Milkbread Spreadsheet Engine",
        date: "Aug 2025 - Present",
        year: 2025,
        summary:
            "Custom spreadsheet engine supporting thousands of reactive cells with Rust-powered formula evaluation.",
        tech: ["React", "TypeScript", "Rust", "WebAssembly"],
        image: "https://picsum.photos/200/300",
        links: {
            demo: "#",
        },
    },
];

const groupedProjects = projects.reduce<Record<number, typeof projects>>(
    (acc, project) => {
        if (!acc[project.year]) {
            acc[project.year] = [];
        }

        acc[project.year].push(project);
        return acc;
    },
    {},
);
const Projects = () => {
    const [activeProject, setActiveProject] = useState<Project | null>(
        projects[2],
    );

    return (
        <section id="projects" className="py-24 bg-surface">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-12 flex flex-col gap-2">
                    <h2 className="text-3xl font-bold text-content">
                        Featured Projects
                    </h2>
                    <p className="text-sm text-muted">
                        Hover over a project to preview
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <ProjectTimeline
                        projectsByYear={groupedProjects}
                        onProjectHover={(project) => setActiveProject(project)}
                    />
                    <div className="hidden lg:block sticky top-24 self-start">
                        {activeProject && (
                            <motion.div
                                key={activeProject.id}
                                initial={{ opacity: 0, y: -8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <ProjectPreview activeProject={activeProject} />
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
