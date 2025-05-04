import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, checked, ...props }, ref) => {
  const isIndeterminate = checked === "indeterminate";

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      checked={checked === true}
      className={`checkbox-base ${className || ""}`}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="checkbox-indicator">
        {isIndeterminate ? <Minus /> : <Check />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
