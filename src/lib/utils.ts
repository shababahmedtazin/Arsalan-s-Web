import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return `৳${price}`
}

export function getSpiceEmojis(level: 1 | 2 | 3): string {
  return '🌶️'.repeat(level)
}
