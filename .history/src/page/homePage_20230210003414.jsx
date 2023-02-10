import { useEffect } from "react";
import { dispatch, useDispatch } from "react-redux";
import { fetchReadPokemos } from "../redux/thunks/homethunk";

const HomePage = () => {
    const useDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReadPokemos());
    })
    return ( 
        <h1>Home page</h1>
     );
}
 
export default HomePage;