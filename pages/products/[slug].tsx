import { Layout } from '@components/common';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';

// get all of the products slugs
// params slug is the same as the file name
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { slug: 'cool-hat' } },
            { params: { slug: 't-shirt' } },
            { params: { slug: 'light' } },
        ],
        fallback: false, // if false, if you try to access a page that doesn't exist, it will return 404
        // if true, it will try to generate the page on the fly
    }
};

// provide product speficic data to the page
export const getStaticProps = async ({ params }: GetStaticPropsContext<{slug: string}>) => {
    return {
        props: {
            product: {
                slug: params?.slug,
            }
        }
    }
};

export default function ProductSlug({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <div>{product.slug}</div>;
};

ProductSlug.Layout = Layout;