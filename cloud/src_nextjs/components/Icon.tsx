interface IconProps {
  path: string;
  className?: string;
  fill?: boolean;
}

export function Icon({ path, className = 'w-6 h-6', fill = false }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      dangerouslySetInnerHTML={{ __html: path }}
    />
  );
}
