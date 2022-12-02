import cn from 'classnames';
import { FC, useState } from 'react';
import s from './ProductView.module.css';
import { Container, Button } from '@components/ui';
import Image from 'next/image';
import { Product } from '@common/types/product';
import { ProductSlider, Swatch } from '@components/product';

interface Props {
    product: Product;
}

type AvailableOptions = 'size' | 'color' | string;

type Choices = {
    [P in AvailableOptions]: string;
}

const ProductView: FC<Props> = ({ product }) => {
    const [choices, setChoices] = useState<Choices>({});
    console.log('choices', choices);
    return (
        <Container>
            <div className={cn(s.root, 'fit', 'mb-5')}>
                <div className={cn(s.productDisplay, 'fit')}>
                    <div className={s.nameBox}>
                        <h1 className={s.name}>{product.name}</h1>
                        <div className={s.price}>
                            {product.price.value}
                            {` `}
                            {product.price.currencyCode}
                        </div>
                    </div>
                    <ProductSlider>
                        { product.images.map((image) => 
                            // we can defind keep slider here but we don't need it
                            <div key={image.url} className={s.imageContainer}>
                                <Image
                                    className={s.img}
                                    src={image.url}
                                    alt={image.alt}
                                    width={1050}
                                    height={1050}
                                    quality='85'
                                />
                            </div>
                        )}
                    </ProductSlider>
                </div>
                <div className={s.sidebar}>
                    <section>
                        {product.options.map((option) =>  {
                            console.log(111);
                            return (
                                <div key={option.id} className='pb-4'>
                                <h2 className='uppercase font-medium'>{option.displayName}</h2>
                                <div className='flex flex-row py-4'>
                                    { option.values.map((value) => {
                                        const activeChoice = choices[option.displayName.toLowerCase()];
                                        console.log('activeChoice', activeChoice)
                                        return (   
                                            <Swatch
                                                key={`${option.id}-${value.label}`}
                                                label={value.label}
                                                color={value.hexColor}
                                                variant={option.displayName}
                                                active={value.label.toLowerCase() === activeChoice}
                                                onClick={() => setChoices({
                                                    ...choices,
                                                    [option.displayName.toLowerCase()]: value.label.toLowerCase(),
                                                })}
                                            />
                                        )}
                                    )}
                                </div>
                            </div>
                            )}
                        )}
                        <div className='pb-14 break-words w-full max-w-xl text-lg'>
                            {product.description}
                        </div>
                    </section>
                    <div>
                        <Button
                            className={s.button}
                            onClick={() => alert('Added to cart!')}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProductView;
