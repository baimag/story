import "./Logo/Logo"
import "./Menu"
import "../Checkout/Checkout"
import Logo from "./Logo/Logo";
import Menu from "./Menu";
import Checkout from "../Checkout/Checkout";




function Header(){
    return( <div className="header">
     <Logo/>
     <Menu/>
     <Checkout/>
    </div>
    )
}






export default Header