import { useEffect } from 'react';
import type { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
  const products = [1, 2, 3];
  return {
    props: {
      // Will be passed to the page component as props
      products,
    },
    revalidate: 10,
  };
}

export default function HomePage({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      hello world
    </div>
  )
}
