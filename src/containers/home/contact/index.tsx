"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Container from "@/components/layout/container";
import Intro from "@/components/titles/intro";
import { contactCards } from "./constants";
import Input from "@/components/ui/input";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-blue-50 to-white">
      <Container className="relative overflow-hidden py-[78px]">
        {/* Floating Elements */}
        <motion.div
          className="absolute left-10 top-20 h-32 w-32 rounded-full bg-blue-200 mix-blend-multiply blur-xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-purple-200 mix-blend-multiply blur-xl"
          animate={{
            y: [0, -40, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Intro
            unsualTitle="Contact"
            title="Us"
            text="Let's Create Something Amazing"
          />
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl"
          >
            <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 blur-2xl" />

            <form onSubmit={handleSubmit} className="relative space-y-6">
              <motion.div whileHover={{ scale: 1.01 }} className="relative">
                <Input
                  label="Name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                  aria-label="Name"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.01 }} className="relative">
                <Input
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                  aria-label="Email"
                />
              </motion.div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <motion.div whileHover={{ scale: 1.01 }} className="relative">
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                    aria-label="Description"
                  />
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
              >
                <Send className="h-4 w-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {contactCards.map((card, index) => (
              <motion.div
                key={card.title}
                whileHover={{ scale: 1.02, translateX: 10 }}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <div className="rounded-xl bg-blue-50 p-3">
                  <card.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
