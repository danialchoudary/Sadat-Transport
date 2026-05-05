import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const Card = React.forwardRef(({ className, animate = true, children, ...props }, ref) => {
  const Component = animate ? motion.div : "div";
  const motionProps = animate ? { whileHover: { y: -4 } } : {};

  return (
    <Component
      ref={ref}
      className={cn(
        "rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-glass dark:hover:shadow-glass-dark overflow-hidden",
        className
      )}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
});
Card.displayName = "Card";

export const CardHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);

export const CardTitle = React.forwardRef(({ className, children, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props}>
    {children}
  </h3>
));
CardTitle.displayName = "CardTitle";

export const CardDescription = ({ className, ...props }) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);

export const CardContent = ({ className, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);