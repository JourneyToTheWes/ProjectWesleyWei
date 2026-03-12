import { Instagram, Youtube } from "lucide-react";
import Button from "./ui/Button";

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-surface">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6 text-content">
                    Contact
                </h2>

                <p className="text-lg text-muted max-w-xl mx-auto mb-12">
                    Interested in working together or just want to say hi? Feel
                    free to reach out.
                </p>

                <div className="flex justify-center gap-6 flex-wrap mb-8">
                    {/* Primary CTA buttons */}
                    <Button
                        href="mailto:wesley631w@email.com"
                        variant="primary"
                    >
                        Email
                    </Button>
                    <Button
                        href="https://linkedin.com/in/wes-wei"
                        variant="primary"
                        external
                    >
                        LinkedIn
                    </Button>
                    <Button
                        href="https://github.com/JourneyToTheWes"
                        variant="primary"
                        external
                    >
                        GitHub
                    </Button>
                </div>

                {/* Secondary circular social links */}
                <div className="flex justify-center gap-4 flex-wrap">
                    <Button
                        href="https://www.youtube.com/channel/UCHSsr_f2vnk1p5YlCfj82lg"
                        variant="outline"
                        size="icon"
                        external
                    >
                        <Youtube />
                    </Button>
                    <Button
                        href="https://www.instagram.com/journeytothewes/"
                        variant="outline"
                        size="icon"
                        external
                    >
                        <Instagram />
                    </Button>
                </div>

                <p className="text-xs text-muted mt-16">
                    © {new Date().getFullYear()} Wesley Wei — Built with React &
                    TypeScript
                </p>
            </div>
        </section>
    );
};

export default Contact;
