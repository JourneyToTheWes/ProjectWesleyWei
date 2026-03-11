const About = () => {
    return (
        <section id="about" className="py-24 bg-background">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-content">About</h2>
                    <p className="text-sm text-muted">
                        A little more about what I enjoy building
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="aspect-square bg-card border rounded-xl flex items-center justify-center">
                        Portrait
                    </div>

                    <div className="space-y-6">
                        <p>
                            I'm a software engineer who enjoys building systems
                            at the intersection of performance, usability, and
                            creativity.
                        </p>

                        <p className="text-muted">
                            I’m currently exploring the limits of web
                            performance by building a custom spreadsheet engine
                            from the ground up using Rust and WebAssembly. This
                            project serves as the foundation for Milkbread,
                            where I’m integrating AI-assisted tooling to help
                            users generate sophisticated financial models
                            seamlessly. My work on Milkbread reflects a broader
                            interest in the rapid advancements of AI; I’m
                            focused on utilizing its specialized expertise to
                            build software that isn't just automated, but
                            genuinely helpful and intuitive for complex tasks.
                        </p>

                        <div>
                            <h3 className="font-semibold mb-2">Focus Areas</h3>
                            <ul className="list-disc list-inside text-muted">
                                <li>Interactive web applications</li>
                                <li>Developer tooling</li>
                                <li>Performance-driven systems</li>
                                <li>Creative technical projects</li>
                            </ul>
                        </div>

                        <p className="text-sm text-muted">
                            Outside of engineering I enjoy cooking, bowling,
                            fitness, and experimenting with creative technical
                            projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
