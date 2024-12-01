import PropTypes from 'prop-types';
import playerlogo from "../../assets/images/player.png"
import flaglogo from "../../assets/images/flag.png"
const PlayerCard = ({player, handleSelectedPlayer}) => {  
    const {cover, name, country, role, rating, bat, bowl, price} = player;
    return (
        <div >
            <div className='border rounded-2xl p-8'>
                <div className='flex flex-col justify-center items-center mb-6'>
                    <img className='w-[380px] h-[240px] rounded-xl' src={cover} alt="" />  {/* player-cover-photo */} 
                </div>
                <div className='flex items-start gap-2'>
                    <img className='w-[24px]' src={playerlogo} alt="" />
                    <h2 className='text-xl font-semibold'>{name}</h2> {/* player-name */}
                </div>

                <div className='flex justify-between mb-4'>
                    <div className='flex items-center justify-center gap-1'>
                        <img src={flaglogo} alt="" />
                        <p className='text-[#888888]'>{country}</p> {/* player-country */}
                    </div>
                    <h2 className='bg-[#1313130D] px-3 py-2 rounded-lg text-sm'>{role}</h2> {/* player-role */}
                </div>
                <hr />
                <div className='flex justify-between items-center mt-4 mb-4'>
                    <h2>Rating:</h2>
                    <h2>{rating}</h2> {/* player-rating */}
                </div>
                <div className='flex justify-between items-center mb-4'>
                    <h2>Batting Style:</h2> 
                    <h2>{bat}</h2> {/* player-batting-style */}
                </div>
                <div className='flex justify-between items-center mb-4'>
                    <h2>Bowling Style:</h2> 
                    <h2>{bowl}</h2> {/* player-bowling-style */}
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <h2>Price: $</h2>
                        <h2>{price}</h2> {/* player-price */}
                    </div>
                    <button className='border px-3 py-2 rounded-lg text-sm hover:bg-[#E7FE29]'
                            onClick={()=>handleSelectedPlayer(player)}>Select Player</button> {/* select-player-button */}
                </div>
            </div>
            
        </div>
    );
};

PlayerCard.propTypes = {
    player: PropTypes.object,
    handleSelectedPlayer: PropTypes.func
}
export default PlayerCard;