import { cn } from "@/utils/cn";
import * as React from "react";

interface SkeletonProps {
  className: string;
}

const Skeleton = ({ className }: SkeletonProps) => {
  return <span className={cn(className, "bg-[#424242] animate-pulse")} />;
};

export default Skeleton;
