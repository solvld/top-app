'use client';
import { Button, Title, Text, Tag, Rating } from 'app/ui/components';
import { useState } from 'react';

export default function Home() {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
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
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
