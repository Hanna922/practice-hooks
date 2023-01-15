import { useEffect, useRef, useState } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (typeof duration !== "number" || typeof delay !== "number") {
      return;
    }
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

// const App = () => {
//   const fadeInH1 = useFadeIn(1, 2);
//   const fadeInP = useFadeIn(5, 10);
//   return (
//     <div className="App">
//       <h1 {...fadeInH1}>Hello</h1>
//       {/* ...fadeInH1으로 인해 ref는 ref,
//           style에 들어있는 모든 prop들을 reference 할 것 */}
//       <p {...fadeInP}>lorem ipsum lalalalalal</p>
//     </div>
//   );
// };

// export default App;
