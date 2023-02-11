import { useEffect } from "react";
import { useDispatch } from "react-redux"
import useActores from "../hooks/useActores";
import ActoresHero from "../components/actores/ActoresHero";
import { fetchReadActores } from "../redux/thunks/actorThunk";

const ActoresPage = () => {
    const dispatch = useDispatch();
    const { actores } = useActores();
  
    useEffect(() => {
      dispatch(fetchReadActores());
    }, []);
  
    return (
     
        <ActoresHero actores = {actores}/>
      
    );
  };
  
  export default ActoresPage;