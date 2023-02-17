import React from "react";
import "./mainpage.css"
import SideNav from "./component/sidenav";
import categories from "./component/navdata";
import Contact from "./component/contact";
import {BiSearch} from "react-icons/bi";
import {MdVideoCall, MdVideoCameraFront, MdOutlineEmojiEmotions} from "react-icons/md";
import {SlOptions} from "react-icons/sl";
import {IoIosBook, IoIosFilm} from "react-icons/io";
import {RiVideoAddFill} from "react-icons/ri"
import {AiFillPicture} from "react-icons/ai";
import contacts from "./component/contactdata"
import Post from "./component/post";




function Mainpage() {
    const userdata = {
        name: "Balogun Mayowa Peter",
    }

    const sideNav = categories.map(item=>{
        return (
            <a href="#" key = {item.id}>
                 <SideNav data={item} />
            </a>
        )
    })

    const contactElement = contacts.map(contact=>{
        return (<a href="#" key={contact.id}>
            <Contact data={contact} />
        </a>
        )
    })
    console.log(contactElement)
    return(
        <div className="mainpage--container">
            <div className="mainpage--left">
                <div className="menu">
                    <Contact data={userdata}/>
                    {sideNav}
                </div>
                <div className="shortcut"></div>
            </div>
            <div className="mainpage--middle">
                <div className="event--section">
                    <div className="event--section--nav">
                        <div className="icons"><IoIosBook/> Stories</div>
                        <div className="icons"><IoIosFilm/> Reels</div>
                        <div className="icons"><RiVideoAddFill/> Rooms</div>
                    </div>
                    <div className="stories">
                        <div className="create--story">
                            <img src={require("./component/icons/user.png")} alt=""/>
                            <div>Create story</div>
                            <div className="create-icon">+</div>
                        </div>
                    </div>
                </div>
                <div className="create--post">
                    <div className="post--form">
                        <div className="contact--image"><img src={require("./component/icons/user.png")}/></div>
                        <div><input type="text" placeholder="What's on your mind, John?"/></div>
                    </div>
                    <hr/>
                    <div className="post--file">
                        <div style= {{color: "rgb(255, 31, 68)"}}><MdVideoCameraFront/> <span className="icons">Live video</span></div>
                        <div style= {{color: "rgb(15, 172, 15)"}}><AiFillPicture/> <span className="icons"> Photo/video</span></div>
                        <div style= {{color: "rgb(255, 221, 69)"}}><MdOutlineEmojiEmotions/> <span className="icons"> Feeling/activity</span></div>
                    </div>
                </div>
                <Post />
            </div>
            <div className="mainpage--right">
                <div className="contacts--container">
                    <div className="contacts--header">
                        <div>Contacts</div>
                        <div className="contacts--header--icons">
                            <div className="icons hover"><a href="#"><MdVideoCall /></a></div>
                            
                            <div className="icons hover"><a href="#"><BiSearch /></a></div>
                            <div className="icons hover"><a href="#"><SlOptions /></a></div>
                        </div>
                    </div>
                    {contactElement}
                </div>
            </div>
        </div>
    )
}

export default Mainpage