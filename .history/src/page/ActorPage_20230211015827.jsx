import { useEffect } from "react";
import { useDispatch } from "react-redux"
import useActor from "../hooks/useActor";
import ActorHero from "../components/actores/ActorHero";
import { fetchReadActores } from "../redux/thunks/actorThunk";

const ActorPage = () => {
    const dispatch = useDispatch();
    const { actores } = useActor();
  
    useEffect(() => {
      dispatch(fetchReadActores());
    }, []);
  
    return (
     
        <ActorHero actores = {actores}/>
      
    );
  };
  
  export default ActorPage;