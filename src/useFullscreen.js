import { useEffect, useRef, useState } from "react";

export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

// const App = () => {
//   const onFulls = (isFull) => {
//     console.log(isFull ? "We are full" : "We are small");
//   };
//   const { element, triggerFull, exitFull } = useFullscreen(onFulls);
//   return (
//     <div className="App" style={{ height: "1000vh" }}>
//       <div ref={element}>
//         <img src="https://item.kakaocdn.net/do/a1866850b14ae47d0a2fd61f409dfc057154249a3890514a43687a85e6b6cc82" />
//         <button onClick={exitFull}>Exit fullscreen</button>
//       </div>
//       <button onClick={triggerFull}>make fullscreen</button>
//     </div>
//   );
// };

// export default App;
