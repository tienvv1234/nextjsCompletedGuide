import type { InferGetStaticPropsType } from 'next';
import getAllProduct from '@framework/product/get-all-product';
import { getConfig } from '@framework/api/config';
import { Layout } from '@components/common'; 
import { ProductCard } from '@components/product';

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
      {products.slice(0, 3).map((product) => 
        <ProductCard key={product.id} product={product}/>
      )}
    </div>
  )
}

HomePage.Layout = Layout;