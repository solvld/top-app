import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance?: 'primary' | 'ghost';
  arrow?: 'right' | 'down' | 'none';
}
export default function Button({
  appearance = 'primary',
  children,
  arrow = 'none',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, { className }, styles[appearance])}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span className={clsx(styles.arrow, styles[arrow])}>»</span>
      )}
    </button>
  );
}
