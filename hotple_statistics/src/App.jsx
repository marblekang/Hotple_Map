import React from "react";
import "./App.css";
import { MainPage } from "./pages/MainPage/MainPage";
import { Reset } from "styled-reset";
// 1. useEffect로 데이터 받아오기
// 2. 받아온 데이터에서 districts 만 추출하기
// 3. render
// 4. districts 누르면 해당되는 장소들 보여주기(혼잡도 순)

function App() {
  return (
    <>
      <Reset></Reset>
      <MainPage />
    </>
  );
}

export default App;
