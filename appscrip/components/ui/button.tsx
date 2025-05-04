import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const baseClass = "button";
    const variantClass = `button-${variant}`;
    const sizeClass = `button-${size}`;

    return (
      <Comp
        className={`${baseClass} ${variantClass} ${sizeClass} ${
          className || ""
        }`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
