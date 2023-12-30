import React, { ReactElement, createElement, useRef, useState } from "react";
import classes from "./carousel.module.css";
import flattenChildren from "react-keyed-flatten-children";

type CarouselPropTypes = {
  children: ReactElement | ReactElement[];
  defaultValue?: number;
  value?: number;
  indicators?: boolean;
  interval?: number | null;
  onSelect?: () => void;
  previousIcon?: ReactElement;
};

//기능 :

//useControlled훅
//controlled 컴포넌트면
//자동으로 하면 자동으로 넘겨지고

//unControlled면
//버튼이 없어도됨.
//그냥 자동으로 넘어감
//interval만 설정할 수 있도록 한다.

//사라질때마다 왼쪽으로 천천히 사라지는 효과
//나타날때마다 왼쪽으로 천천히 나타나는 효과
//이 동안에 다음 컴포넌트가 나타나야 함...

//좀더 생각해보기?
const carouselWidthStyle = { witdh: "600px;" };

const Carousel = ({ children }: CarouselPropTypes) => {
  const [viewIndex, setViewIndex] = useState(0);
  let childNum = 0;
  //넘겨받은 child들의 Array
  const childArray: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >[] = [];

  flattenChildren(children).forEach((child) => {
    //총 넘겨받은 children의 갯수 구하기 (next로 넘길때)
    if (React.isValidElement(child)) {
      childArray.push(child);
      childNum++;
    }
  });

  //지금 보이고 있는 ref의 id가 무엇인지? 알아내는 방법
  const viewedComponentRef = useRef();

  const viewedComponent = createElement(childArray[viewIndex].type, {
    ...childArray[viewIndex].props,
    ref: viewedComponentRef,
  });

  // onSelect가 주어진다면 defaultValue를 value로?
  // value와 defaultValue 두개 다 오면 경고문구 주고
  // value 값만 사용!
  // onSelect가 없다면 defaultValue사용. 없다면 defaultValue에 기본값 주기

  const onClickBtn = (direction: string) => {
    //오른쪽을 누르면 다음 컴포넌트를.
    //왼쪽을 누르면 왼쪽 컴포넌트를 보여줘야 함
    console.log(direction);
    if (direction === "right") {
      if (viewIndex === childNum - 1) {
        return setViewIndex(0);
      }
      setViewIndex((prev) => prev + 1);
    } else if (direction === "left") {
      if (viewIndex === 0) {
        return setViewIndex(childNum - 1);
      }
      setViewIndex((prev) => prev - 1);
    }
  };

  //unControlled일 때 timeout으로 viewedIndex를 변경

  //controlled 여부에 따라 로직 나눠야 함 .
  //만일 controlled면 사용자가 클릭함에 따라
  //index를 변화 시켜주고 화면에도 보여줘야 함
  //어떻게?

  return (
    <div className={`${classes.carouselWidthStyle} ${classes.carousel}`}>
      <button onClick={onClickBtn.bind(null, "left")}>&lt;</button>
      {viewedComponent}
      {/* indicator */}
      <button onClick={onClickBtn.bind(null, "right")}>&gt;</button>
    </div>
  );
};

export default Carousel;
