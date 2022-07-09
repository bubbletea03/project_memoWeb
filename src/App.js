import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import Buttons from './components/Buttons';
import MemoTabs from './components/MemoTabs';
import MemoBox from './components/MemoBox';

import { set_localStorageArr_element } from './functions';

/* 
  memo_content : ["문자열", "문자열", "문자열" . . . ]
*/

function App() {
  let [fontSize, set_fontSize] = useState(16);
  let [memoTab_index, set_memoTab_index] = useState(0);

  if(localStorage.getItem("memo_content") == null){
    localStorage.setItem("memo_content", JSON.stringify([""]));
  }
  if(localStorage.getItem("memoTabs") == null){
    localStorage.setItem("memoTabs", JSON.stringify(["lightgreen"]));
  }
  if(localStorage.getItem("memoTab_titles") == null){
    localStorage.setItem("memoTab_titles", JSON.stringify([""]));
  }

  return (
    <>
      <MemoBox 
        defaultValue={
            JSON.parse(localStorage.getItem("memo_content"))[memoTab_index]
        } 
        onChange={(e)=>{
          set_localStorageArr_element("memo_content", memoTab_index, e.target.value);
        }} 
        placeholder='내용을 입력하세요'
        fontSize={fontSize+"px"}
        backgroundColor={
          JSON.parse(localStorage.getItem("memoTabs"))[memoTab_index]
      }/>

      <MemoTabs memoTab_index={memoTab_index}/>

      <Buttons 
        fontSize={fontSize} 
        set_fontSize={set_fontSize}/>
    </>
  );
}

export default App;
