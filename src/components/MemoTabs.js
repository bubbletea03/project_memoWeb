import styled from "styled-components";
import { useState } from "react";
import { get_randomColor, push_localStorageArr, change_localStorageArr_element } from "../functions";

const MemoTab = styled.textarea`
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  height: 60px;
  resize: none;
  line-height: 60px;
  
  display: block;
  margin-bottom: 15px;
  margin-right: auto;
  border: 0;

  text-align: center;
  font-size: 16px;
  color: gray;

  animation-name: fade;
  animation-duration: 1.0s;
`

function MemoTabs({memoTab_index}){

    let [memoTabArr, set_memoTabArr] = useState(JSON.parse(localStorage.getItem("memoTabs")));
    return (
        <>
          <div className="memoTab-box">
            {
              memoTabArr.map((element, i)=>{
                  return (
                    <MemoTab 
                      defaultValue={
                          JSON.parse(localStorage.getItem("memoTab_titles"))[i]
                      }
                      onChange={(e)=>{
                        change_localStorageArr_element("memoTab_titles", i, e.target.value);
                      }}
                      placeholder='타이틀을 입력하세요'
                      key={i} backgroundColor={element}
                    />
                  )
              })

            }
            <button className="memoTab-add-btn" onClick={()=>{
              push_localStorageArr("memoTabs", get_randomColor());
              set_memoTabArr(JSON.parse(localStorage.getItem("memoTabs")));
              
              push_localStorageArr("memoTab_titles", "");
              push_localStorageArr("memo_contents", "");
            }}>+</button>
          </div>
        </>
    )
}

export default MemoTabs;