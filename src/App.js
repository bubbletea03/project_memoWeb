import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Buttons from './components/Buttons';
import MemoTabs from './components/MemoTabs';
import MemoBox from './components/MemoBox';

function App() {
  let [fontSize, set_fontSize] = useState(16);
  return (
    <>
      <MemoBox 
        defaultValue={localStorage.getItem("memo_content")} 
        onChange={(e)=>{localStorage.setItem("memo_content", e.target.value)}} 
        placeholder='내용을 입력하세요'
        fontSize={fontSize+"px"}/>

      <MemoTabs/>

      <Buttons 
        fontSize={fontSize} 
        set_fontSize={set_fontSize}/>
    </>
  );
}

export default App;
