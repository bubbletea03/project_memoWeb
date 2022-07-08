import styled from "styled-components";

const MemoTab = styled.div`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);

  width: 200px;
  height: 80px;
  background-color: green;

  text-align: center;
`

function MemoTabs(){
    return (
        <>
          <MemoTab>탭임</MemoTab>
          <MemoTab>탭임2</MemoTab>
        </>
    )
}

export default MemoTabs;