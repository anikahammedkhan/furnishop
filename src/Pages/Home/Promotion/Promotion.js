import React from 'react';

const Promotion = () => {
    return (
        <div className='my-28 w-3/4 mx-auto'>
            <h1
                style={{
                    fontFamily: "Josefin Sans, sans-serif"
                }}
                className="text-center font-bold text-5xl"
            >What Furnishop Offer!</h1>
            <div className='grid grid-cols-4 gap-4 my-5'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://cdn-icons-png.flaticon.com/512/3901/3901488.png" alt="Shoes" className="rounded-xl w-1/3" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold"
                            style={{
                                fontFamily: "Josefin Sans, sans-serif"
                            }}
                        >Free Delivery</h2>
                        <p>
                            Free delivery on all orders over $100 <br />
                            Free delivery inside Dhaka
                        </p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://cdn-icons-png.flaticon.com/512/2424/2424710.png" alt="Shoes" className="rounded-xl w-1/3" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold"
                            style={{
                                fontFamily: "Josefin Sans, sans-serif"
                            }}
                        >Instant Return</h2>
                        <p>
                            You can return your product within 30 days
                            of receiving your order
                        </p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://cdn-icons-png.flaticon.com/512/5735/5735354.png" alt="Shoes" className="rounded-xl w-1/3" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold"
                            style={{
                                fontFamily: "Josefin Sans, sans-serif"
                            }}
                        >Premium Quality</h2>
                        <p>
                            We provide the best quality products
                        </p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://cdn-icons-png.flaticon.com/512/8971/8971582.png" alt="Shoes" className="rounded-xl w-1/3" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold"
                            style={{
                                fontFamily: "Josefin Sans, sans-serif"
                            }}
                        >24/7 Support</h2>
                        <p>
                            We are available 24/7 for your support
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;