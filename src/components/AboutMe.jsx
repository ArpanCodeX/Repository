import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const AboutMe = () => {
  const cards = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Web Development",
      desc: "Creating modern, responsive websites using HTML, CSS, JS, and frameworks.",
    },
    {
      icon: <User className="w-6 h-6 text-primary" />,
      title: "UI/UX Design",
      desc: "Designing intuitive user experiences with a focus on usability and accessibility.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Project Management",
      desc: "Coordinating tasks and timelines to deliver successful projects on time.",
    },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 shadow-lg p-6"
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold"
            >
              My Tech Journey
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base text-muted-foreground"
            >
              I'm a passionate programmer who loves solving real-world problems
              with clean, efficient code. I work with Python, C++, JavaScript,
              HTML, CSS, and frameworks like Next.js.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base text-muted-foreground"
            >
              Currently pursuing B.Tech in CSE (AI & ML) at Supreme Knowledge
              Foundation under MAKAUT. I’m always exploring new tools and
              technologies to bring ideas to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center"
            >
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                download
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition duration-300"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - CARDS */}
          <div className="grid grid-cols-1 gap-6 md:pl-6">
            {cards.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true }}
                className="gradient-border p-6 card-hover transition-transform hover:scale-[1.03] rounded-lg bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 animate-float">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
