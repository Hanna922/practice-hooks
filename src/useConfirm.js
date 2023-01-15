import { useEffect, useRef, useState } from "react";

export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      // confirm function이 browser에 message를 가지고 있다면
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

// const App = () => {
//   const deleteWorld = () => console.log("Deleting the world...");
//   const abort = () => console.log("Aborted");
//   const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
//   return (
//     <div className="App">
//       <button onClick={confirmDelete}>Delete the world</button>
//     </div>
//   );
// };

// export default App;
