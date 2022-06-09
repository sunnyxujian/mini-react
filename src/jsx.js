import { REACT_ELEMENT } from "./element";
import { wrapToVdom } from "./utils";

export function createElement(type, props, ...kids) {
  props = props || {}; // props可能为null
  props.children = kids.length === 1 ? wrapToVdom(kids[0]) : kids.map(wrapToVdom); // 把kids的基本元素包装成Vdom
  return {
    $$typeof: REACT_ELEMENT,
    type,
    ref: props.ref,
    key: props.key,
    props,
  };
}
