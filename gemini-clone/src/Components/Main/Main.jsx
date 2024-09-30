import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
import { ReactTyped } from "react-typed";
import TypedText from '../TypeText/TypeText';

const Main = () => {

  const {onSent, recentPrompt, showResult,text, loading, resultData, setInput, input} = useContext(Context)
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">

        {!showResult 
        ?
        <div className="upper-container">
          <div className="greet">
          <h1><span>Hello, Dev.</span></h1>
          <h1>How can I help you today?</h1>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful place to see on an upcomming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve readabilty of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
          </div>

          :
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />

              {loading 
              ?
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
                :
                
                <ReactTyped strings={[resultData]} typeSpeed={10} dangerouslySetInnerHTML={{
                  __html: resultData,
                }} />
            }

              
            </div>
        </div>

        }

          
        

        
         

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
          Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
          </p>
        </div>
      </div>
      </div>
  )
}

export default Main