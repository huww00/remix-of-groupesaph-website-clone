"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'strong' | 'subtle';
  hover?: boolean;
  children: React.ReactNode;
}

export function GlassCard({ 
  variant = 'default', 
  hover = true, 
  className, 
  children, 
  ...props 
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass rounded-xl p-6 transition-all duration-300',
        {
          'glass-strong': variant === 'strong',
          'bg-glass-light/50': variant === 'subtle',
          'hover:scale-105 hover:shadow-2xl cursor-pointer': hover,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}