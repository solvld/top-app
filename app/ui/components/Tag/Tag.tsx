import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: 's' | 'm';
  color?: 'primary' | 'ghost' | 'red' | 'green' | 'grey';
  href?: string;
}
export default function Tag({
  children,
  size = 's',
  color = 'ghost',
  href,
  className,
  ...props
}: TagProps) {
  return (
    <div
      className={clsx({ className }, styles.tag, styles[size], styles[color])}
      {...props}
    >
      {href ? <Link href={href}>{children}</Link> : children}
    </div>
  );
}
