import { useContext } from "react";
import MyContext from "../components/MyContext";

const Main =()=>{
    const {userName,isLogin} = useContext(MyContext)
    
    return(
        <div>
            {isLogin ? (
                <p>Welcome,{userName}</p>
            ) : (
                <p>Please log in first.</p>
            )}
        </div>


    )
}

export default Main;