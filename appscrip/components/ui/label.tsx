"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={`label-base ${className || ""}`}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
