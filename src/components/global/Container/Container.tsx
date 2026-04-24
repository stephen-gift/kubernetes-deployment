import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  paddingType?: "both" | "left";
}

export function Container({
  children,
  paddingType = "both",
  className,
  ...props
}: ContainerProps) {
  const padding =
    paddingType === "left"
      ? "pl-4 md:pl-12 lg:pl-24"
      : "px-4 md:px-12 lg:px-24";

  return (
    <div
      className={cn("w-full max-w-[1440px] mx-auto", padding, className)}
      {...props}
    >
      {children}
    </div>
  );
}
