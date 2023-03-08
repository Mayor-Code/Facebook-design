import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { RiShareForwardLine } from "react-icons/ri";
import { GiWorld } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { SlOptions } from "react-icons/sl";

export default function Post() {
  return (
    <div className="post">
      <div className="post--header">
        <div className="post--info">
          <div className="contact--image">
            <img src={require("./icons/user.png")} />
          </div>
          <div className="post--user--info">
            <div className="post--user--name">John Doe</div>
            <div className="post--attribute">
              <span>1d</span>
              <span className="dot">•</span>
              <span>
                <GiWorld />
              </span>
            </div>
          </div>
        </div>
        <div className="post--header--options">
          <div className="icons">
            <SlOptions />
          </div>
          <div className="icons">
            <MdClose />
          </div>
        </div>
      </div>
      <div className="post--caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat
        vel nulla sit amet pulvinar. In auctor convallis elit. Nunc imperdiet
        massa sit amet mauris rhoncus, id mattis est commodo. Sed eu ligula in
        tortor efficitur aliquet vitae sed lectus. Nulla in vulputate dui.
      </div>
      <hr />
      <div className="post--media">
        <img src={require("./images/placeholder.jpg")} alt="" />
      </div>
      <hr />
      <div className="post--reaction">
        <div className="reaction--icons">
          <div className="reaction">
            <img src={require("./icons/heart.png")} alt="" />
          </div>
          <div className="reaction">
            <img src={require("./icons/like.png")} alt="" />
          </div>
          <div className="reaction">
            <img src={require("./icons/emoji.png")} alt="" />
          </div>
          <div>1.9k</div>
        </div>
        <div className="reaction--details">
          <div className="post--text">
            <p>11 Comment</p>
          </div>
          <div className="post--text">
            <p>7 Share</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="post--action">
        <div className="icons">
          <AiOutlineLike /> <span>Like</span>
        </div>
        <div className="icons">
          <GoComment /> <span>Comment</span>
        </div>
        <div className="icons">
          <RiShareForwardLine />
          <span>Share</span>{" "}
        </div>
      </div>
    </div>
  );
}
