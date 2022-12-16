import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Featured.moduler.css";
import { Autoplay, Pagination } from "swiper";

const FeaturedProducts = () => {
    const featuredProducts = [
        {
            id: 1,
            name: "Cantilever Chair",
            price: 42,
            productCode: "CH-2022001",
            image: "https://i.ibb.co/LCyvDk9/armchair-1.png",
            category: "chair",
        },
        {
            id: 2,
            name: "Cantilever Chair",
            price: 65,
            productCode: "CH-2022002",
            image: "https://i.ibb.co/NN0j6M5/armchair-2.png",
            category: "chair",
        },
        {
            id: 3,
            name: "Cantilever Chair",
            price: 32,
            productCode: "CH-2022003",
            image: "https://i.ibb.co/p1v3TSp/armchair-3.png",
            category: "chair",
        },
        {
            id: 4,
            name: "Cantilever Chair",
            price: 55,
            productCode: "CH-2022004",
            image: "https://i.ibb.co/2SRm9X4/armchair-4.png",
            category: "chair",
        },
        {
            id: 5,
            name: "Cantilever Chair",
            price: 48,
            productCode: "CH-2022005",
            image: "https://i.ibb.co/jVR7xbY/armchair-5.png",
            category: "chair",
        },
        {
            id: 6,
            name: "Cantilever Chair",
            price: 94,
            productCode: "CH-2022006",
            image: "https://i.ibb.co/vXyQXjJ/chair-1.png",
            category: "chair",
        },
        {
            id: 7,
            name: "Cantilever Chair",
            price: 75,
            productCode: "CH-2022007",
            image: "https://i.ibb.co/6thWjW4/chair-2.png",
            category: "chair",
        },
        {
            id: 8,
            name: "Cantilever Chair",
            price: 83,
            productCode: "CH-2022008",
            image: "https://i.ibb.co/2SRm9X4/armchair-4.png",
            category: "chair",
        }
    ];
    return (
        <div className='my-28 w-3/4 mx-auto'>
            <h1
                style={{
                    fontFamily: "Josefin Sans, sans-serif"
                }}
                className="text-center font-bold text-5xl"
            >Featured Products</h1>
            <div className='my-10'>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={50}
                    slidesPerView={4}
                    pagination={{
                        "clickable": true
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={false}
                    className="mySwiper"
                >
                    {
                        featuredProducts.map(product => (
                            <SwiperSlide key={product.id}>
                                <div className="w-full p-6 rounded-md shadow-lg">
                                    <img src={product.image} alt="" className="object-cover object-center w-full rounded-md" />
                                    <div className="mt-6 mb-2">
                                        <span className="block text-xs font-medium tracking-widest uppercase">{product.productCode}</span>
                                        <h2 className="text-xl font-semibold tracking-wide">{product.name}</h2>
                                    </div>
                                    <p>Price : {product.price}$</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default FeaturedProducts;