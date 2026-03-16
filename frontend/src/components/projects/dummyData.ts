import type { Project } from "../../types/project";

export const projects: Project[] = [
    {
        slug: "milkbread",

        title: "Milkbread",

        timeline: {
            start: "2025-08",
            display: "Aug 2025 – Present",
        },

        year: 2025,

        summary:
            "Custom spreadsheet engine supporting thousands of reactive cells with Rust-powered formula evaluation.",

        tech: ["React", "TypeScript", "Rust", "WebAssembly"],

        previewImage: "https://picsum.photos/1200/600",

        links: {
            github: "#",
            demo: "#",
        },

        sections: [
            {
                type: "text",
                title: "Overview",
                content:
                    "Milkbread is an AI powered, high-performance spreadsheet engine designed to create financial models while handling thousands of reactive cells efficiently using a Rust-based computation engine compiled to WebAssembly.",
            },

            {
                type: "text",
                title: "Problem",
                content:
                    "Financial analyst spend loads of their time creating financial statements and forecasting data. Spreadsheet applications often struggle with performance when large dependency graphs are recalculated. Traditional implementations recompute entire trees of cells unnecessarily.",
            },

            {
                type: "architecture",
                title: "System Architecture",
                diagram: "https://picsum.photos/1000/500",
                points: [
                    "React UI layer renders spreadsheet grid",
                    "WebAssembly bridge connects JS to Rust engine",
                    "Rust engine parses and evaluates formulas",
                    "Dependency graph manages cell relationships",
                    "Open AI custom agent creates financial models in spreadsheet format",
                ],
            },

            {
                type: "feature-list",
                title: "Technical Highlights",
                features: [
                    "Rust formula evaluator compiled to WebAssembly",
                    "Handle speadsheet data with ease using custom built-in spreadsheet engine",
                    "Financial AI Agent designed to be a financial specialist",
                ],
            },

            {
                type: "metrics",
                title: "Results",
                metrics: [
                    { label: "Cells Supported", value: "10,000+" },
                    { label: "Recalculation Time", value: "3ms" },
                    { label: "Engine Language", value: "Rust" },
                ],
            },

            {
                type: "gallery",
                title: "Screenshots",
                images: [
                    "https://picsum.photos/500/300",
                    "https://picsum.photos/501/300",
                    "https://picsum.photos/502/300",
                    "https://picsum.photos/503/300",
                ],
            },
        ],
    },
    // {
    //     id: "project-wesley-wei",
    //     title: "Project Wesley Wei",
    //     date: "Dec 2017 – Present",
    //     year: 2017,
    //     summary:
    //         "Personal developer portfolio featuring a timeline UI and interactive compass visualization.",
    //     tech: ["React", "Node.js", "MongoDB"],
    //     image: "",
    // },
    // {
    //     id: "project-wesley-wei",
    //     title: "Project Wesley Wei",
    //     date: "Dec 2017 – Present",
    //     year: 2017,
    //     summary:
    //         "Personal developer portfolio featuring a timeline UI and interactive compass visualization.",
    //     tech: ["React", "Node.js", "MongoDB"],
    //     image: "",
    // },
    // {
    //     id: "project-wesley-wei",
    //     title: "Project Wesley Wei",
    //     date: "Dec 2017 – Present",
    //     year: 2017,
    //     summary:
    //         "Personal developer portfolio featuring a timeline UI and interactive compass visualization.",
    //     tech: ["React", "Node.js", "MongoDB"],
    //     image: "",
    // },
    // {
    //     id: "mbt",
    //     title: "MBT",
    //     date: "May 2023 - Present",
    //     year: 2023,
    //     summary:
    //         "Sports performance tracking mobile Android app designed to help players improve their game in real time through sports metric utilization.",
    //     tech: ["Kotlin", "Compose", "YOLOv8"],
    //     image: "",
    // },
    // {
    //     id: "milkbread",
    //     title: "Milkbread Spreadsheet Engine",
    //     date: "Aug 2025 - Present",
    //     year: 2025,
    //     summary:
    //         "Custom spreadsheet engine supporting thousands of reactive cells with Rust-powered formula evaluation.",
    //     tech: ["React", "TypeScript", "Rust", "WebAssembly"],
    //     image: "https://picsum.photos/200/300",
    //     links: {
    //         demo: "#",
    //     },
    // },
];
