import PropTypes from 'prop-types';
const Body = ({active, handleActiveButton, selectedPlayers}) => {
    return (
        <div className="flex flex-col-reverse gap-4 md:flex-row justify-between items-center mt-10">
            <div className='flex gap-2'>
                <h2 className='text-2xl font-bold'>{`${active?'Available Players':'Selected Players'}`}</h2> {/* available-players-title */}
                <h2 className='text-2xl font-bold'>{`${active?'':`(${selectedPlayers.length}/11)`}`}</h2>    {/* selected-players-title */}
            </div>
            <div className="flex gap-2">
                <button className={`px-4 py-3 rounded-xl font-bold ${active?'bg-[#E7FE29]':''}`}
                        onClick={()=>handleActiveButton(0)}>Available</button>                                {/* Available-active-state */}
                <button className={`px-4 py-3 rounded-xl font-bold ${active?'':'bg-[#E7FE29]'}`}
                        onClick={()=>handleActiveButton(1)}>Selected ({selectedPlayers.length}/11)</button>   {/* Selected-active-state */}
            </div>
        </div>
    );
};

Body.propTypes = {
    active: PropTypes.bool,
    handleActiveButton: PropTypes.func,
    selectedPlayers: PropTypes.array
}

export default Body;