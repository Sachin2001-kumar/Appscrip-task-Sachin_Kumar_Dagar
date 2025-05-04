import * as React from "react";
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseClass = "badge";
  const variantClass = `badge-${variant}`;

  return (
    <div
      className={`${baseClass} ${variantClass} ${className || ""}`}
      {...props}
    />
  );
}

export { Badge };
