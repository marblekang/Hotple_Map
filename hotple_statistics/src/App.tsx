import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const seoul: { poiId: string; poiName: string }[] = [
    {
      poiId: "5799875",
      poiName: "롯데월드몰",
    },
    {
      poiId: "5783805",
      poiName: "롯데백화점에비뉴엘월드타워점",
    },
    {
      poiId: "1172091",
      poiName: "타임스퀘어",
    },
    {
      poiId: "187961",
      poiName: "롯데월드잠실점",
    },
    {
      poiId: "214920",
      poiName: "신세계백화점강남점",
    },
    {
      poiId: "219475",
      poiName: "롯데백화점본점",
    },
    {
      poiId: "10067845",
      poiName: "더현대서울",
    },
    {
      poiId: "1931000",
      poiName: "NC백화점송파점",
    },
    {
      poiId: "188485",
      poiName: "롯데백화점잠실점",
    },
    {
      poiId: "2758086",
      poiName: "NC백화점강서점",
    },
    {
      poiId: "182018",
      poiName: "어린이대공원",
    },
    {
      poiId: "189146",
      poiName: "신세계백화점타임스퀘어점",
    },
    {
      poiId: "187760",
      poiName: "현대백화점무역센터점",
    },
    {
      poiId: "1133504",
      poiName: "롯데백화점에비뉴엘본점",
    },
    {
      poiId: "334736",
      poiName: "신세계백화점본점신관",
    },
    {
      poiId: "206277",
      poiName: "현대백화점천호점",
    },
    {
      poiId: "1191555",
      poiName: "디오트쇼핑몰",
    },
    {
      poiId: "2905972",
      poiName: "IFC몰",
    },
    {
      poiId: "1456335",
      poiName: "NC백화점불광점",
    },
    {
      poiId: "216009",
      poiName: "롯데백화점청량리점",
    },
    {
      poiId: "189138",
      poiName: "롯데백화점영등포점",
    },
    {
      poiId: "6144946",
      poiName: "현대백화점디큐브시티점",
    },
    {
      poiId: "551216",
      poiName: "현대백화점목동점",
    },
    {
      poiId: "558963",
      poiName: "롯데백화점노원점",
    },
    {
      poiId: "292664",
      poiName: "현대백화점압구정본점",
    },
    {
      poiId: "366844",
      poiName: "현대백화점신촌점",
    },
    {
      poiId: "527513",
      poiName: "마리오아울렛1관",
    },
    {
      poiId: "1516256",
      poiName: "롯데백화점건대스타시티점",
    },
    {
      poiId: "185965",
      poiName: "롯데백화점강남점",
    },
    {
      poiId: "2972787",
      poiName: "현대시티아울렛가산점",
    },
    {
      poiId: "359817",
      poiName: "갤러리아백화점명품관WEST",
    },
    {
      poiId: "380919",
      poiName: "현대백화점미아점",
    },
  ];

  console.log(seoul.map((value) => value.poiName));
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
