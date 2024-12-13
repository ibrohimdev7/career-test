import { cn } from "@/lib/utils";
import { LoaderIcon } from "lucide-react";

interface Props {
  className?: string;
}

const CommonLoading = ({ className }: Props) => {
  return <LoaderIcon className={cn("animate-spin", className)} />;
};

export default CommonLoading;
