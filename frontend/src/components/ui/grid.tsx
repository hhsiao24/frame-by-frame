import { cn } from '@/lib/utils.ts';

type GridProps = {
  container?: boolean;
  item?: boolean;
  span?: { sm?: number; md?: number; lg?: number; xl?: number };
  cols?: number;
  className?: string;
  children?: React.ReactNode;
};

export const Grid = ({
                       container = false,
                       item = false,
                       span = { sm: 12, md: 12, lg: 12, xl: 12 },
                       cols = 12,
                       className = '',
                       children,
                     }: GridProps) => {
  const correctedSpan = (() => {
    const newSpan = span;
    if (!newSpan.sm) newSpan.sm = cols;
    newSpan.md = Math.min(newSpan.md ?? cols, newSpan.sm);
    newSpan.lg = Math.min(newSpan.lg ?? cols, newSpan.md);
    newSpan.xl = Math.min(newSpan.xl ?? cols, newSpan.lg);
    return newSpan;
  })();

  const containerClassName = (() => {
    let newClassName = '';

    /*
     * Supported column numbers:
     * grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-7
     * grid-cols-8 grid-cols-9 grid-cols-10 grid-cols-12 grid-cols-14 grid-cols-16
     */
    if (container) newClassName += `grid grid-cols-${cols} `;

    /*
     * Supported column spans:
     * col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6
     * col-span-7 col-span-8 col-span-9 col-span-10 col-span-11 col-span-12
     * sm:col-span-1 sm:col-span-2 sm:col-span-3 sm:col-span-4 sm:col-span-5 sm:col-span-6
     * sm:col-span-7 sm:col-span-8 sm:col-span-9 sm:col-span-10 sm:col-span-11 sm:col-span-12
     * md:col-span-1 md:col-span-2 md:col-span-3 md:col-span-4 md:col-span-5 md:col-span-6
     * md:col-span-7 md:col-span-8 md:col-span-9 md:col-span-10 md:col-span-11 md:col-span-12
     * lg:col-span-1 lg:col-span-2 lg:col-span-3 lg:col-span-4 lg:col-span-5 lg:col-span-6
     * lg:col-span-7 lg:col-span-8 lg:col-span-9 lg:col-span-10 lg:col-span-11 lg:col-span-12
     * xl:col-span-1 xl:col-span-2 xl:col-span-3 xl:col-span-4 xl:col-span-5 xl:col-span-6
     * xl:col-span-7 xl:col-span-8 xl:col-span-9 xl:col-span-10 xl:col-span-11 xl:col-span-12
     */
    if (item)
      newClassName +=
        `col-span-${cols} ` +
        `sm:col-span-${correctedSpan.sm} ` +
        `md:col-span-${correctedSpan.md} ` +
        `lg:col-span-${correctedSpan.lg} ` +
        `xl:col-span-${correctedSpan.xl} `;

    return newClassName;
  })();

  return (
    <div className={cn(containerClassName, className)}>
      {children}
    </div>
  );
};
