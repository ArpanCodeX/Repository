import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const roles = [
    "Web Developer Engineer",
  "MERN Stack Developer",
  "MEAN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Web Engineer",
  "JavaScript Developer",
  "React Developer",
  "Node.js Developer",
  "MongoDB Expert",
  "Angular Developer",
  "UI/UX Designer",
  "Performance Optimizer",
  "Clean Code Advocate",
  "Software Engineer",
  "Tech Enthusiast",
  "Problem Solver",
  "REST API Integrator",
  "Web Accessibility Advocate",
  "Responsive Design Expert",
  "Open Source Contributor",
  "Code Debugger",
  "Web Animation Lover",
  "Next.js Developer",
  ];
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenRoles = 1500;

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (isTyping) {
      if (charIndex < currentRole.length) {
        const timeout = setTimeout(() => {
          setText(currentRole.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), delayBetweenRoles);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setText(currentRole.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, erasingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, [charIndex, isTyping, roleIndex, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8 overflow-hidden text-foreground"
    >
      <motion.div
        className="text-center z-10 max-w-full sm:max-w-xl lg:max-w-3xl mx-auto p-4 sm:p-6 md:p-8"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
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
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground mt-4 mb-8 font-medium max-w-prose mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
        >
          <span className=" overflow-hidden border-r-2 border-muted pr-1 block mx-auto min-h-[2.5rem] animate-pulse">
            Passionate about being <span className="text-primary">{text}</span>
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

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, -10, 0] }}
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
