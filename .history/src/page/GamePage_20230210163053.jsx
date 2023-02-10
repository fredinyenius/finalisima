import { useEffect } from "react";
import { useDispatch } from "react-redux"
import useHome from "../hooks/useHome";
import HomeHero from "../components/home/HomeHero";
import { fetchReadPokemos } from "../redux/thunks/homeThunk";

const HomePage = () => {
    const dispatch = useDispatch();
    const { pokemos } = useHome();
  
    useEffect(() => {
      dispatch(fetchReadPokemos());
    }, []);
  
    return (
     
        <HomeHero pokemos = {pokemos}/>
      
    );
  };
  
  export default HomePage;