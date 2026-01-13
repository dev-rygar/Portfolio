import { motion } from "framer-motion";
import { LayoutTemplate, Figma, ListTodo, BrainCircuit, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import WorkWithMe from "../components/WorkWithMe";

export default function Services() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    const services = [
        {
            title: "Custom Website Creation",
            description: "From portfolio sites to comprehensive company websites and cafe landing pages. I build pixel-perfect, responsive, and accessible web experiences tailored to your brand.",
            icon: LayoutTemplate,
            gradient: "from-blue-500/20 to-cyan-500/20",
            border: "hover:border-blue-500/50",
        },
        {
            title: "Figma to Frontend",
            description: "Have a design ready? I translate your Figma, Adobe XD, or Sketch designs into clean, maintainable, and interactive React code with 100% visual fidelity.",
            icon: Figma,
            gradient: "from-purple-500/20 to-pink-500/20",
            border: "hover:border-purple-500/50",
        },
        {
            title: "Backlog Reduction",
            description: "Is your ticket backlog growing out of control? I can jump in as an extension of your team to squash bugs, implement features, and help you hit your shipping deadlines.",
            icon: ListTodo,
            gradient: "from-amber-500/20 to-orange-500/20",
            border: "hover:border-amber-500/50",
        },
        {
            title: "Technical Consultation",
            description: "Need advice on your current stack, performance optimization, or architectural decisions? I provide expert auditing and guidance to improve your web application.",
            icon: BrainCircuit,
            gradient: "from-emerald-500/20 to-green-500/20",
            border: "hover:border-emerald-500/50",
        },
    ];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen px-6 py-24 md:py-32 max-w-7xl mx-auto"
        >
            <SEO
                title="Services | John Garry Tan"
                description="Professional web development services including custom websites, Figma to code translation, and backlog management."
            />

            {/* Hero Section */}
            <motion.div variants={itemVariants} className="mb-24 space-y-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 text-primary font-medium tracking-wide text-sm uppercase">
                    <span className="w-8 h-[2px] bg-primary"></span>
                    What I Offer
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground max-w-4xl mx-auto md:mx-0">
                    Let's build something <br className="hidden md:block" />
                    <span className="text-primary">amazing together.</span>
                </h1>
                <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed mx-auto md:mx-0">
                    Whether you need a fresh digital presence, extra hands on deck, or a design brought to life, I'm here to help you achieve your goals.
                </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className={`
              relative overflow-hidden rounded-3xl p-8 flex flex-col
              bg-card border border-border/50 transition-all duration-300
              ${service.border} hover:shadow-2xl hover:shadow-primary/5
            `}
                    >
                        {/* Gradient Blob */}
                        <div className={`absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br ${service.gradient} blur-[80px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-50`} />

                        <div className="relative z-10">
                            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <service.icon size={24} />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-foreground">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* FAQ / Process or CTA Section */}
            <motion.section variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Why Work With Me?</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-primary/20 p-1 rounded-full"><ArrowRight size={16} className="text-primary" /></div>
                            <p className="text-muted-foreground"><strong>Transparent Communication:</strong> I keep you in the loop at every stage.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-primary/20 p-1 rounded-full"><ArrowRight size={16} className="text-primary" /></div>
                            <p className="text-muted-foreground"><strong>Pixel-Perfect Attention:</strong> I care about the small details that make a big difference.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-primary/20 p-1 rounded-full"><ArrowRight size={16} className="text-primary" /></div>
                            <p className="text-muted-foreground"><strong>Modern Tech Stack:</strong> I use the latest tools to ensure your project is fast, secure, and scalable.</p>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <WorkWithMe />
                </div>
            </motion.section>

        </motion.div>
    );
}
