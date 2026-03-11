import { useParams } from "react-router-dom";

export default function ProjectPage() {
    const { slug } = useParams();

    return (
        <div className="max-w-5xl mx-auto px-6 py-20">
            <h1 className="text-3xl font-bold mb-6">Project: {slug}</h1>
        </div>
    );
}
