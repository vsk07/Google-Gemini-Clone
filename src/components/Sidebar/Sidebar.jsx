// import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  }

  return (
    <div className="sidebar">
      <div className="top">
        <div className="menu-icon">
          <img
            onClick={() => setExtended((prev) => !prev)}
            className="menu"
            src={assets.menu}
            alt=""
          />
        </div>
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index)=>{
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry"  key={index}>
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)} ...</p>
                </div>
              );
            })}
            
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div
          className="bottom-item recent-title"
          style={{ justifyContent: extended ? "flex-start" : "center" }}
        >
          <img src={assets.help} alt="" />
          {extended ? <p>Help</p> : null}
        </div>

        <div
          className="bottom-item recent-title"
          style={{ justifyContent: extended ? "flex-start" : "center" }}
        >
          <img src={assets.history} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>

        <div
          className="bottom-item recent-title"
          style={{ justifyContent: extended ? "flex-start" : "center" }}
        >
          <img src={assets.settings} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
