import React from "react";

function SideNav(prop){
    const img_url = `./icons/${prop.data.Image}`
    return (
        <div className="menu-item">
            <div className="sidenav--img"><img src={require(`${img_url}`)} width={30} height={30}/></div>
            <div className="sidenav--title"> {prop.data.title} </div>
        </div>
    )
}

export default SideNav
