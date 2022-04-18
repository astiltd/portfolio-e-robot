import React, {useState} from 'react'
import {motion} from "framer-motion"
import AnimatedText from '../../AnimatedText.js'
import '../../AnimatedText.css'
import './navbar.css'

const Nav2 = () => {
    const [replay, setReplay] = useState(true);
    // Placeholder text data, as if from API
    const placeholderText = [
      { type: "heading1", text: "Everyday Robot" },
      // {
      //   type: "heading2",
      //   text: "Animating responsive text!"
      // }
    ];
  
    const container = {
      visible: {
        transition: {
          staggerChildren: 0.025
        }
      }
    };
  
    // Quick and dirt for the example
    // const handleReplay = () => {
    //   setReplay(!replay);
    //   setTimeout(() => {
    //     setReplay(true);
    //   }, 600);
    // };
  
    return (
    <div className='nav-container'>
    <div className='nav-logo'>
      <motion.div
        className="App"
        initial="hidden"
        // animate="visible"
        animate={replay ? "visible" : "hidden"}
        variants={container}
      >
        <div className="container">
          {placeholderText.map((item, index) => {
            return <AnimatedText {...item} key={index} />;
          })}
        </div>
        {/* <button onClick={handleReplay}>
          Replay <span>⟲</span>
        </button> */}
      </motion.div>
      </div>
      </div>
    );
}

export default Nav2