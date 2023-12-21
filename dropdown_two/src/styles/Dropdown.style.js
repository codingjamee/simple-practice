import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 20em;
  min-height: 1.5em;
  border: 0.05em solid #777;
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em;
  border-radius: 0.25em;
  outline: none;
  &:focus {
    border-color: hsl(200, 100%, 50%);
  }
`;
export const Button = styled.div`
  flex-grow: 1;
`;

export const Value = styled.span`
  flex-grow: 1;
`;
// /* flex-grow 최대한 커짐 */
// .value {
// }

// .close-btn {
//   background: none;
//   color: #777;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   padding: 0;
//   font-size: 1.25em;
// }

// .close-btn:focus,
// .close-btn:hover {
//   color: #333;
// }

// /* height값이 부모에 없기 때문에
// 100%가 뭔지 모름!
// */
// .divider {
//   background-color: #777;
//   align-self: stretch;
//   /* flex를 썼기 떄문에 해당 공간을 모두 차지하게 보여주는 코드 */
//   width: 0.05em;
// }

// /* 테두리 윗면의 색상을 주어 캐럿모양 표현 */
// .caret {
//   translate: 0 25%;
//   border: 0.25em solid transparent;
//   border-top-color: #777;
// }

export const Options = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  /* 너무 스크롤이 높지 않게 */
  max-height: 15em;
  overflow-y: auto;
  border: 0.05em solid #777;
  border-radius: 0.25em;
  width: 100%;
  left: 0;
  top: calc(100% + 0.25em);
  background-color: white;
  z-index: 100;
  display: block;
`;

// .options.show {
//   display: block;
// }

// .option {
//   padding: 0.25em 0.5em;
//   cursor: pointer;
// }

// .option.selected {
//   background-color: hsl(200, 100%, 70%);
// }
// .option.highlighted {
//   background-color: hsl(200, 100%, 50%);
//   color: white;
// }
