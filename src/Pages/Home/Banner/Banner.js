import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../../Assets/Banner/banner-1.png";
import banner2 from "../../../Assets/Banner/banner-2.png";
import banner3 from "../../../Assets/Banner/banner-3.png";

const Banner = () => {
    return (
        <div>
            <Carousel autoPlay emulateTouch infiniteLoop showThumbs={false}>
                <div>
                    <img alt='sofa' src={banner1} />
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "35%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "left",
                        }}
                    >
                        <h1 className='text-pink-500 text-sm font-bold'>Best Furniture For Your Castle...</h1>
                        <p
                            style={{
                                fontFamily: 'Josefin Sans'
                            }}
                            className='text-5xl font-bold'
                        >New Furniture Collection <br /> Trends in 2020</p>
                        <p>
                            Best Collection of Furniture for your home, office, and garden. We have a wide <br /> range of furniture for
                            your home, office, and garden.
                        </p>
                        <button className='bg-pink-500 px-5 py-3 my-8 text-white font-semibold'>Shop Now</button>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            right: "35%",
                            transform: "translate(50%, -50%)",
                            textAlign: "right",
                        }}
                    >
                        <h1 className='text-pink-500 text-sm font-bold'>Best Furniture For Your Castle...</h1>
                        <p
                            style={{
                                fontFamily: 'Josefin Sans'
                            }}
                            className='text-5xl font-bold'
                        >New Furniture Collection <br /> Trends in 2020</p>
                        <p>
                            Best Collection of Furniture for your home, office, and garden. We have a wide <br /> range of furniture for
                            your home, office, and garden.
                        </p>
                        <button className='bg-pink-500 px-5 py-3 my-8 text-white font-semibold'>Shop Now</button>
                    </div>
                    <img alt='sofa' src={banner2} />
                </div>
                <div>
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "35%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "left",
                        }}
                    >
                        <h1 className='text-pink-500 text-sm font-bold'>Best Furniture For Your Castle...</h1>
                        <p
                            style={{
                                fontFamily: 'Josefin Sans'
                            }}
                            className='text-5xl font-bold'
                        >New Furniture Collection <br /> Trends in 2020</p>
                        <p>
                            Best Collection of Furniture for your home, office, and garden. We have a wide <br /> range of furniture for
                            your home, office, and garden.
                        </p>
                        <button className='bg-pink-500 px-5 py-3 my-8 text-white font-semibold'>Shop Now</button>
                    </div>
                    <img alt='chair' src={banner3} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;