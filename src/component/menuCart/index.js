import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoBagHandleSharp } from "react-icons/io5";

function MenuCart(){
    
    return (
        <>
          <Link to="/cart" ><IoBagHandleSharp /><span>({total})</span></Link> 
        </>
    )
}
export default MenuCart;