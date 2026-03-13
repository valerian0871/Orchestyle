import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  isLoading = false,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#222] text-white hover:bg-black",
    secondary: "bg-white text-[#222] border border-[#222] hover:bg-gray-50",
    outline: "text-[#222] border-b border-[#222] rounded-none hover:text-black hover:border-black",
    danger: "bg-hm-red text-white hover:bg-red-700",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  
  // Adjusted for outline variant to avoid padding if possible or keep minimal
  const appliedSize = variant === 'outline' ? 'py-1 text-sm' : sizes[size];

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${appliedSize} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : null}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
