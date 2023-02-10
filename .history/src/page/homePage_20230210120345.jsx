import { useEffect } from "react";
import { useDispatch } from "react-redux"
//import useHome from "../hooks/useHome";
import HomeHero from "../components/home/HomeHero";
import { fetchReadPokemos } from "../redux/thunks/homethunk";

const HomePage = () => {
    const dispatch = useDispatch();
   // const { loading, Pokemos } = useHome();
  
    useEffect(() => {
      dispatch(fetchReadPokemos());
    }, []);
  
    return (
     
        <HomeHero />
      
    );
  };
  
  export default HomePage;