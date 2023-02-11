import { useEffect } from "react";
import { useDispatch } from "react-redux"
import useActores from "../hooks/useActores";
import ActoresHero from "../components/actores/ActoresHero";
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