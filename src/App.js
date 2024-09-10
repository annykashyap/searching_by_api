import { useState } from "react";
import axios from "axios";

function App() {
  let ACCESS_API = "wZFkoHuCydOZlTBFSO3ARGqfKRkonVzdCF2lwx4wDkA";
  const [getinput, setinput] = useState();
  const [data, setdata] = useState([]);

  const handlechange = (e) => {
    setinput(e.target.value);
  };
  const handlsearch = async (e) => {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${getinput}&client_id=${ACCESS_API}`
    );

    setdata(response.data.results);
  };

  return (
    <div className="App">
      <div>
        <input type="text" value={getinput} onChange={handlechange} />
        <button onClick={handlsearch}>search</button>
      </div>
      {data.map((item) => {
        return (
          <>
            <h1>{item.titles}</h1>
            <img src={item.urls.small} />
          </>
        );
      })}
    </div>
  );
}

export default App;
