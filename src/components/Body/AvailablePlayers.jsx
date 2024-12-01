import PropTypes from 'prop-types';
import PlayerCard from './PlayerCard';
const AvailablePlayers = ({active ,players, handleSelectedPlayer}) => {
    
    return (
        <div className={`my-10 grid grid-cols-1 md:grid-cols-3 gap-7 ${active?'':'hidden'}`}>
            {
                players.map(player => <PlayerCard key={player.id} player={player} handleSelectedPlayer={handleSelectedPlayer}></PlayerCard>)
            }
        </div>
    );
};

AvailablePlayers.propTypes = {
    players: PropTypes.array,
    active: PropTypes.bool,
    handleSelectedPlayer: PropTypes.func
}
export default AvailablePlayers;