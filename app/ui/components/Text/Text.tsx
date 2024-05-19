import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.css';

interface TextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size?: 's' | 'm' | 'l';
}
export default function Text({
  children,
  size = 'm',
  className,
  ...props
}: TextProps) {
  return (
    <p className={clsx({ className }, styles.text, styles[size])} {...props}>
      {children}
    </p>
  );
}
