import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";
//import useAuth from "../hooks/useAuth";
import { useDispatch } from "react-redux"
import useHome from "../hooks/useHome";
import HomeHero from "../components/home/HomeHero";
import { fetchReadPokemos } from "../redux/thunks/homeThunk";

const HomePage = () => {
    //const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pokemos } = useHome();
    //const { user } = useAuth();


   //useEffect(() => {
   //  if (user === false) {
   //    navigate('/login');
   //  }
   //}, [user]);

   //return (<h1>HomePage</h1>);

    useEffect(() => {
     dispatch(fetchReadPokemos());
     }, []);
    

    return (
     
        <HomeHero pokemos = {pokemos}/>
      
    );
};
  
  export default HomePage;