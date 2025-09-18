"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function GlassInput({ 
  label, 
  error, 
  className, 
  ...props 
}: GlassInputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <input
        className={cn(
          'glass-input',
          error && 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}

interface GlassTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function GlassTextarea({ 
  label, 
  error, 
  className, 
  ...props 
}: GlassTextareaProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          'glass rounded-lg px-4 py-3 w-full min-h-32 resize-y',
          'placeholder:text-muted-foreground',
          'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30',
          'transition-all duration-300',
          error && 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}