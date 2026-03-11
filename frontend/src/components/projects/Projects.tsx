import ProjectTimeline from "./ProjectTimeline";
const projects = [
    {
        id: "project-wesley-wei",
        title: "Project Wesley Wei",
        date: "Dec 2017 – Present",
        year: 2017,
    },
    {
        id: "mbt",
        title: "MBT",
        date: "May 2023 - Present",
        year: 2023,
    },
    {
        id: "milkbread",
        title: "Milkbread Spreadsheet Engine",
        date: "Aug 2025 - Present",
        year: 2025,
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
    return (
        <section id="projects" className="py-24 bg-surface">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-content">
                    Featured Projects
                </h2>
                <ProjectTimeline projectsByYear={groupedProjects} />
            </div>
        </section>
    );
};

export default Projects;
