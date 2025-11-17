"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QueryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QueryFormModal({ isOpen, onClose }: QueryFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          email: "N/A", // Modal does not have email, so send placeholder
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Thank you! We will contact you soon.");
        setFormData({ name: "", phone: "", city: "", message: "" });
        onClose();
      } else {
        alert("Failed to send query. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-lg max-w-md w-full border border-border">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Get a Free Quote</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              placeholder="Your Name"
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
              className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              placeholder="+91-XXXXXXXXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
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
              rows={3}
              className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm"
              placeholder="Tell us about your project..."
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            {loading ? "Sending..." : "Send Query"}
          </Button>
        </form>
      </div>
    </div>
  );
}
