import PropTypes from 'prop-types';
import deletelogo from "../../assets/images/delete.png"
const SelectedPlayers = ({active, selectedPlayers, handleDelete, handleActiveButton}) => {
    return (
        <div className={`${active?'hidden':''} pt-10`}>
            {
                selectedPlayers.map((player, idx) =>(
                    <div key={idx} className='pb-4'>
                        <div className='grid grid-cols-1 border rounded-2xl p-4'>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <img className='w-[180px] rounded-xl' src={player.cover} alt="" /> {/* player-cover-photo */}
                                </div>
                                <div className='w-[100%] flex items-center justify-between'>
                                <div>
                                    <h1 className='text-xl font-bold'>{player.name}</h1> {/* player-name */}
                                    <p>{player.role}</p>
                                    <p className='text-lg font-semibold'>${player.price}</p> {/* player-price*/}
                                </div>
                                <div>
                                    <button onClick={()=>handleDelete(player)}><img src={deletelogo} alt="" /></button> {/* remove-player-button */}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <button className="bg-[#E7FE29] px-5 py-4 rounded-xl font-bold"
                    onClick={()=>handleActiveButton(0)}>Add More Players</button>
        </div>
    );
};

SelectedPlayers.propTypes = {
    active: PropTypes.bool,
    selectedPlayers: PropTypes.array,
    handleDelete: PropTypes.func,
    handleActiveButton: PropTypes.func
}
export default SelectedPlayers;