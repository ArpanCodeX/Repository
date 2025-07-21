import {
Instagram,
Linkedin,
Mail,
MapPin,
Phone,
Send,
Twitch,
Twitter,
} from "lucide-react"
import { cn } from "../lib/Utils"
import { useToast } from "../hooks/use-toast"
import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export const ContactSection = () => {
const { toast } = useToast()
const [isSubmitting, setIsSubmitting] = useState(false)

const handleSubmit = async (e) => {
e.preventDefault()
setIsSubmitting(true)

const formData = new FormData(e.target)
formData.append("access_key", "989b8204-36f1-4d00-9f9f-cd150e872cf4")

const object = Object.fromEntries(formData)
const json = JSON.stringify(object)

try {
    const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: json,
    }).then((res) => res.json())

    if (res.success) {
    toast({
        title: "Message Sent!",
        description:
        "Thank you for reaching out. I will get back to you as soon as possible.",
    })
    e.target.reset()
    } else {
    toast({
        title: "Failed!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
    })
    }
} catch (error) {
    toast({
    title: "Error!",
    description: "Network error. Please try again.",
    variant: "destructive",
    })
}

setIsSubmitting(false)
}


const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
    }),
}

return (
    <motion.section
    id="contact"
    className="py-24 px-4 relative bg-secondary/30"
    initial="hidden"
    whileInView="visible"
    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    viewport={{ once: false, amount: 0.3 }}
    >
    <motion.div
        className="container mx-auto max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
        <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        variants={fadeUp}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        >
        Get in <span className="text-primary">Touch</span>
        </motion.h2>

        <motion.p
        className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        variants={fadeUp}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        >
        We would love to hear from you! Fill out the form below and we will
        get back to you as soon as possible.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <motion.div
            className="space-y-8"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
        >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            {[{
            icon: <Mail className="w-6 h-6 text-primary" />,
            label: "Email",
            link: "mailto:iamarpankhan@gmail.com",
            text: "iamarpankhan@gmail.com"
            }, {
            icon: <Phone className="w-6 h-6 text-primary" />,
            label: "Phone",
            link: "tel:+919748457221",
            text: "+91 9748457221"
            }, {
            icon: <MapPin className="w-6 h-6 text-primary" />,
            label: "Location",
            link: null,
            text: "Kolkata, Hooghly"
            }].map((item, i) => (
            <motion.div
                key={i}
                className="flex items-start space-x-4"
                variants={fadeUp}
                custom={3 + i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                <div className="p-3 rounded-full bg-primary/10">
                {item.icon}
                </div>
                <div>
                <h4 className="font-medium">{item.label}</h4>
                {item.link ? (
                    <a
                    href={item.link}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                    {item.text}
                    </a>
                ) : (
                    <span className="text-muted-foreground">{item.text}</span>
                )}
                </div>
            </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
            className="py-8"
            variants={fadeUp}
            custom={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            >
            <h4 className="mb-2">Connect With Me</h4>
            <motion.div className="flex space-x-4 justify-center">
            {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/arpankhan/" },
                { icon: Instagram, href: "https://www.instagram.com/arpan_khan_" },
                { icon: Twitter, href: "https://twitter.com/iamarpankhan" },
                { icon: Twitch, href: "https://www.twitch.tv/arpan0095" },
            ].map(({ icon: Icon, href }, i) => (
                <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                >
                <Icon className="text-primary" />
                </motion.a>
            ))}
            </motion.div>

            </motion.div>
        </motion.div>



        {/* Right Column - Contact Form */}
        <motion.div
            className="bg-card p-8 rounded-lg shadow-xs"
            variants={fadeUp}
            custom={7}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
        >
            <h3 className="text-2xl font-semibold mb-6">Send Me Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
            {[
                { id: "name", label: "Your Name", type: "text", placeholder: "Arpan Khan..." },
                { id: "email", label: "Your Email", type: "email", placeholder: "iamarpankhan@gmail.com" },
            ].map((input, i) => (
                <motion.div
                key={input.id}
                variants={fadeUp}
                custom={8 + i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                >
                <label htmlFor={input.id} className="block text-sm font-medium mb-2">
                    {input.label}
                </label>
                <input
                    type={input.type}
                    id={input.id}
                    name={input.id}
                    required
                    placeholder={input.placeholder}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
                </motion.div>
            ))}

            <motion.div
                variants={fadeUp}
                custom={10}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
                </label>
                <textarea
                id="message"
                name="message"
                required
                placeholder="Hello, I'd like to talk about..."
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                />
            </motion.div>

            <motion.button
                type="submit"
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
            >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
            </motion.button>
            </form>
        </motion.div>
        </div>
    </motion.div>
    </motion.section>
)
}
