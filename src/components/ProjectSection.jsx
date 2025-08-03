import { ArrowRight, ExternalLink, Github } from "lucide-react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const projects = [
{
    id: 1,
    title: "Password Generator",
    description: "A simple password generator that generates a random password",
    image: "/Projects/image.png",
    tags: ["HTML/CSS", "JavaScript"],
    demoUrl: "https://makepasswords.vercel.app/",
    githubUrl: "https://github.com/ArpanCodeX/PasswordGenerator-",
},
{
    id: 2,
    title: "Color-Picker",
    description: "A simple tool that lets users select and apply custom colors using a visual interface",
    image: "/Projects/image copy.png",
    tags: ["HTML/CSS", "JavaScript"],
    demoUrl: "https://arpancodex.github.io/Color-Picker/",
    githubUrl: "https://github.com/ArpanCodeX/Color-Picker",
},
{
    id: 3,
    title: "Age Calculator",
    description: "A simple tool that calculates age based on the user's date of birth",
    image: "/Projects/image copy 2.png",
    tags: ["HTML/CSS", "JavaScript"],
    demoUrl: "https://arpancodex.github.io/Age-Calculator/",
    githubUrl: "https://github.com/ArpanCodeX/Age-Calculator",
},
]

const containerVariants = {
hidden: {},
visible: {
    transition: {
    staggerChildren: 0.2,
    },
},
}

const cardVariants = {
hidden: { opacity: 0, y: 50 },
visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
},
}

export const ProjectSection = () => {
return (
    <section id="project" className="scroll-mt-20 py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
        <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
        Featured <span className="text-primary"> Projects </span>
        </motion.h2>

        <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
        Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </motion.p>

        <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
        {projects.map((project, key) => (
            <motion.div
            variants={cardVariants}
            key={key}
            className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
            >
            <div className="h-48 overflow-hidden">
                <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                whileHover={{ scale: 1.1 }}
                />
            </div>
            <div className="p-6">
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap gap-2 mb-4"
                >
                {project.tags.map((tag, i) => (
                    <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                    {tag}
                    </motion.span>
                ))}
                </motion.div>

                <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-semibold mb-1 text-center"
                >
                {project.title}
                </motion.h3>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-sm mb-4"
                >
                {project.description}
                </motion.p>

                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-between items-center"
                >
                <div className="flex space-x-3">
                    <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                    <ExternalLink size={20} />
                    </a>
                    <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                    <Github size={20} />
                    </a>
                </div>
                </motion.div>
            </div>
            </motion.div>
        ))}
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center mt-12"
        >
        <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/arpancodex"
        >
            GitHub <ArrowRight size={16} />
        </a>
        </motion.div>
    </div>
    </section>
)
}
