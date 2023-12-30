import React, { ReactElement, createElement, useRef, useState } from "react";
import classes from "./carousel.module.css";
import flattenChildren from "react-keyed-flatten-children";
import { useControlled } from "./useControlled";

type CarouselPropTypes = {
  children: ReactElement | ReactElement[];
  defaultValue?: number;
  activeIndex?: number;
  indicators?: boolean; //사용자가 직접 넘겨주는 indicator 컴포넌트...?
  interval?: number | null; //사용자가 넘겨주는 interval...
  onSelect?: (val: number) => void; //사용자가 넘겨주는 ㅠ_ㅠ
  controls?: boolean;
  previousIcon?: ReactElement;
};

const Carousel = ({
  children,
  activeIndex: valueProp,
  defaultValue,
  ...props
}: CarouselPropTypes) => {
  const [viewIndex, setViewIndex] = useControlled({
    controlledValue: valueProp,
    defaultValue: 0,
  });
  let childNum = 0;
  const childArray: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >[] = [];
  //지금 보이고 있는 ref의 id
  const viewedComponentRef = useRef();

  flattenChildren(children).forEach((child) => {
    if (React.isValidElement(child)) {
      childArray.push(child);
      childNum++;
    }
  });

  const viewedComponent = createElement(childArray[viewIndex].type, {
    ...childArray[viewIndex].props,
    style: { flexGrow: 1 },
    ref: viewedComponentRef,
  });

  //사용자가 입력한 index.. 는 무얼까
  //

  const onClickBtn = (direction: string) => {
    console.log(direction);
    if (direction === "right") {
      if (viewIndex === childNum - 1) {
        return setViewIndex(0);
      }
      setViewIndex((prev: number) => prev + 1);
    } else if (direction === "left") {
      if (viewIndex === 0) {
        return setViewIndex(childNum - 1);
      }
      setViewIndex((prev: number) => prev - 1);
    }
  };

  let autoChangeIndex: NodeJS.Timeout;
  if (!valueProp) {
    autoChangeIndex = setTimeout(() => {
      setViewIndex((prev: number) => {
        if (prev === childNum - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);
  }

  return (
    <div className={`${classes.carouselWidthStyle} ${classes.carousel}`}>
      {props.controls && (
        <>
          <button
            onClick={onClickBtn.bind(null, "left")}
            style={{ border: "none" }}
          >
            &lt;
          </button>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {viewedComponent}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {Array(childNum)
                .fill(0)
                .map((_, idx) =>
                  idx === viewIndex ? (
                    <span
                      className="material-symbols-outlined"
                      key={`span-${idx}`}
                      onClick={() => setViewIndex(idx)}
                    >
                      radio_button_checked
                    </span>
                  ) : (
                    <span
                      className="material-symbols-outlined"
                      key={`span-${idx}`}
                      onClick={() => setViewIndex(idx)}
                    >
                      radio_button_unchecked
                    </span>
                  )
                )}
            </div>
          </div>
          <button
            onClick={onClickBtn.bind(null, "right")}
            style={{ border: "none" }}
          >
            &gt;
          </button>
        </>
      )}
      {!props.controls && (
        <>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {viewedComponent}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {Array(childNum)
                .fill(0)
                .map((_, idx) =>
                  idx === viewIndex ? (
                    <span
                      className="material-symbols-outlined"
                      key={`span-${idx}`}
                      onClick={() => {
                        setViewIndex(idx);
                        clearTimeout(autoChangeIndex);
                      }}
                    >
                      radio_button_checked
                    </span>
                  ) : (
                    <span
                      className="material-symbols-outlined"
                      key={`span-${idx}`}
                      onClick={() => {
                        setViewIndex(idx);
                        clearTimeout(autoChangeIndex);
                      }}
                    >
                      radio_button_unchecked
                    </span>
                  )
                )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
