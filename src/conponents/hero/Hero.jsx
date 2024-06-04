const Hero = () => {
    return (
        <div className="carousel w-full h-[50vh] relative">
            <div id="slide1" className="carousel-item relative w-full h-full">
                <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white max-w-md px-4">
                            <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
                            <p className="mt-4">
                                Discover the finest selection of properties and enjoy our exceptional service.
                                Our team is dedicated to helping you find your dream home, whether it's a luxury
                                villa, a beachfront property, or a cozy penthouse.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-full">
                <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white max-w-md px-4">
                            <h2 className="text-4xl font-bold">Our Mission</h2>
                            <p className="mt-4">
                                We aim to provide the best real estate services to our clients. Whether you are looking
                                to buy, sell, or rent, our team of experienced professionals is here to assist you
                                every step of the way. We strive to exceed your expectations and make your real estate
                                experience seamless and enjoyable.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-full">
                <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white max-w-md px-4">
                            <h2 className="text-4xl font-bold">Our Vision</h2>
                            <p className="mt-4">
                                Our vision is to be the leading real estate service provider in the region, known for our
                                commitment to excellence, integrity, and innovation. We are dedicated to continuously
                                improving our services and staying ahead of industry trends to better serve our clients.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-full">
                <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white max-w-md px-4">
                            <h2 className="text-4xl font-bold">Contact Us</h2>
                            <p className="mt-4">
                                Have questions or need assistance? Our team is here to help! Reach out to us for more
                                information about our properties and services. We are committed to providing you with
                                the highest level of customer service.
                            </p>
                            <p className="mt-2">
                                Email: info@realestate.com<br />
                                Phone: (123) 456-7890
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
