import Button from "./ui/Button";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center py-24 bg-gradient-to-b from-background to-surface">
            <div className="max-w-5xl mx-auto px-6">
                <p className="text-accent mb-4">Hi, I'm</p>

                <h1 className="text-6xl font-bold tracking-tight mb-6">
                    Wesley Wei
                </h1>
                <h2 className="text-2xl text-muted mb-6">
                    Full-Stack Software Engineer
                </h2>

                <p className="text-lg max-w-xl mb-10">
                    I build high-performance web applications, interactive
                    tools, and modern developer platforms.
                </p>

                <div className="flex gap-4">
                    <Button href="#projects" variant="primary">
                        View Projects
                    </Button>

                    <Button
                        href="https://github.com/JourneyToTheWes"
                        variant="outline"
                        external
                    >
                        GitHub
                    </Button>
                </div>

                <p className="text-sm text-muted mt-10">
                    React • TypeScript • Rust • WebAssembly • Vite
                </p>
            </div>
        </section>
    );
};

export default Hero;
