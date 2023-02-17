import React from "react";
import './navbar.css';
import logo from './facebook-logo.png';
import { AiFillHome, AiOutlineSearch} from "react-icons/ai";
import {MdOutlineOndemandVideo} from "react-icons/md";
import {CiShop} from "react-icons/ci";
import {FaUsers, FaUser, FaFacebookMessenger} from "react-icons/fa";
import {RiGamepadLine} from "react-icons/ri";
import {BsFillBellFill, BsSearch} from "react-icons/bs";
import {CgMenuGridO} from "react-icons/cg";


function Navbar(){
    return (
        <div className="navbar flex-row">
            <div className="navbar--left flex-row">
                <div className="facebook-img"><img src={logo} alt="facebook logo"/></div>
                <div className="search">
                    <div className="search-icon"><AiOutlineSearch /></div><input type="text" placeholder="Search Facebook"/>
                </div>
            </div>
            <div className="navbar--middle flex-row">
                <div className="icons flex-row"><a href="#"><AiFillHome/></a></div>
                <div className="icons flex-row"><a href="#"><MdOutlineOndemandVideo/></a></div>
                <div className="icons flex-row"><a href="#"><CiShop/></a></div>
                <div className="icons flex-row"><a href="#"><FaUsers/></a></div>
                <div className="icons flex-row"><a href="#"><RiGamepadLine/></a></div>
            </div>
            <div className="navbar--right flex-row">
                <div className="icons flex-row"><a href="#"><CgMenuGridO/></a></div>
                <div className="icons flex-row"><a href="#"><FaFacebookMessenger/></a></div>
                <div className="icons flex-row"><a href="#"><BsFillBellFill/></a></div>
                <div className="icons flex-row"><a href="#"><FaUser/></a></div>
            </div>
        </div>
    )
}

export default Navbar