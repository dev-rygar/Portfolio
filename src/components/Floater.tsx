import { useState, useRef, useEffect } from "react";
import { ArrowUp, ArrowDown, Mail, Copy, Check, ExternalLink, ChevronLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Floater() {
    const [isOpen, setIsOpen] = useState(false);
    const [subOpen, setSubOpen] = useState(false); // For Contact submenu
    const [copied, setCopied] = useState(false);
    const [scrollState, setScrollState] = useState<"top" | "bottom" | "middle">("top");

    const email = "johngarry.tan@gmail.com";
    const menuRef = useRef<HTMLDivElement>(null);

    // Scroll Detection
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            if (scrollTop < 50) {
                setScrollState("top");
            } else if (scrollTop + windowHeight >= docHeight - 50) {
                setScrollState("bottom");
            } else {
                setScrollState("middle");
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSubOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsOpen(false);
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
        setIsOpen(false);
    };

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
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center justify-center" ref={menuRef}>

            {/* The Menu Grid (Assistive Touch Style) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute bottom-0 right-0 mb-16 mr-0 md:mr-0 p-4 bg-background/80 backdrop-blur-md border border-border rounded-3xl shadow-2xl w-[260px]"
                    >
                        {/* Default Grid */}
                        {!subOpen ? (
                            <div className="grid grid-cols-2 gap-4 place-items-center">
                                {scrollState !== "top" && (
                                    <MenuItem
                                        icon={ArrowUp}
                                        label="Top"
                                        onClick={scrollToTop}
                                    />
                                )}

                                {scrollState !== "bottom" && (
                                    <MenuItem
                                        icon={ArrowDown}
                                        label="Bottom"
                                        onClick={scrollToBottom}
                                    />
                                )}

                                <MenuItem
                                    icon={Mail}
                                    label="Contact"
                                    onClick={() => setSubOpen(true)}
                                />
                            </div>
                        ) : (
                            /* Contact Submenu */
                            <div className="space-y-3">
                                <div className="flex items-center justify-between mb-2 border-b border-border/50 pb-2">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 text-muted-foreground hover:text-foreground px-0 hover:bg-transparent -ml-2"
                                        onClick={() => setSubOpen(false)}
                                    >
                                        <ChevronLeft size={16} className="mr-1" />
                                        Back
                                    </Button>
                                    <span className="text-sm font-medium mr-2">Contact</span>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 border border-border/50">
                                        <span className="text-xs text-muted-foreground truncate flex-1">{email}</span>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={handleCopy}
                                            className="h-6 w-6 shrink-0 text-foreground hover:bg-muted"
                                            title="Copy email"
                                        >
                                            {copied ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                                        </Button>
                                    </div>

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full text-xs justify-between group"
                                        onClick={handleGmail}
                                    >
                                        Gmail
                                        <ExternalLink size={12} className="opacity-50 group-hover:opacity-100" />
                                    </Button>

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full text-xs justify-between group"
                                        asChild
                                    >
                                        <a href={`mailto:${email}`}>
                                            Mail App
                                            <ExternalLink size={12} className="opacity-50 group-hover:opacity-100" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The Knob (Assistive Touch Button) */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                animate={!isOpen ? {
                    scale: [1, 1.05, 1],
                    boxShadow: [
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                    ]
                } : {}}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className={`
                    relative w-14 h-14 rounded-2xl md:rounded-3xl shadow-lg border border-border
                    flex items-center justify-center transition-colors duration-300
                    ${isOpen ? 'bg-accent text-accent-foreground' : 'bg-background/80 hover:bg-accent/10 backdrop-blur-md opacity-90 hover:opacity-100'}
                `}
            >
                <div className={`
                    w-10 h-10 rounded-xl md:rounded-2xl border-2 shadow-inner flex items-center justify-center opacity-90 transition-colors duration-300
                    ${isOpen ? 'bg-background border-border' : 'bg-muted/50 border-border/50'}
                `}>
                    <div className={`w-5 h-5 rounded-full transition-colors duration-300 ${isOpen ? 'bg-primary' : 'bg-muted-foreground/50'}`}></div>
                </div>
            </motion.button>
        </div>
    );
}

// Helper Component for Menu Items
function MenuItem({ icon: Icon, label, onClick }: { icon: any, label: string, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="flex flex-col items-center justify-center gap-1 group w-full aspect-square rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors border border-border/10 hover:border-border/30"
        >
            <Icon size={24} className="text-foreground group-hover:scale-110 transition-transform duration-200" />
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">{label}</span>
        </button>
    );
}
