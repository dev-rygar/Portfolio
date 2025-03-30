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
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Stay Connected</h2>
        <p className="text-gray-500 text-sm mt-2">
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
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              subscriptionStatus === "error"
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-cyan-300"
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
          className={`w-full py-2 rounded-md text-white font-medium flex items-center justify-center transition-colors duration-300 ${
            subscriptionStatus === "success"
              ? "bg-green-500 hover:bg-green-600"
              : "bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800"
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
