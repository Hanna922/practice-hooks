import { useEffect, useRef, useState } from "react";
import defaultAxios from "axios";

export const useAxios = (options, axiosInstance = defaultAxios) => {
  // axios instance를 보내지 않는다면 패키지에서 axios를 얻어서 전달할 것
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    if (!options.url) {
      // url이 필요하기 때문
      return;
    }
    axiosInstance(options)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};

// const App = () => {
//   const { loading, error, data, refetch } = useAxios({
//     url: "https://yts.mx/api/v2/list_movies.json",
//   });
//   console.log(
//     `Loading : ${loading}\nError : ${error}\nData : ${JSON.stringify(data)}`
//   );
//   return (
//     <div className="App" style={{ height: "1000vh" }}>
//       <h1>{data && data.status}</h1>
//       <h2>{loading && "loading"}</h2>
//       <button onClick={refetch}>Refetch</button>
//     </div>
//   );
// };

// export default App;
