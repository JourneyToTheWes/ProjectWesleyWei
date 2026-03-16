import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import Button from "./ui/Button";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const links = [
        { name: "About", href: "/#about" },
        { name: "Projects", href: "/#projects" },
        { name: "Experience", href: "/#work-experience" },
        { name: "Contact", href: "/#contact" },
    ];

    const renderLightDarkToggle = () => {
        return (
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
                <AnimatePresence mode="wait" initial={false}>
                    {theme === "dark" ? (
                        <motion.div
                            key="moon"
                            initial={{ rotate: 0, opacity: 0 }} // starts upright
                            animate={{ rotate: 360, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <Moon className="w-4 h-4" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ rotate: 0, opacity: 0 }}
                            animate={{ rotate: 360, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <Sun className="w-4 h-4" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Button>
        );
    };

    return (
        <nav
            className={clsx(
                "fixed top-0 w-full z-50 backdrop-blur",
                !open ? "bg-background/80" : "bg-background",
                !open && "border-b",
            )}
        >
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo / Name */}
                <HashLink to="/#" className="font-semibold text-content">
                    WestWay
                </HashLink>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-6 text-sm">
                    {links.map((link) => (
                        <HashLink
                            key={link.name}
                            smooth
                            to={link.href}
                            className="text-muted hover:text-content transition"
                        >
                            {link.name}
                        </HashLink>
                    ))}
                    {renderLightDarkToggle()}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    <motion.div
                        animate={{ rotate: open ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </motion.div>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden border-b bg-background overflow-hidden"
                    >
                        <div className="flex flex-col items-center gap-4 py-6">
                            {links.map((link) => (
                                <HashLink
                                    key={link.name}
                                    smooth
                                    to={link.href}
                                    onClick={() => setOpen(false)}
                                    className="text-muted hover:text-content transition"
                                >
                                    {link.name}
                                </HashLink>
                            ))}
                            {renderLightDarkToggle()}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
