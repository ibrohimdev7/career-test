"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/buttons/common-button";
import Link from "next/link";

interface OptionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  delay?: number;
}

const OptionCard = ({
  title,
  description,
  icon: Icon,
  href,
  delay = 0,
}: OptionCardProps) => {
  return (
    <Link href={href}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ scale: 1.02 }}
        className="relative cursor-pointer overflow-hidden rounded-2xl bg-white p-8 shadow-lg"
      >
        <div className="absolute inset-0" />
        <div className="relative">
          <Icon className="mb-6 h-12 w-12 text-mainColors-light_black" />
          <h3 className="mb-3 text-2xl font-bold text-mainColors-light_black">
            {title}
          </h3>
          <p className="mb-6 text-mainColors-gray">{description}</p>
          <Button>Get Started</Button>
        </div>
      </motion.div>
    </Link>
  );
};
export default OptionCard;
