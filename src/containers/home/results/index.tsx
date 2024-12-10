import { ResultCard } from "@/components/cards/result-card";
import Container from "@/components/layout/container";
import Intro from "@/components/titles/intro";
import { items } from "./constants";

const ResultSection = () => {
  return (
    <section>
      <Container className="py-[78px]">
        <Intro
          unsualTitle="Our results"
          title="in numbers"
          text="Through the results, you can know how much our project benefits people"
        />

        <div className="grid gap-7 base:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {items?.map((item, i: number) => {
            return (
              <ResultCard
                key={i}
                title={item?.title}
                value={item?.value}
                icon={
                  item?.icon as
                    | "image"
                    | "users"
                    | "trending"
                    | "dollar"
                    | "building"
                }
                unit={item?.unit}
                className={
                  i === 0
                    ? "bg-mainColors-blue text-white base:col-span-2 lg:row-span-2"
                    : ""
                }
                isLarge={i === 0}
                isTextWhite={i === 0}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ResultSection;
