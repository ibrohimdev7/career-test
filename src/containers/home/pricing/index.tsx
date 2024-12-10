import PricingCard from "@/components/cards/pricing-card";
import Container from "@/components/layout/container";
import Intro from "@/components/titles/intro";
import { enterPricePlanItems, freePlanItems } from "./constants";
import Meteors from "@/components/ui/meteors";

const PricingSection = () => {
  return (
    <section id="pricing">
      <Container className="py-[78px]">
        <Intro
          unsualTitle="Affordable"
          title="pricing plans"
          text="Learn more about two different types of pricing and choose the option you need. You can get the necessary comforts through this"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <PricingCard
            advantages={freePlanItems}
            title="Basic Plan"
            text="In the Basic plan, you can use our services subject to some restrictions"
            type="Free"
            listClassName="space-y-4"
          />
          <div className="relative overflow-hidden lg:col-span-2">
            <Meteors number={50} />

            <PricingCard
              advantages={enterPricePlanItems}
              title="Enterprise Plan"
              text={`You can freely use our services from our \n affordable plan for everyone`}
              type="$1/mo"
              listClassName="grid base:grid-cols-2 gap-4"
              isBlue={true}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
