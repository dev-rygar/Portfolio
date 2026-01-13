import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown, Mail, Copy, Check, ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Floater() {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    // Optional: Hide when at very top if desired, but for now we keep it visible or simple entrance
    useEffect(() => {
        // Just trigger once for now if we want to add scroll listener later
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    };

    const email = "johngarry.tan@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleGmail = () => {
        window.open(
            `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}`,
            "_blank"
        );
    };

    return (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col gap-3 items-center">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="absolute bottom-full right-0 mb-4 p-4 bg-card/80 backdrop-blur-md border border-border rounded-2xl shadow-xl w-64 origin-bottom-right"
                    >
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm font-semibold">Contact Me</span>
                            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
                                <X size={14} />
                            </Button>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 border border-border/50">
                                <Mail size={14} className="text-primary shrink-0" />
                                <span className="text-xs truncate flex-1">{email}</span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={handleCopy}
                                    className="h-6 w-6 shrink-0"
                                    title="Copy email"
                                >
                                    {copied ? (
                                        <Check size={12} className="text-green-500" />
                                    ) : (
                                        <Copy size={12} />
                                    )}
                                </Button>
                            </div>

                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full text-xs justify-between group"
                                onClick={handleGmail}
                            >
                                Open in Gmail
                                <ExternalLink size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full text-xs justify-between group"
                                asChild
                            >
                                <a href={`mailto:${email}`}>
                                    Open Mail App
                                    <ExternalLink size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex flex-col gap-2 p-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={scrollToTop}
                    className="rounded-full h-10 w-10 hover:bg-primary/10 hover:text-primary transition-colors"
                    title="Scroll to Top"
                >
                    <ArrowUp size={20} />
                </Button>

                <Button
                    variant={isOpen ? "secondary" : "ghost"}
                    size="icon"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`rounded-full h-10 w-10 transition-colors ${isOpen ? 'bg-primary/20 text-primary' : 'hover:bg-primary/10 hover:text-primary'}`}
                    title="Contact Me"
                >
                    <Mail size={20} />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={scrollToBottom}
                    className="rounded-full h-10 w-10 hover:bg-primary/10 hover:text-primary transition-colors"
                    title="Scroll to Bottom"
                >
                    <ArrowDown size={20} />
                </Button>
            </div>
        </div>
    );
}
