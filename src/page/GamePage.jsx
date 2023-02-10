import { useEffect } from "react";
import { useDispatch } from "react-redux"
import useGame from "../hooks/useGame";
import GameHero from "../components/game/GameHero";
import { fetchReadGames } from "../redux/thunks/gameThunk";

const GamePage = () => {
    const dispatch = useDispatch();
    const { games } = useGame();
  
    useEffect(() => {
      dispatch(fetchReadGames());
    }, []);
  
    return (
     
        <GameHero games = {games}/>
      
    );
  };
  
  export default GamePage;