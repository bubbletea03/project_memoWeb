import logo from './logo.svg';
import './App.css';
import img_font_sizeUp from "./img/font_sizeUp.png";
import styledComponents from "styled-components";
import { useState } from 'react';

const MemoBox = styledComponents.textarea`
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

  font-size: 16px;
`

function App() {
  let [fontSize, set_fontSize] = useState(16);
  return (
    <>
      <MemoBox 
        defaultValue={localStorage.getItem("memo_content")} 
        onChange={(e)=>{localStorage.setItem("memo_content", e.target.value)}} 
        placeholder='내용을 입력하세요'/>
      <div className='buttons'>
        <button onClick={()=>{console.log("clicked")}} className='font-sizeUp-btn'><img src={img_font_sizeUp}/></button>
      </div>
    </>
  );
}

export default App;
