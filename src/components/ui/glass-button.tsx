"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  neonGlow?: boolean;
  children: React.ReactNode;
}

export function GlassButton({ 
  variant = 'primary', 
  size = 'md', 
  neonGlow = false,
  className, 
  children, 
  ...props 
}: GlassButtonProps) {
  return (
    <button
      className={cn(
        'glass rounded-full font-medium transition-all duration-300',
        'hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50',
        {
          // Variants
          'bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 hover:border-primary/50': variant === 'primary',
          'border-glass-border hover:border-primary/30': variant === 'secondary',
          'bg-transparent border-transparent hover:bg-glass-light': variant === 'ghost',
          
          // Sizes
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
          
          // Neon glow effect
          'neon-glow': neonGlow,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}