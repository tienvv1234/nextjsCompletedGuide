import { Layout } from '@components/common';
import { getConfig } from '@framework/api/config';
import { getAllProductsPaths, getProduct } from '@framework/product/';
import {
    GetStaticPaths,
    GetStaticPropsContext,
    InferGetStaticPropsType,
} from 'next';

// get all of the products slugs
// params slug is the same as the file name
export const getStaticPaths: GetStaticPaths = async () => {
    const config = getConfig();
    const { products } = await getAllProductsPaths(config);
    const slugs = products.map((p) => ({ params: { slug: p.slug } }));
    return {
        paths: slugs,
        fallback: false, // if false, if you try to access a page that doesn't exist, it will return 404
        // if true, it will try to generate the page on the fly
    };
};

// provide product speficic data to the page
export const getStaticProps = async ({
    params,
}: GetStaticPropsContext<{ slug: string }>) => {
    const config = getConfig();
    const { product } = await getProduct(config);
    return {
        props: {
            product,
        },
    };
};

export default function ProductSlug({
    product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            {product.name}
            {product.slug}
        </div>
    );
}

ProductSlug.Layout = Layout;
