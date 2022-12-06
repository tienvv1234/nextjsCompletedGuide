import type { InferGetStaticPropsType } from 'next';
import {getAllProducts} from '@framework/product/';
import { getConfig } from '@framework/api/config';
import { Layout } from '@components/common';
import { ProductCard } from '@components/product';
import { Grid, Hero, Marquee } from '@components/ui';
// ssg
export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);
  return {
    props: {
      // Will be passed to the page component as props
      products,
    },
    revalidate: 10,
  };
}

// InferGetStaticPropsType<typeof getStaticProps> meaning is what we get from getStaticProps function
export default function HomePage({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline='Cookies, ice cream and muffin'
        description='dsfasd fasdfasdfasdfasdf asdfasdfasdfasdfasdfasdfasdf asdf asdfasdfasdfasdfasdfas dsffadsfasdfasdf '
      />
      <Marquee>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} variant='slim' />
        ))}
      </Marquee>
      <Grid layout='B'>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Marquee variant='secondary'>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} variant='slim' />
        ))}
      </Marquee> 
    </>
  );
}


HomePage.Layout = Layout;