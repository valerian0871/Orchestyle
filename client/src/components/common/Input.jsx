import { forwardRef } from 'react';

const Input = forwardRef(({ 
  label,
  error,
  className = '',
  id,
  ...props 
}, ref) => {
  const generatedId = id || Math.random().toString(36).substring(7);
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={generatedId} className="block text-sm font-medium text-[#222] mb-1">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={generatedId}
        className={`w-full px-4 py-3 border text-sm text-[#222] bg-white transition-colors focus:outline-none focus:border-black
          ${error ? 'border-hm-red focus:border-hm-red' : 'border-gray-300'}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-hm-red">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
