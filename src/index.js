import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// 앞서 소개한 리액트 라우터를 적용하는 방법은
// 실행할 App 스크립트를
// <BrowserRouter></BrowserRouter> 로 감싸면 되여
// BrowserRouter에는 브라우저의 주소변경을 감지하는 기능이 있어요
// 이 라우터는 컴포넌트가 페이지를 
// 구성하고 이동하는데 필요한 기능을 제공합니다
// 모바일 어플용은 react-router-native
// 웹서비스는 react-router-dom


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
