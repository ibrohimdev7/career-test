import RightArrow from "@/assets/icons/right-arrow";
import { HeroBg } from "@/assets/png";
import Button from "@/components/buttons/common-button";
import CommonSmoothLink from "@/components/common/common-smooth-link";
import Container from "@/components/layout/container";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="!overflow-hidden">
      <Container className="py-[100px]">
        <div className="mx-auto mb-[122px] w-full max-w-[584px] md:mb-48">
          <h2 className="mb-4 text-center text-[44px] font-bold leading-[50px] md:text-[56px] md:leading-[66px]">
            <span className="text-mainColors-blue">Don{"'"}t worry</span> and
            build your future with us
          </h2>
          <p className="mb-10 text-center text-sm text-mainColors-gray md:text-lg">
            We help people to determine their career paths and step confidently
            towards a successful future
          </p>
          <div className="flex flex-col items-center justify-center gap-6 base:flex-row">
            <Link href={"/options"}>
              <Button
                label="Build you career"
                endIcon={<RightArrow />}
                size="large"
              />
            </Link>
            <CommonSmoothLink smooth to={"contact"} href="contact">
              <Button label="Contact Us" variant="default" size="large" />
            </CommonSmoothLink>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-16 right-0 z-10 h-[260px] w-[380px] translate-x-40 sm:h-[400px] sm:w-[550px] md:-top-32 md:translate-x-0 lg:h-[551px] lg:w-[726px]">
            <Image src={HeroBg} alt="hero image" fill />
          </div>
          <div className="relative h-[260px] w-[380px] -translate-x-40 sm:h-[400px] sm:w-[550px] md:translate-x-0 lg:h-[551px] lg:w-[726px]">
            <Image src={HeroBg} alt="hero image" fill />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
