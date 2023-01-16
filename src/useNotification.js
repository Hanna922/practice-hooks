import { useEffect, useRef, useState } from "react";

export const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    // window가 아니라면 이 브라우저에서는 notification을 지원하지 않는 것
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};

// const App = () => {
//   const triggerNotification = useNotification("Can I steal your phone?", {
//     body: "Hello",
//   });
//   return (
//     <div className="App" style={{ height: "1000vh" }}>
//       <button onClick={triggerNotification}>Hello</button>
//     </div>
//   );
// };

// export default App;

// notification API 공식문서 (MDN) 참고
// notification.permission이 default일 경우 모든 알람이 허용 X
// => default는 사용자의 선택을 알 수 없어서 browser는 value가 denied인 것처럼 행동할 것
