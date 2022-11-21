import { useEffect } from 'react';
import type { InferGetStaticPropsType } from 'next';
import getAllProduct from '@framework/product/get-all-product';

export async function getStaticProps() {
  const products = await getAllProduct();
  console.log('server');
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
  console.log('client');
  return (
    <div>
      {JSON.stringify(products)}
    </div>
  )
}
