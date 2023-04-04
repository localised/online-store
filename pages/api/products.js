export default function handler(req, res) {
    res.status(200).json({
        productId: '1',
        title: 'Men\'s',
        variantCategories: ['size', 'color'],
        skus: [
            {
                skuId: '1',
                title: 'Capri Mocha',
                price: 10,
                images: [
                    {
                        src: 'images/1.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/2.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/3.png',
                        alt: 'Shoe'
                    }
                ],
                description: `The perfect study armchair. Crafted from buttery full grain calf leather,
                Capri Mocha brings rich, timeless monochromatic color to the most versatile silhouette.
                The impact of a dress shoe but with all of the comfort/cool.`,
                variant: {
                    size: "7",
                    color: 'Mocha'
                }
            },
            {
                skuId: '2',
                title: 'Capri Mocha',
                price: 11,
                images: [
                    {
                        src: 'images/1.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/2.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/3.png',
                        alt: 'Shoe'
                    }
                ],
                description: `The perfect study armchair. Crafted from buttery full grain calf leather,
                Capri Mocha brings rich, timeless monochromatic color to the most versatile silhouette.
                The impact of a dress shoe but with all of the comfort/cool.`,
                variant: {
                    size: "8",
                    color: 'Mocha'
                }
            },
            {
                skuId: '3',
                title: 'Capri Mocha',
                price: 12,
                images: [
                    {
                        src: 'images/1.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/2.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/3.png',
                        alt: 'Shoe'
                    }
                ],
                description: `The perfect study armchair. Crafted from buttery full grain calf leather,
                Capri Mocha brings rich, timeless monochromatic color to the most versatile silhouette.
                The impact of a dress shoe but with all of the comfort/cool.`,
                variant: {
                    size: "9",
                    color: 'Mocha'
                }
            },
            {
                skuId: '4',
                title: 'Capri Mocha',
                price: 13,
                images: [
                    {
                        src: 'images/1.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/2.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/3.png',
                        alt: 'Shoe'
                    }
                ],
                description: `The perfect study armchair. Crafted from buttery full grain calf leather,
                Capri Mocha brings rich, timeless monochromatic color to the most versatile silhouette.
                The impact of a dress shoe but with all of the comfort/cool.`,
                variant: {
                    size: "10",
                    color: 'Mocha'
                }
            },
            {
                skuId: '5',
                title: 'Capri Triple White',
                price: 14,
                images: [
                    {
                        src: 'images/4.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/5.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/6.png',
                        alt: 'Shoe'
                    }
                ],
                description: `Any look, any day. (Every day?) In buttery full-grain calf leather,
                the men’s Capri Triple White sneakers are the ultimate wardrobe cornerstone.
                The one that lets you do you. These White Capri shoes are so neutral they freshen and compliment just about anything.
                These sneakers let you reinvent the fashion wheel, or keep the white capri classic. Rather than canvas,
                these white low-top sneakers are made with real Italian leather for only the best men’s capri look and wearability.
                Keep these kicks fresh or curiously banged up: your choice. \n\n Snag yourself a pair before you go out of style.`,
                variant: {
                    size: "7",
                    color: 'Triple White'
                }
            },
            {
                skuId: '6',
                title: 'Capri Triple White',
                price: 15,
                images: [
                    {
                        src: 'images/4.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/5.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/6.png',
                        alt: 'Shoe'
                    }
                ],
                description: `Any look, any day. (Every day?) In buttery full-grain calf leather,
                the men’s Capri Triple White sneakers are the ultimate wardrobe cornerstone.
                The one that lets you do you. These White Capri shoes are so neutral they freshen and compliment just about anything.
                These sneakers let you reinvent the fashion wheel, or keep the white capri classic. Rather than canvas,
                these white low-top sneakers are made with real Italian leather for only the best men’s capri look and wearability.
                Keep these kicks fresh or curiously banged up: your choice. \n\n Snag yourself a pair before you go out of style.`,
                variant: {
                    size: "8",
                    color: 'Triple White'
                }
            },
            {
                skuId: '7',
                title: 'Capri Triple White',
                price: 16,
                images: [
                    {
                        src: 'images/4.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/5.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/6.png',
                        alt: 'Shoe'
                    }
                ],
                description: `Any look, any day. (Every day?) In buttery full-grain calf leather,
                the men’s Capri Triple White sneakers are the ultimate wardrobe cornerstone.
                The one that lets you do you. These White Capri shoes are so neutral they freshen and compliment just about anything.
                These sneakers let you reinvent the fashion wheel, or keep the white capri classic. Rather than canvas,
                these white low-top sneakers are made with real Italian leather for only the best men’s capri look and wearability.
                Keep these kicks fresh or curiously banged up: your choice. \n\n Snag yourself a pair before you go out of style.`,
                variant: {
                    size: "9",
                    color: 'Triple White'
                }
            },
            {
                skuId: '8',
                title: 'Capri Triple White',
                price: 17,
                images: [
                    {
                        src: 'images/4.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/5.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/6.png',
                        alt: 'Shoe'
                    }
                ],
                description: `Any look, any day. (Every day?) In buttery full-grain calf leather,
                the men’s Capri Triple White sneakers are the ultimate wardrobe cornerstone.
                The one that lets you do you. These White Capri shoes are so neutral they freshen and compliment just about anything.
                These sneakers let you reinvent the fashion wheel, or keep the white capri classic. Rather than canvas,
                these white low-top sneakers are made with real Italian leather for only the best men’s capri look and wearability.
                Keep these kicks fresh or curiously banged up: your choice. \n\n Snag yourself a pair before you go out of style.`,
                variant: {
                    size: "10",
                    color: 'Triple White'
                }
            },
            {
                skuId: '9',
                title: 'Capri Clay',
                price: 18,
                images: [
                    {
                        src: 'images/7.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/8.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/9.png',
                        alt: 'Shoe'
                    }
                ],
                description: `The Capri Clay takes our iconic grey to new depths.
                This chameleon of grey will be able to adapt to whatever you pair it with.
                This colorway will effortlessly fit into your wardrobe and become your newest
                go-to sneaker for this season and next.`,
                variant: {
                    size: "7",
                    color: 'Clay'
                }
            },
            {
                skuId: '10',
                title: 'Capri Clay',
                price: 18,
                images: [
                    {
                        src: 'images/7.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/8.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/9.png',
                        alt: 'Shoe'
                    }
                ],
                description: `The Capri Clay takes our iconic grey to new depths.
                This chameleon of grey will be able to adapt to whatever you pair it with.
                This colorway will effortlessly fit into your wardrobe and become your newest
                go-to sneaker for this season and next.`,
                variant: {
                    size: "8",
                    color: 'Clay',
                }
            },
            {
                skuId: '11',
                title: 'Capri Clay',
                price: 19,
                images: [
                    {
                        src: 'images/7.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/8.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/9.png',
                        alt: 'Shoe'
                    }
                ],
                description: `The Capri Clay takes our iconic grey to new depths.
                This chameleon of grey will be able to adapt to whatever you pair it with.
                This colorway will effortlessly fit into your wardrobe and become your newest
                go-to sneaker for this season and next.`,
                variant: {
                    size: "9",
                    color: 'Clay',
                }
            },
            {
                skuId: '12',
                title: 'Capri Clay',
                price: 20,
                images: [
                    {
                        src: 'images/7.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/8.png',
                        alt: 'Shoe'
                    },
                    {
                        src: 'images/9.png',
                        alt: 'Shoe'
                    }
                ],
                description: `The Capri Clay takes our iconic grey to new depths.
                This chameleon of grey will be able to adapt to whatever you pair it with.
                This colorway will effortlessly fit into your wardrobe and become your newest
                go-to sneaker for this season and next.`,
                variant: {
                    size: "10",
                    color: 'Clay',
                }
            },
        ],
    })
}