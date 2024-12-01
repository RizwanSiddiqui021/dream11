import bg from "../../assets/images/bg-shadow.png"
import footerlogo from "../../assets/images/logo-footer.png"
const Footer = () => {
    return (
        <div className="mt-[240px]">
            <div className="relative">
                {/* news-letter-section-start */}
                <div className="max-w-[980px] mx-auto border p-6 rounded-3xl absolute top-[-180px] left-0 right-0">
                <div className="bg-slate-100 text-center p-20 rounded-2xl" style={{backgroundImage:`url(${bg})`}}>
                    <div>
                        <h1 className="text-xl md:text-3xl font-bold mb-4">Subscribe to our Newsletter</h1>
                        <p className="text-[#131313B3] text-sm md:text-xl font-medium mb-5">Get the latest updates and news right in your inbox!</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4"> {/* news-letter-form */}
                    <input className="w-[280px] md:w-[400px] h-[56px] p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E7FE29]" type="email" placeholder="Enter your email"/>
                    <button type="submit"
                            className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-semibold py-4 px-6
                                        rounded-xl hover:opacity-90">Subscribe</button>
                    </div>
                </div>
                </div>
                {/* news-letter-section-end */}

                {/* footer-section-start */}
                <div className="bg-black rounded-t-2xl">
                    <div className="flex justify-center py-10 pt-[360px] md:pt-[240px]">
                        <img src={footerlogo} alt="" /> {/* footer-logo */}
                    </div>

                    <div className="flex flex-col gap-10 md:flex-row justify-around px-10 pb-11">
                        <div className="md:w-[405px]"> {/* about-us */}
                            <h1 className="text-white text-lg font-semibold mb-3">About Us</h1>
                            <p className="text-[#FFFFFF99]">We are a passionate team dedicated to providing the best services to our customers.</p>
                        </div>

                        <div> {/* Quick-Links */}
                            <h1 className="text-white text-lg font-semibold mb-3">Quick Links</h1>
                            <ul className="list-disc pl-5">
                                <li className="text-[#FFFFFF99]"><a href="#">Home</a></li>
                                <li className="text-[#FFFFFF99]"><a href="#">Services</a></li>
                                <li className="text-[#FFFFFF99]"><a href="#">About</a></li>
                                <li className="text-[#FFFFFF99]"><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div> {/* Subscribe */}
                            <h1 className="text-white text-lg font-semibold mb-3">Subscribe</h1>
                            <p className="text-[#FFFFFF99] mb-3">Subscribe to our newsletter for the latest updates.</p>
                            <div className="flex w-full max-w-sm overflow-hidden rounded-xl focus:ring-2 focus:ring-[#E7FE29]">
                            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 text-sm text-gray-700 placeholder-gray-500 bg-white"/>
                            <button className="px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-yellow-400 to-pink-500">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <hr className="text-[#FFFFFF99]" />
                    <div>
                        <h1 className="text-[#FFFFFF99] text-sm text-center py-5">@2024 RustyRizwaN All Rights Reserved.</h1>
                    </div>
                </div>
                {/* footer-section-end */}
            </div>
        </div>
    );
};

export default Footer;