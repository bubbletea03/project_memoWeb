import styled from "styled-components";

const MemoBox = styled.textarea`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 아이템을 x,y축 방향으로 size의 -50%만큼 땡기므로, 꼭짓점이 가운데가 됨. */

  resize: none;
  width: 400px;
  height: 400px;
  background-color: ${(props) => props.backgroundColor};

  text-align: center;

  border: 0;
  outline: 0;
  
  animation-name: fade;
  animation-duration: 1.0s;

  font-size: ${(props) => props.fontSize || "16px"};
`

export default MemoBox;