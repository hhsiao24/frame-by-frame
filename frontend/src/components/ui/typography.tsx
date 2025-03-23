type Props = { children: React.ReactNode; className?: string; }

export const H1 = ({ children, className }: Props) => {
  return (
    <h1 className={`font-title text-6xl ${className}`}>{children}</h1>
  );
};

export const H2 = ({ children, className }: Props) => {
  return (
    <h1 className={`font-title text-4xl ${className}`}>{children}</h1>
  );
};

export const H3 = ({ children, className }: Props) => {
  return (
    <h1 className={`font-title text-xl ${className}`}>{children}</h1>
  );
};

export const P = ({ children, className }: Props) => {
  return (
    <h1 className={`font-text text-base ${className}`}>{children}</h1>
  );
};