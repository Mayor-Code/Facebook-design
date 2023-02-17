import React from "react";

export default function Contact(props){
    return (
        <div className="contact hover">
            <div className="contact--image">
                <img src={require("./icons/user.png")} alt=""/>
                { props.data.isOnline && <div className="greendot"></div>}
            </div>
            <div className="contact--name">{props.data.name}</div>
        </div>
    )
}