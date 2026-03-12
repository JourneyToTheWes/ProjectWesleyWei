import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import Button from "./ui/Button";

const Navbar = () => {
    const { toggleTheme } = useTheme();

    const links = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#work-experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-border">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo / Name */}
                <a href="#" className="font-semibold text-content">
                    WestWay
                </a>

                {/* Links */}
                <div className="flex items-center gap-6 text-sm">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-muted hover:text-content transition"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="relative"
                    >
                        <Sun className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
