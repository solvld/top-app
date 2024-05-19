import Image from 'next/image';
import { Button, Title, Text, Tag } from 'app/ui/components';
export default function Home() {
  return (
    <main>
      <Title>Main</Title>
      <Button arrow="right">button</Button>
      <Button appearance="ghost">button</Button>
      <Text>new text!</Text>
      <Text size="l">Large text!</Text>
      <Tag>small</Tag>
      <Tag size="m" color="green">
        small
      </Tag>
      <Tag size="m" color="primary">
        prim
      </Tag>
      <Tag size="m" color="grey" href="/fii">
        link
      </Tag>
    </main>
  );
}
