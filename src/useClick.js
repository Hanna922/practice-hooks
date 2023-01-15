import { useEffect, useRef, useState } from "react";

export const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    // useEffect가 mount 되었을 때, update 되었을 때 call (여기서는 dependency를 []로 설정하였으므로 update 시 호출X)
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      // useEffect를 return 받은 함수는 componentWillUnMount 때 호출됨
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    }; // => 이렇게 하는 이유는 component가 mount되지 않았을 때 eventListener가 배치되지 않게 하기 위함
  }, []);
  return element;
};

// const App = () => {
//   const sayHello = () => console.log("say hello");
//   const title = useClick(sayHello);
//   return (
//     <div className="App">
//       <h1 ref={title}>Hi</h1>
//     </div>
//   );
// };

// export default App;