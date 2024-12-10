import RightArrow from "@/assets/icons/right-arrow";
import Container from "@/components/layout/container";
import LaptopMockup from "./components/laptop-mockup";
import CommonSmoothLink from "@/components/common/common-smooth-link";

const AboutSection = () => {
  return (
    <section id="about">
      <Container className="relative grid items-center gap-y-10 overflow-hidden py-[78px] lg:grid-cols-3">
        <div className="space-y-8 text-center lg:text-start">
          <h2 className="text-3xl font-bold base:text-[44px] base:leading-[50px]">
            <span className="text-mainColors-blue">Build your future</span>{" "}
            through prescribed tests
          </h2>
          <p className="text-lg text-mainColors-gray">
            Each test is designed for your future with the help of
            psychologists. After solving the given tests, get to know the
            professions suitable for your career. In this way, you can avoid
            unnecessary thoughts and save your time with us.
          </p>
          <CommonSmoothLink
            smooth
            to="features"
            href={"features"}
            className="relative mx-auto flex w-fit items-center gap-1.5 text-lg font-bold text-mainColors-blue before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-mainColors-blue/80 before:transition-all hover:text-mainColors-blue/80 hover:before:w-full lg:mx-0"
          >
            Discover our product features <RightArrow stroke="#0066FF" />
          </CommonSmoothLink>
        </div>
        <LaptopMockup />
      </Container>
    </section>
  );
};

export default AboutSection;
