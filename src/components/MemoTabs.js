import styled from "styled-components";

const MemoTab = styled.div`
  background-color: ${(props) => props.backgroundColor || "lightgreen"};
  width: 100%;
  height: 60px;
  line-height: 60px;
  
  margin: 10px auto;

  text-align: center;
  font-size: 16px;
  color: gray;

  animation-name: fade;
  animation-duration: 1.0s;
`

function MemoTabs(){
    return (
        <>
          <div className="memoTab-box">
            <MemoTab>탭임</MemoTab>
            <MemoTab>탭임2</MemoTab>
          </div>
        </>
    )
}

export default MemoTabs;