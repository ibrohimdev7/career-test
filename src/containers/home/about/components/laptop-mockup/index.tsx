import Image from "next/image";

const LaptopMockup = () => {
  return (
    <div className="relative col-span-2 lg:-right-40">
      {/* Laptop screen container */}
      <div className="relative mx-auto max-w-[90%] rounded-t-2xl border-x-[10px] border-y-[20px] border-mainColors-blue/85">
        <div className="h-full overflow-hidden rounded-lg">
          {/* Light mode image */}
          <Image
            src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
            alt="Laptop screen"
            layout="responsive"
            width={512}
            height={278}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {/* Base of the laptop */}
      <div className="relative mx-auto h-[17px] max-w-full rounded-b-3xl rounded-t-sm border border-mainColors-blue bg-mainColors-blue/85 md:h-[30px]">
        <div className="absolute left-1/2 top-0 h-[5px] w-[56px] -translate-x-1/2 rounded-b-xl bg-mainColors-blue md:h-[8px] md:w-[96px]"></div>
      </div>
    </div>
  );
};

export default LaptopMockup;