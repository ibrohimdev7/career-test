"use client";

import OptionCard from "@/components/cards/options-hero-card";
import Container from "@/components/layout/container";
import Intro from "@/components/titles/intro";
import { GraduationCap, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50/90 to-purple-50/90">
      <Container className="relative py-[78px]">
        <div className="mb-16 text-center">
          <Intro
            unsualTitle="Choose"
            title="Your Path"
            text="Select the option that best describes you to get started"
          />
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <OptionCard
            title="For Students"
            description="Access comprehensive learning materials, track your progress, and connect with peers."
            icon={GraduationCap}
            href="/career-test"
            delay={0.2}
          />
          <OptionCard
            title="For Teachers"
            description="Create and manage courses, monitor student progress, and facilitate learning."
            icon={Users}
            href="/career-test"
            delay={0.2}
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
