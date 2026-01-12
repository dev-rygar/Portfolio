import { useState } from "react";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";

export default function WorkWithMe() {
    const email = "johngarry.tan@gmail.com";
    const [copied, setCopied] = useState(false);

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
        <div className="bg-card shadow-lg rounded-xl p-6 border border-border w-full max-w-md mx-auto">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-foreground">Work With Me</h2>
                <p className="text-muted-foreground text-sm mt-2">
                    Have a project in mind? Let's build something together.
                </p>
            </div>

            <div className="space-y-4">
                {/* Email Display & Copy */}
                <div className="flex items-center gap-2 p-3 border border-input rounded-lg bg-background/50 group hover:border-primary/50 transition-colors">
                    <Mail className="text-muted-foreground ml-1" size={18} />
                    <span className="flex-1 text-sm font-medium text-foreground truncate select-all">
                        {email}
                    </span>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleCopy}
                        className="h-8 w-8 shrink-0 text-muted-foreground hover:text-primary"
                        title="Copy email"
                    >
                        {copied ? (
                            <Check size={16} className="text-green-500" />
                        ) : (
                            <Copy size={16} />
                        )}
                    </Button>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button className="w-full" asChild>
                                    <a href={`mailto:${email}`}>Email App</a>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Opens your default email client (e.g. Outlook, Mail)</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" className="w-full" onClick={handleGmail}>
                                    Gmail
                                    <ExternalLink className="ml-2 h-3 w-3 opacity-70" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Opens a new Gmail compose window in browser</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </div>
    );
}