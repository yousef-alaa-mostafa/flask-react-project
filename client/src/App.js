import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data_, setData] = useState({ members: [] });
  const [sendData, setSendData] = useState();

  const Route_ = "http://localhost:5000/";
  useEffect(() => {
    (async () => {
      let { data } = await axios.get(`${Route_}members`);
      setData(data);
    })();
  }, []);

  const handleSendRequest = async () => {
    // setSendData("");
    console.log(sendData);

    let data_in_json = {
      data: sendData,
    };

    const { data } = await axios.post(`${Route_}tryPost`, data_in_json, {
      validateStatus: false,
    });

    console.log(data);

    setSendData("");
  };

  return (
    <div className="App">
      <div>
        {data_.members.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div style={{ marginTop: "100px" }}>
            <input
              type="text"
              value={sendData}
              onChange={(e) => setSendData(e.target.value)}
            ></input>
            <input type="submit" onClick={handleSendRequest}></input>
            {data_.members.map((member, i) => (
              <p key={i}>{member}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
