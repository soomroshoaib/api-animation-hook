import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";

import './App.css';

function App() {
  // const ref = useRef(null)
  // useEffect(()=>{
  //   // ref.current.focus()
  // },[])

  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: [
      {transform: "translate(0,0)"},
      {transform: "translate(800px,0)"},
    ],
    animationOptions: {
      delay: 2000, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
     asing: "ease-in-out", // Use a fancy timing function
    },
    // onReady: ({ playState, animate, animation }) => {
    //   // Triggered when the animation is ready to play
    // },
    // onUpdate: ({ playState, animate, animation }) => {
    //   // Triggered when the animation enters the running state or changes state
    // },
    // onFinish: ({ playState, animate, animation }) => {
    //   // Triggered when the animation enters the finished state
    // },
    // // More useful options...
  });

  return (
    <>
    <div className="App"  ref={ref}>
    {/* <input ref={ref} type="text" /> */}
    <h1>hello world </h1>
    {/* <div className="container">
      <p>🍿 Animation is {playState}</p>
      <div className="target" ref={ref} />
    </div> */}

  
    </div>
    <button onClick={()=>{getAnimation().pause()}}>pause</button>
    <button onClick={()=>{getAnimation().play()}}>play</button>
    


    </>
  );
}

export default App;
