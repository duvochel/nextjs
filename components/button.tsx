import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${className}inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30 border border-input bg-primary-zinc text-light hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mx-2`}
    >
      {children}
    </button>
  );
}
