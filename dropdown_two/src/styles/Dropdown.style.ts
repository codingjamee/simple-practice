import styled, { css } from "styled-components";

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

export const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Value = styled.span`
  flex-grow: 1;
`;

// .close-btn:focus,
// .close-btn:hover {
//   color: #333;
// }

interface OptionsProps {
  isOpen: boolean;
  highlightedindex: boolean;
}

export const Options = styled.div<OptionsProps>`
  margin: 0;
  padding: 0;
  list-style: none;
  /* position: absolute; */
  /* 너무 스크롤이 높지 않게 */
  max-height: 15em;
  overflow-y: auto;
  border-bottom: 0.05em solid #777;
  border-right: 0.05em solid #777;
  border-left: 0.05em solid #777;
  width: 20em;
  left: 0;
  top: calc(100% + 0.25em);
  background-color: white;
  z-index: 100;
  display: block;
  padding: 0.25em 0.5em;
  cursor: pointer;
  ${(props) =>
    !props.isOpen &&
    css`
      background: none;
      color: #777;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 0;
      font-size: 1.25em;
    `}

  ${(props) =>
    props.highlightedindex &&
    css`
      background-color: hsl(200, 100%, 50%);
      color: white;
    `}
`;
export const Close = styled.button`
  background: none;
  color: #777;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.25em;
`;

// /* height값이 부모에 없기 때문에
// 100%가 뭔지 모름!
// */
export const Divider = styled.div`
  background-color: #777;
  align-self: stretch;
  width: 0.05em;
`;

export const Caret = styled.div`
  translate: 0 25%;
  border: 0.25em solid transparent;
  border-top-color: #777;
`;

// .option.selected {
//   background-color: hsl(200, 100%, 70%);
// }
// .option.highlighted {
//   background-color: hsl(200, 100%, 50%);
//   color: white;
// }
