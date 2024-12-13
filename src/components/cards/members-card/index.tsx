import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

export const ReviewCard = ({ img }: { img: StaticImageData }) => {
  return (
    <figure
      className={cn("relative cursor-pointer overflow-hidden rounded-[30px]")}
    >
      <Image
        width="328"
        height="416"
        alt="member person image"
        src={img}
        className="h-full w-full object-cover rounded-3xl lg:h-[416px] lg:w-[328px]"
      />
    </figure>
  );
};
