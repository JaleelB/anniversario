import React from 'react';

type ButtonSize = 'default' | 'sm' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    onClick?: () => void;
}

export default function Button({
    size = 'default',
    className = '',
    children,
    ...props
}: ButtonProps) {
    const baseClasses = `
        inline-flex items-center justify-center text-sm transition-colors 
        focus:outline-none disabled:opacity-50 disabled:pointer-events-none
        bg-primary border border-primary text-white rounded-md font-medium
    `;

    const sizeClasses: Record<ButtonSize, string> = {
        default: 'h-10 py-2 px-8',
        sm: 'h-9 px-4',
        lg: 'h-12 px-12',
    };

    const classes = `
        ${baseClasses}
        ${sizeClasses[size]} 
        ${className}
    `;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
