import Image from 'next/image';
import { Button, Title } from 'app/ui/components';
export default function Home() {
  return (
    <main>
      <Title>Main</Title>
      <Button arrow="right">button</Button>
      <Button appearance="ghost">button</Button>
    </main>
  );
}
