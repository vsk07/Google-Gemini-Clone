// import React from 'react'
import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && input.trim()) {
      onSent();
    }
  };


  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.profile} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <span>Hello, Dev.</span>
              <p>How can i help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  What is the best path for me to reach my career goals in the
                  next 5 years?
                </p>
                <img src={assets.compass} alt="" />
              </div>
              <div className="card">
                <p>Generate creative ideas to improve my workflow.</p>
                <img src={assets.bulb} alt="" />
              </div>
              <div className="card">
                <p>
                  Draft a professional email response for my upcoming interview.
                </p>
                <img src={assets.message} alt="" />
              </div>
              <div className="card">
                <p>Help me optimize this algorithm for better performance.</p>
                <img src={assets.code} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.profile} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="main-bottom">
        <div className="search-box">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Enter a prompt here"
            onKeyDown={handleKeyPress}
          />
          <div className="search-box-icons">
            <img src={assets.gallery} alt="" />
            <img src={assets.mic} alt="" />
            {input ? (
              <img onClick={() => onSent()} src={assets.send} alt="" />
            ) : null}
          </div>
        </div>
        <p className="bottom-info">
          Gemini may occasionally provide incorrect information, so it &apos;s
          important to verify its answers. Learn more about your privacy and
          Gemini Apps.
        </p>
      </div>
    </div>
  );
};

export default Main;
