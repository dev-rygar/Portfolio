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
        <div className="relative group w-full max-w-md mx-auto">

            <div className="relative bg-card rounded-3xl p-8 border border-border/50 shadow-sm hover:border-primary/50 transition-colors">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-foreground">Work With Me</h2>
                    <p className="text-muted-foreground text-sm mt-2">
                        Have a project in mind? Let's build something together.
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Email Display & Copy */}
                    <div className="flex items-center gap-3 p-3 border border-border/50 rounded-xl bg-muted/30 group hover:border-primary/30 transition-colors">
                        <div className="p-2 bg-background rounded-lg text-primary">
                            <Mail size={18} />
                        </div>
                        <span className="flex-1 text-sm font-medium text-foreground truncate select-all">
                            {email}
                        </span>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleCopy}
                            className="h-9 w-9 shrink-0 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg"
                            title="Copy email"
                        >
                            {copied ? (
                                <Check size={18} className="text-green-500" />
                            ) : (
                                <Copy size={18} />
                            )}
                        </Button>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button className="w-full rounded-xl font-semibold shadow-lg shadow-primary/20" asChild>
                                        <a href={`mailto:${email}`}>Email App</a>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Opens your default email client</p>
                                </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline" className="w-full rounded-xl border-primary/20 hover:text-primary hover:bg-primary/5" onClick={handleGmail}>
                                        Gmail
                                        <ExternalLink className="ml-2 h-3 w-3 opacity-70" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Opens a new Gmail compose window</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </div>
        </div>
    );
}