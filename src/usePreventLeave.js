import { useEffect, useRef, useState } from "react";

export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = ""; // 이 코드가 있어야 작동
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  // beforeunload는 window가 닫히기 전에 function이 실행되는 것을 허락
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

// const App = () => {
//   const { enablePrevent, disablePrevent } = usePreventLeave();
//   return (
//     <div className="App">
//       <button onClick={enablePrevent}>protect</button>
//       <button onClick={disablePrevent}>unprotect</button>
//     </div>
//   );
// };

// export default App;
