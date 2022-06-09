import { REACT_TEXT } from "./element";
export function wrapToVdom(element) { // 将基本类型转成对象类型,为了方便后续的diff, react真实源码没有
  return typeof element === "string" || typeof element === "number"
    ? { type: REACT_TEXT, props: element }
    : element;
}