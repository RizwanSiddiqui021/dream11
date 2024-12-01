import PropTypes from 'prop-types';
import bg from "../../assets/images/bg-shadow.png"
import navlogo from "../../assets/images/logo.png"
import mainlogo from "../../assets/images/banner-main.png"
import dollarlogo from "../../assets/images/dollar.png"
import hamlogo from "../../assets/images/hamburger.png"
const Header = ({credit, handleClaimFreeCredits}) => {
    return (
        <div>
            {/* nav-bar-section-start */}
            <div className="flex items-center justify-between mb-8 sticky top-0 bg-white z-10">
                <div>
                    <img src={navlogo} alt="" />
                </div>

                <div className="flex items-center gap-8 md:gap-12">
                    <div className='hidden md:flex gap-12'>
                        <a className='hover:underline' href="#">Home</a>
                        <a className='hover:underline' href="#">Teams</a>
                        <a className='hover:underline' href="#">Fixture</a>
                        <a className='hover:underline' href="#  ">Schedule</a>
                    </div>
                    <span className="border py-4 px-5 rounded-xl flex items-center gap-1">${credit}<img src={dollarlogo} alt="" /></span>
                    <div className='md:hidden'>
                        <img src={hamlogo} alt="" />
                    </div>
                </div>
            </div>
            {/* nav-bar-section-end */}

            {/* banner-section-start */}
            <div className="bg-slate-950 rounded-xl h-auto w-full bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center text-center"
                 style={{backgroundImage:`url(${bg})`}}>
                    <img className="mt-10 mb-6" src={mainlogo} alt="" />
                    <h1 className="text-[#fff] text-4xl font-bold mb-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <h2 className="text-[#FFFFFFB3] text-lg md:text-2xl font-medium mb-6">Beyond Boundaries & Beyond Limits</h2>
                    <div className="border-2 border-[#E7FE29] p-1 rounded-xl mb-10">
                    <button className="bg-[#E7FE29] px-5 py-4 rounded-xl font-bold"
                            onClick={handleClaimFreeCredits}>Claim Free Credits</button>
                    </div>
            </div>
            {/* banner-section-end */}
        </div>
    );
};

Header.propTypes = {
    credit: PropTypes.number,
    handleClaimFreeCredits: PropTypes.func
}

export default Header;