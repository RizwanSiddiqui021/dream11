import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Body from './components/Body/Body';
import AvailablePlayers from './components/Body/AvailablePlayers';
import SelectedPlayers from './components/Body/SelectedPlayers';
import Footer from './components/Footer/Footer';

function App() {

  // add-credit
  const [credit, setCredit] = useState(0);

  const handleClaimFreeCredits = () =>{
    const newCredit = credit + 21000000;
    setCredit(newCredit)
    toast.success("Free Credits Added to Your Account.");
  }

  // decrease-credit-function
  const handleDecreaseCredit = (price) =>{
      const decreasedCredit = credit - price;
      setCredit(decreasedCredit)  
  }
  
  // increase-credit-function
  const handleIncreaseCredit = (price) =>{
    const increasedCredit = credit + price;
    setCredit(increasedCredit)  
  }
  
  // toggle-active-button
  const [active, setActive] = useState(true);

  const handleActiveButton = (num) =>{
    if(num == 0){
      setActive(true)
    }
    else{
      setActive(false)
    }
  }

  // fetch-available-players
  const[players, setPlayers] = useState([]);
  useEffect(()=>{
    fetch("players.json")
    .then(res => res.json())
    .then(data => setPlayers(data))
  },[])

  // selected-players
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const handleSelectedPlayer = (player) =>{

      const alreadySelected = selectedPlayers.find((p)=> p.id == player.id)
      if(alreadySelected){
        toast.error("This Player is Already Selected!!");
      }
      
      else if(credit<player.price){
        toast.error("Not Enough Credit!! Claim Free Credits First!");
      }

      else if(selectedPlayers.length>10){
        toast.error("Cannot Select More Than 11 Players.");
      }

      else{
        toast.success("Player Added to Your Team.");
        handleDecreaseCredit(player.price);
        const newPlayersList = [...selectedPlayers, player];
        setSelectedPlayers(newPlayersList);
      }  
    }

    // delete-player-from-selected-players
    const handleDelete = (player) =>{
      const remainingPlayers = selectedPlayers.filter((p)=> p.id !=player.id);
      setSelectedPlayers(remainingPlayers);
      toast.success("Player Removed From Your Team.");
      handleIncreaseCredit(player.price)
    }

  return (
    <div className='max-w-[1360px] mx-auto p-2 md:p-0 md:pt-10'>
      <Header credit={credit} handleClaimFreeCredits={handleClaimFreeCredits}></Header>
      <Body active={active} handleActiveButton={handleActiveButton} selectedPlayers={selectedPlayers}></Body>
      <AvailablePlayers active={active} players={players} handleSelectedPlayer={handleSelectedPlayer}></AvailablePlayers>
      <SelectedPlayers active={active} selectedPlayers={selectedPlayers}
                        handleDelete={handleDelete} handleActiveButton={handleActiveButton}></SelectedPlayers>
      <Footer></Footer>
      <ToastContainer position="top-center" autoClose={3000}/>
    </div>
  )
}

export default App
