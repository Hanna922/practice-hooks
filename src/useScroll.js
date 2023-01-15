import { useEffect, useRef, useState } from "react";

export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    // event를 추가했으면 같은 이름과 같은 handler로 지워야 한다는 걸 꼭 기억 !!
  }, []);
  return state;
};

// const App = () => {
//   const { y } = useScroll();
//   return (
//     <div className="App" style={{ height: "1000vh" }}>
//       <h1 style={{ position: "fixed", color: y > 500 ? "red" : "blue" }}>
//         Hello
//       </h1>
//     </div>
//   );
// };

// export default App;
