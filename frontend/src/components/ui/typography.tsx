type Props = { children: string; className: string; }

export const H1 = ({ children, className }: Props) => {
  return (
    <h1 className={`font-title text-6xl ${className}`}>{children}</h1>
  );
};

export const H2 = ({ children, className }: Props) => {
  return (
    <h1 className={`font-title text-lg ${className}`}>{children}</h1>
  );
};

export const H3 = ({ children, className }: Props) => {
  return (
    <h1 className={`font-title text-base ${className}`}>{children}</h1>
  );
};

export const P = ({ children, className }: Props) => {
  return (
    <h1 className={`font-text text-base ${className}`}>{children}</h1>
  );
};