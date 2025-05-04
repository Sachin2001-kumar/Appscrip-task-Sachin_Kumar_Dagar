function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const baseClass = "skeleton-base";

  return <div className={`${baseClass} ${className || ""}`} {...props} />;
}

export { Skeleton };
