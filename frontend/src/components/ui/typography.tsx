type Props = { children: React.ReactNode; className?: string; }

export const H1 = ({ children, className = '' }: Props) => {
  return (
    <h1 className={`font-title text-4xl ${className}`}>{children}</h1>
  );
};

export const H2 = ({ children, className = '' }: Props) => {
  return (
    <h2 className={`font-title text-lg ${className}`}>{children}</h2>
  );
};

export const H3 = ({ children, className = '' }: Props) => {
  return (
    <h3 className={`font-title text-base ${className}`}>{children}</h3>
  );
};

export const P = ({ children, className = '' }: Props) => {
  return (
    <p className={`font-text text-xl text-neutral-600 ${className}`}>{children}</p>
  );
};