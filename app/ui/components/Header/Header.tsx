import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function Header({ ...props }: HeaderProps): JSX.Element {
  return <div {...props}>Header</div>;
}
