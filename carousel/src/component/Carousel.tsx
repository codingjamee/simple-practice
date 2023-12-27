import React, { ReactNode } from "react";

type CarouselPropTypes = {
  children: ReactNode;
  defaultValue?: number;
  value?: number;
  indicators: boolean;
  interval?: number | null;
  onSelect?: () => void;
  previousIcon?: ReactNode;
};

const Carousel = (props: CarouselPropTypes) => {
  // onSelect가 주어진다면 defaultValue를 value로?
  // value와 defaultValue 두개 다 오면 경고문구 주고
  // value 값만 사용!
  // onSelect가 없다면 defaultValue사용. 없다면 defaultValue에 기본값 주기

  //useControlled 커스텀훅

  //여기서는 Item을 시간에 맞춰 그려줘야 함 .

  //controlled 여부에 따라 로직 나눠야 함 .
  //만일 controlled면 사용자가 클릭함에 따라
  //index를 변화 시켜주고 화면에도 보여줘야 함
  //어떻게?

  //useRef로?
  //지금 보이고 있는 ref의 id가 무엇인지? 알아내는 방법
  //

  return <div>{props.children}</div>;
};

export default Carousel;
