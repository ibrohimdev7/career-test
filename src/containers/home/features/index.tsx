import Container from "@/components/layout/container";
import React from "react";
import { featureItems } from "./constants";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import Intro from "@/components/titles/intro";

const FeaturesSection = () => {
  return (
    <section id="features">
      <Container className="py-[78px]">
        <Intro
          unsualTitle="Browse"
          title="our set of features"
          text="Learn more about the features our project offers and enjoy them"
        />

        <ul className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((item, index) => (
            <li
              key={index}
              className="group relative flex cursor-pointer flex-col items-center rounded-3xl border border-[#D4D2E3] px-8 py-10 transition-all duration-300 hover:border-mainColors-blue hover:shadow-lg hover:shadow-mainColors-blue/25"
            >
              <div className="mb-6 rounded-[20px] bg-black/5 p-5 transition-all duration-300 group-hover:bg-mainColors-blue/5">
                <item.icon
                  className={cn("transition-all duration-300", {
                    "fill-mainColors-light_black stroke-none group-hover:fill-mainColors-blue":
                      item.isFill,
                    "fill-none stroke-mainColors-light_black group-hover:stroke-mainColors-blue":
                      item.isStroke,
                  })}
                />
              </div>
              <div className="space-y-2 text-center">
                <h2 className="text-[28px] font-bold text-mainColors-light_black transition-all duration-300 group-hover:text-mainColors-blue">
                  {item.title}
                </h2>
                <p className="text-mainColors-gray transition-all duration-300 group-hover:text-mainColors-blue">
                  {item.description}
                </p>
              </div>

              <BorderBeam
                size={250}
                duration={12}
                delay={9}
                className="opacity-0 group-hover:opacity-100"
                colorFrom="#0066FF"
                colorTo="#404dff"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default FeaturesSection;
