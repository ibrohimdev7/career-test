import Container from "@/components/layout/container";
import Intro from "@/components/titles/intro";
import Marquee from "@/components/ui/marquee";
import { ReviewCard } from "@/components/cards/members-card";
import { items } from "./constants";

const MembersSection = () => {
  return (
    <section>
      <Container className="py-[78px]">
        <div className="grid lg:grid-cols-3">
          <Intro
            unsualTitle="Meet"
            title="our team members"
            text="Meet our core team members who are happy to lend their services to the project"
            className="lg:text-start"
          />

          <div className="relative flex h-[400px] justify-center overflow-hidden md:h-[800px] lg:col-span-2 lg:ml-auto lg:gap-8">
            <Marquee pauseOnHover vertical className="m-0 [--duration:15s]">
              {items.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover vertical className="[--duration:15s]">
              {items.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </Marquee>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MembersSection;
