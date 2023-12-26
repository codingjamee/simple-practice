const counter = (function () {
  let num = 0;
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return num > 0 ? --num : 0;
    },
  };
})();

const makeCounter = (aux) => {
  let counter = 0;
  return () => {
    counter = aux(counter);
    return counter;
  };
};

//보조함수
const increase = (n) => {
  return ++n;
};
