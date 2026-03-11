import type { WorkExperienceType } from "../../types/workExperience";

export const workExperienceDummy: WorkExperienceType[] = [
    {
        company: "Freelance",
        role: "Software Engineer",
        startDate: "Mar 2024",
        endDate: "Present",
        experiences: [
            "Owning development of a modern web application including frontend, backend, and deployment",
            "Creating localized database and AI rendering on 3D models to improve decision-making for clients",
            "Setting up CI/CD pipelines to automate testing and deployment",
        ],
        tech: [
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind",
            "Figma",
            "CI/CD",
            "GitHub Actions",
        ],
    },
    {
        company: "SAP Concur",
        role: "Software Design Engineer Intern",
        startDate: "Jun 2022",
        endDate: "Aug 2022",
        experiences: [
            "Automated test artifact publishing through AWS CodeBuild pipelines to achieve cross-team visibility, increasing overall visibility by 30%",
            "Published Java project test artifacts in Amazon S3 and GCP buckets using machine-agnostic Docker environments",
        ],
        tech: [
            "DevOps",
            "CI/CD",
            "AWS",
            "GCP",
            "Docker",
            "Java",
            "Maven",
            "Bash",
        ],
    },
    {
        company: "Columbia University",
        role: "UI Design Teaching Assistant",
        startDate: "Jan 2022",
        endDate: "May 2022",
        experiences: [
            "Instructed and guided a cohort of 18 students in Columbia University's UI Design course (COMS 4170), focusing on foundational UI design principles and web development fundamentals",
            "Taught students how to build dynamic front-end experiences with JavaScript integrated with Flask backends",
            "Mentored multiple student groups through the full software development lifecycle for their final web application projects, resulting in a 100% pass rate",
        ],
        tech: ["Python", "Flask", "JavaScript", "HTML", "CSS", "UI/UX"],
    },
    {
        company: "Nintex",
        role: "Software Engineer (Fullstack)",
        startDate: "Jul 2019",
        endDate: "Jul 2021",
        experiences: [
            "Led development of an internal React component library under a tight 2-month deadline, now used across multiple Nintex products impacting over 10,000 global customers",
            "Developed a multi-file upload feature, intuitive UI validation, and several critical full-stack features for DocGen (Salesforce app)",
            "Contributed to transitioning a legacy application to a modern React client application improving scalability and maintainability",
            "Built CI/CD processes and optimized Node scripts while transitioning pipelines to Azure DevOps, reducing deployment time and improving frontend development efficiency",
        ],
        tech: [
            "React",
            "TypeScript",
            "MobX",
            "JavaScript",
            "CSS",
            "Salesforce",
            "Azure DevOps",
        ],
    },
    {
        company: "SAP Concur",
        role: "Software Developer Intern",
        startDate: "Jun 2018",
        endDate: "Dec 2018",
        experiences: [
            "Developed a Node.js GUI dashboard for database management, improving operational efficiency for the Concur database team",
            "Collaborated with multiple teams to improve monitoring capabilities and efficiency of the DBA team",
            "Revamped the dashboard to support AWS migration, enabling DevOps practices and faster incident response",
        ],
        tech: ["JavaScript", "Node.js", "Jade", "AWS", "Agile"],
    },
];
