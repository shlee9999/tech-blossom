import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  // 기본 클래스
  'flex items-center justify-center rounded-md',
  {
    variants: {
      variant: {
        default: 'bg-blue-500 text-white',
        outline: 'border-2 border-blue-500 text-blue-500',
        ghost: 'hover:bg-blue-100 text-blue-500',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 py-1',
        lg: 'h-12 px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
