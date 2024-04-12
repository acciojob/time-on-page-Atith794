
import React,{useEffect, useState} from "react";
import './../styles/App.css';

const App = () => {
  const[timer,ssetTimer] = useState(0);

  useEffect(()=>{
    let timerInterval = setInterval(()=>{
      ssetTimer(time => time+1);
    },1000)

    return () => clearInterval(timerInterval);
  },[]);

  return (
    <div>
        {/* Do not remove the main div */}
        <p >You've been on this page for {timer} seconds.</p>
    </div>
  )
}

export default App
