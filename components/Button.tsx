import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  children, 
  className = '',
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5",
    secondary: "bg-primary text-white dark:bg-white dark:text-black hover:bg-primary/90 dark:hover:bg-white/90 hover:shadow-lg hover:-translate-y-0.5",
    outline: "border border-primary/20 text-primary hover:border-primary hover:bg-primary/5",
    ghost: "text-text-medium hover:text-primary hover:bg-black/5 dark:hover:bg-white/10",
  };

  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2 transition-transform group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};

export default Button;