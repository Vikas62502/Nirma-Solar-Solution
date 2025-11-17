"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Thank you! Your inquiry has been sent.");
        setFormData({ name: "", email: "", phone: "", city: "", message: "" });
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-secondary p-8 rounded-lg border border-border">
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground"
          placeholder="Your Name"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground"
            placeholder="+91-XXXXXXXXXX"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground"
          placeholder="Your City"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
        {loading ? "Sending..." : "Send Inquiry"}
      </Button>
    </form>
  );
}
