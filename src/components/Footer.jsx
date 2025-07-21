import { ArrowUp } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const Footer = () => {
return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
    <p className="text-sm text-muted-foreground">
        &copy; {new Date().toDateString()}, Arpan Khan. All rights reserved
    </p>

    <motion.a
        href="#home"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary transition-colors"
        whileHover={{ scale: 1.2, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <ArrowUp />
    </motion.a>
    </footer>
);
};
