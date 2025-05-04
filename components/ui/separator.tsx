"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => {
    const baseClass = "separator-base";
    const orientationClass =
      orientation === "horizontal"
        ? "separator-horizontal"
        : "separator-vertical";

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={`${baseClass} ${orientationClass} ${className || ""}`}
        {...props}
      />
    );
  }
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
