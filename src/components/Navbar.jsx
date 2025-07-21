import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/Utils";

const navItems = [
{ name: "Home", href: "#home" },
{ name: "About", href: "#about" },
{ name: "Skill", href: "#skill" },
{ name: "Project", href: "#project" },
{ name: "Contact", href: "#contact" },
];

export const Navbar = () => {
const [isScrolled, setIsScrolled] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);

useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (
    <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
        ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
        : "py-5"
    )}
    >
    <div className="container flex items-center justify-between">
        <motion.a
        className="text-xl font-bold text-primary flex items-center hover:scale-105 transition-transform"
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        >
        <span className="relative z-10 text-glow text-foreground hover:text-primary transition-colors duration-300">
            Arpan Khan
        </span>{" "}
        <span className="ml-2 text-muted-foreground">Portfolio</span>
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
        {navItems.map((item, key) => (
            <motion.a
            href={item.href}
            key={key}
            className="relative group text-foreground/80 hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            >
            {item.name}
            <span className="block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-300 bg-primary"></span>
            </motion.a>
        ))}
        </div>

        {/* Mobile button */}
        <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="md:hidden p-2 text-foreground z-50"
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
        {isMenuOpen && (
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
            className={cn(
                "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden"
            )}
            >
            <div className="flex flex-col items-center space-y-6">
                {navItems.map((item, key) => (
                <motion.a
                    key={key}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl text-foreground hover:text-primary transition-all duration-300"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.1 }}
                >
                    {item.name}
                </motion.a>
                ))}
            </div>
            </motion.div>
        )}
        </AnimatePresence>
    </div>
    </motion.nav>
);
};
