import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface SideBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function SideBar({ ...props }: SideBarProps): JSX.Element {
  return <div {...props}>SideBar</div>;
}
