import { useEffect } from "react";
import { useDispatch } from "react-redux"
import useHome from "../hooks/useHome";
import HomeHero from "../components/home/HomeHero";
import { fetchReadPokemos } from "../redux/thunks/homeThunk";

const ActoresPage = () => {
    const dispatch = useDispatch();
    const { actores } = useActores();
  
    useEffect(() => {
      dispatch(fetchReadPokemos());
    }, []);
  
    return (
     
        <ActoresHero actores = {actores}/>
      
    );
  };
  
  export default ActoresPage;