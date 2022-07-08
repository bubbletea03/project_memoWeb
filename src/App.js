import logo from './logo.svg';
import './App.css';
import styled, { css } from "styled-components";
import { useState } from 'react';
import Buttons from './components/Buttons';
import MemoTabs from './components/MemoTabs';


const MemoBox = styled.textarea`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 아이템을 x,y축 방향으로 size의 -50%만큼 땡기므로, 꼭짓점이 가운데가 됨. */

  resize: none;
  width: 400px;
  height: 400px;
  background-color: rgb(187, 217, 141);

  text-align: center;

  border: 0;
  outline: 0;

  font-size: ${(props) => props.fontSize || "16px"};
  ${(props) => props.animationActive && `animation-duration: 1.0s; animation-name: fade`}
`

function App() {
  let [fontSize, set_fontSize] = useState(16);
  return (
    <>
      <MemoBox 
        defaultValue={localStorage.getItem("memo_content")} 
        onChange={(e)=>{localStorage.setItem("memo_content", e.target.value)}} 
        placeholder='내용을 입력하세요'
        fontSize={fontSize+"px"}
        animationActive/>

      <MemoTabs/>

      <Buttons 
        fontSize={fontSize} 
        set_fontSize={set_fontSize}/>
    </>
  );
}

export default App;
