// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      // Base padding for mobile (px-4), increasing on larger screens (sm:px-6, lg:px-8)
      // py-20 ensures good vertical spacing on all devices.
      // min-h-screen makes sure it takes at least the full viewport height.
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8 overflow-hidden text-foreground"
    >
      <motion.div
        className="text-center z-10 max-w-full sm:max-w-xl lg:max-w-3xl mx-auto p-4 sm:p-6 md:p-8"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          // Font size adapts: 4xl on mobile, 6xl on medium screens.
          // leading-tight helps prevent excessive line height with large text.
          // mb-4 adds spacing below the heading.
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {["Hi,", "I'm", "Arpan", "Khan"].map((word, i) => (
            <motion.span
              key={i}
              // inline-block allows margin-right to work correctly.
              className={`inline-block mr-2 ${
                i === 2 ? "text-primary" : i === 3 ? "text-gradient" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          // Font size adapts: lg on mobile, xl on medium, 2xl on large.
          // max-w-prose limits line length for readability on wide screens.
          // mx-auto centers the paragraph content within its container.
          // mt-4 for top margin, mb-8 for bottom margin (to button).
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground mt-4 mb-8 font-medium max-w-prose mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
        >
          {/* CRITICAL FOR MOBILE: This span relies on `white-space: normal;` in your CSS
              to allow the text to wrap. The `overflow-hidden` and `border-r-2` are for the typing effect.
              `block mx-auto` ensures the text is centered even if it wraps onto multiple lines. */}
          <span className="animate-typing overflow-hidden border-r-2 border-muted pr-1 block mx-auto">
            A passionate coder & tech enthusiast turning ideas into real-world
            solutions.
          </span>
        </motion.p>

        <motion.div
          className="pt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        >
          <a
            href="#project"
            className="cosmic-button transition-transform duration-300 animate-pulse"
          >
            View My Projects
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator positioned absolutely at the bottom, centered. */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, -10, 0] }} // Gentle floating animation
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-muted-foreground text-sm mb-2 animate-pulse">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.div>
    </section>
  );
};