import Button from "./ui/Button";
import Compass from "./ui/Compass";
import InteractiveHover from "./ui/InteractiveHover";
import Ocean from "./ui/Ocean";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center py-24 bg-gradient-to-b from-background to-surface">
            <div className="max-w-5xl mx-auto px-6 flex flex-col lg:flex-row items-center">
                <div className="flex-1">
                    <p className="text-accent mb-4">Hi, I'm</p>

                    <h1 className="text-6xl font-bold tracking-tight mb-6">
                        Wesley Wei
                    </h1>
                    <h2 className="text-2xl text-muted mb-6">
                        Full-Stack Software Engineer
                    </h2>

                    <p className="text-lg max-w-xl mb-10">
                        I build high-performance web applications, interactive
                        developer tools, and modern browser-based platforms.
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

                <div className="relative lg:ml-10 mt-10 lg:mt-0 flex-shrink-0">
                    <Ocean width={250} height={250} color={"primary"} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <InteractiveHover size={225}>
                            <Compass
                                size={225}
                                faceColor="none"
                                borderColor="content"
                                needleColor="content"
                                needleOutlineColor="content"
                                centerPinColor="primary"
                                tickColor="content"
                                majorTickColor="content"
                                labelColor="content"
                            />
                        </InteractiveHover>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
