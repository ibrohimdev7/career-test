import { items } from "./constants";
import Container from "@/components/layout/container";
import Intro from "@/components/titles/intro";
import Button from "@/components/buttons/common-button";
import Link from "next/link";

const HowItWorksSection = () => {
  return (
    <section id="how_it_works">
      <Container className="py-[78px]">
        <Intro
          unsualTitle="Steps"
          title="to Success"
          text="Learn how to use our project through a short process"
        />

        <div className="group mx-auto mt-3 flex justify-center gap-7 max-md:flex-col">
          {items?.map((item, i: number) => {
            return (
              <article
                key={i}
                className="group/article ease-[cubic-bezier(.5,.85,.25,1.15)] relative w-full cursor-pointer overflow-hidden rounded-xl transition-all duration-300 before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity after:absolute after:inset-0 after:rounded-lg after:bg-white/30 after:opacity-0 after:backdrop-blur after:transition-all focus-within:ring focus-within:ring-indigo-300 focus-within:before:opacity-100 md:before:opacity-0 md:hover:before:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 md:group-hover:[&:not(:hover)]:w-[20%] md:group-hover:[&:not(:hover)]:after:opacity-100"
              >
                <div
                  className="absolute inset-0 z-10 flex flex-col items-center justify-between p-3 text-white md:py-20"
                  //   href="#0"
                >
                  <span className="ease-[cubic-bezier(.5,.85,.25,1.8)] text-lg font-medium transition duration-200 group-focus-within/article:translate-y-0 group-focus-within/article:opacity-100 group-focus-within/article:delay-150 group-hover/article:translate-y-0 group-hover/article:opacity-100 group-hover/article:delay-150 md:translate-y-2 md:truncate md:whitespace-nowrap md:opacity-0">
                    Step {i + 1}
                  </span>

                  <div className="text-center">
                    <h1 className="ease-[cubic-bezier(.5,.85,.25,1.8)] text-4xl font-bold transition duration-200 group-focus-within/article:translate-y-0 group-focus-within/article:opacity-100 group-focus-within/article:delay-300 group-hover/article:translate-y-0 group-hover/article:opacity-100 group-hover/article:delay-300 md:translate-y-2 md:truncate md:whitespace-nowrap md:text-[44px] md:leading-[50px] md:opacity-0">
                      {item?.title}
                    </h1>
                    <span className="hidden text-2xl font-bold group-hover:hidden md:block">
                      Step {i + 1}
                    </span>

                    <p className="ease-[cubic-bezier(.5,.85,.25,1.8)] text-lg font-normal transition duration-200 group-focus-within/article:translate-y-0 group-focus-within/article:opacity-100 group-focus-within/article:delay-500 group-hover/article:translate-y-0 group-hover/article:opacity-100 group-hover/article:delay-500 md:translate-y-2 md:truncate md:whitespace-nowrap md:opacity-0">
                      {item?.description}
                    </p>
                  </div>
                  <Link href={"/options"}>
                    <Button className="ease-[cubic-bezier(.5,.85,.25,1.8)] group-focus-within/article:translate-y-0 group-focus-within/article:opacity-100 group-focus-within/article:delay-700 group-hover/article:translate-y-0 group-hover/article:opacity-100 group-hover/article:delay-700 md:translate-y-2 md:truncate md:whitespace-nowrap md:opacity-0">
                      Start the test
                    </Button>
                  </Link>
                </div>
                <div className="relative z-0 h-72 w-full bg-gradient-to-b from-mainColors-blue/90 to-mainColors-blue/60 md:h-[420px]"></div>
                {/* <Image
                  className="h-72 w-full object-cover md:h-[420px]"
                  src={item?.url}
                  width="960"
                  height="480"
                  alt="Image 01"
                /> */}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
