import React, { type InputHTMLAttributes, type ForwardedRef } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helper?: string;
    placeholder?: string;
    error?: boolean;
}

function InputComponent({ label, error, placeholder, className = "", helper, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) {
    
    return (
        <div className="flex flex-col w-full">
            {label && <label className="text-left mb-1.5 font-semibold text-primary text-sm">{label}</label>}
            <input 
                ref={ref}
                placeholder={placeholder}
                className={`
                    border w-full border-input bg-transparent font-normal 
                    px-3 py-2 text-sm h-11 rounded-md focus-visible:outline-none 
                    focus-visible:ring-2 ${error ? "focus-visible:ring-red-600" : "focus-visible:ring-ring"} 
                    focus-visible:ring-offset-2 focus:outline-none focus:ring disabled:cursor-not-allowed 
                    disabled:bg-neutral-100 disabled:opacity-50 ${className}
                    ${error ? "border-red-600" : ""}
                `} 
                {...props} 
            />
            {helper && <p className={`text-sm mt-2 ${error ? 'text-red-600' : 'text-secondary'}`}>{helper}</p>}
        </div>
    );
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(InputComponent);

export default Input;

