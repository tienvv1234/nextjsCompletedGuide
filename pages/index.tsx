import type { InferGetStaticPropsType } from 'next';
import getAllProduct from '@framework/product/get-all-product';
import { getConfig } from '@framework/api/config';

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProduct(config);
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
