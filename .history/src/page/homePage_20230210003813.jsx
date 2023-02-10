import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchReadPokemos } from "../redux/thunks/homethunk";

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReadPokemos());
    })
    return ( 
        <h1>Home page</h1>
     );
}
 
export default HomePage;