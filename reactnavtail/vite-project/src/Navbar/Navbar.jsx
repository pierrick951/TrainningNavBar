import { useState } from "react";
import burger from "../../../../assets/burger.svg"
import close from "../../../../assets/close.svg"
import user from "../../../../assets/user.svg"
import logo from "../../../../assets/logo.svg"
import './Navbar.css'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

    function handleClick() {
       setShowMenu(!showMenu)
    }
    





    return (
        <nav>
            <a href="#" className="nav-ico">
                <img src={logo} alt="go to home" />
            </a>
            <div className="mainNavlinks">
                <button
                    onClick={() => handleClick()}
                    className="BurgerToggle">
                    <img 
                    src={showMenu ? close : burger} alt="ouverture du menu" />
                </button>

                <div className={`${showMenu ? "open" : ""}   NavLinks`}>

                    <a href="#">home</a>
                    <a href="#">contact</a>
                    <a href="#">about</a>
                    <a href="#">discover</a>
                    <a href="#">legale</a>
                </div>
                <div className="navUser">
                    <img src={user} alt="" />
                </div>

            </div>
        </nav>
    )
}