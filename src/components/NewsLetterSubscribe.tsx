import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // More comprehensive email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    console.log("Email:", email);
    console.log("Email Test Result:", emailRegex.test(email));

    if (!emailRegex.test(email)) {
      console.log("Invalid email");
      setSubscriptionStatus("error");
      return;
    }

    try {
      // Simulated subscription for now
      console.log("Subscription attempt with:", email);
      setSubscriptionStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      setSubscriptionStatus("error");
    }
  };

  return (
    <div className="bg-card shadow-lg rounded-xl p-6 border border-border">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-foreground">Stay Connected</h2>
        <p className="text-muted-foreground text-sm mt-2">
          Subscribe to get updates, insights, and exclusive content
        </p>
      </div>

      <form onSubmit={handleSubscribe} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSubscriptionStatus("idle");
            }}
            placeholder="Enter your email address"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-background text-foreground ${subscriptionStatus === "error"
              ? "border-destructive focus:ring-destructive/30"
              : "border-input focus:ring-ring/30"
              }`}
            required
          />
          {subscriptionStatus === "error" && (
            <p className="text-red-500 text-xs mt-1">
              Please enter a valid email address
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={subscriptionStatus === "success"}
          className={`w-full py-2 rounded-md text-primary-foreground font-medium flex items-center justify-center transition-colors duration-300 ${subscriptionStatus === "success"
            ? "bg-green-600 hover:bg-green-700"
            : "bg-primary hover:bg-primary/90 active:bg-primary/80"
            } ${subscriptionStatus === "success" ? "cursor-not-allowed" : ""}`}
        >
          {subscriptionStatus === "success" ? (
            <>
              <CheckCircle className="mr-2" size={20} />
              Subscribed!
            </>
          ) : (
            <>
              <Send className="mr-2" size={20} />
              Subscribe
            </>
          )}
        </button>
      </form>

      {subscriptionStatus === "success" && (
        <p className="text-green-600 text-xs text-center mt-2">
          Thank you for subscribing! You'll hear from me soon.
        </p>
      )}
    </div>
  );
}
