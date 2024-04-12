import { useState } from "react";
import burger from "../../../../assets/burger.svg"
import close from "../../../../assets/close.svg"
import user from "../../../../assets/user.svg"
import logo from "../../../../assets/logo.svg"
import './Navbar.css'



export default function Navbar() {
    return (
        <nav>
            <a href="#" className="nav-ico">
                <img src={logo} alt="go to home" />
            </a>
            <div className="mainNavlinks">
                <button  className="BurgerToggle">
                    <img src={burger} alt="ouverture du menu" />
                </button>
                <div className="NavLinks">

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