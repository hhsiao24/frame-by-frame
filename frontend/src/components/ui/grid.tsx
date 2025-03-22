type Props = {
  container: boolean;
  item: boolean;
  span?: { sm: Number; md: Number; lg: Number; xl: Number };
  cols: Number;
  className: string;
  children?: React.ReactNode;
};

export const Grid = ({
  container = false,
  item = false,
  span = { sm: 12, md: 12, lg: 12, xl: 12 },
  cols = 12,
  className = '',
  children,
}) => {
  const correctedSpan = (() => {
    const newSpan = span;
    newSpan.md = Math.min(newSpan.md, newSpan.sm);
    newSpan.lg = Math.min(newSpan.lg, newSpan.md);
    newSpan.xl = Math.min(newSpan.xl, newSpan.md);
    return newSpan;
  })();

  const containerClassName = (() => {
    let className = '';
    if (container) className += `grid-cols-${cols} `;
    if (item)
      className +=
        `sm:col-span-[${correctedSpan.sm}] ` +
        `md:col-span-[${correctedSpan.md}] ` +
        `lg:col-span-[${correctedSpan.lg}] ` +
        `xl:col-span-[${correctedSpan.xl}] `;

    containerClassName += className;

    return className;
  })();

  return <div className={containerClassName}>{children}</div>;
};
