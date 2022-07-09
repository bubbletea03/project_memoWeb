import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import Buttons from './components/Buttons';
import MemoTabs from './components/MemoTabs';
import MemoBox from './components/MemoBox';

import { change_localStorageArr_element, set_defaultValue_localStorage } from './functions';

/* 
  memo_contents : ["문자열", "문자열", "문자열" . . . ]
*/

function App() {
  let [fontSize, set_fontSize] = useState(16);
  let [memoTab_index, set_memoTab_index] = useState(0);

  set_defaultValue_localStorage("memo_contents", [""]);
  set_defaultValue_localStorage("memoTabs", ["lightgreen"]);
  set_defaultValue_localStorage("memoTab_titles", [""]);

  return (
    <>
      <MemoBox 
        defaultValue={
            JSON.parse(localStorage.getItem("memo_contents"))[memoTab_index]
        } 
        onChange={(e)=>{
          change_localStorageArr_element("memo_contents", memoTab_index, e.target.value);
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
