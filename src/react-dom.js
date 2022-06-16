import { REACT_TEXT } from "./element";

/**
 * 需要把虚拟DOM转换成真实DOM并且插入容器中
 * @param {*} vdom 虚拟DOM
 * @param {*} container 容器
 */
function render(vdom, container) {
  mount(vdom, container);
}
function mount(vdom, container) {
  let newDOM = createDOM(vdom);
  container.appendChild(newDOM);
}

function createDOM(vdom) {
  let { type, props } = vdom;
  let dom; //真实DOM元素
  if (type === REACT_TEXT) {
    dom = document.createTextNode(props); //props是个字符串，不是一个DOM节点
  } else {
    dom = document.createElement(type);
  }
  if (props) {
    //更新属性 DOM 老属性对象 新属性对象
    updateProps(dom, props);
    //这是指的只有一个儿子的情况
    if (typeof props.children === "object" && props.children.type) {
      mount(props.children, dom);
    } else if (Array.isArray(props.children)) {
      reconcileChildren(props.children, dom);
    }
  }
  return dom;
}
function reconcileChildren(children, parentDOM) {
  for (let i = 0; i < children.length; i++) {
    mount(children[i], parentDOM);
  }
}
function updateProps(dom, newProps = {}) {
  for (let key in newProps) {
    if (key === "children") {
      continue;
    } else if (key === "style") {
      let styleObj = newProps[key];
      for (let attr in styleObj) {
        dom.style[attr] = styleObj[attr];
      }
    } else if (/^on[A-Z].*/.test(key)) { // 暂时的事件处理
      dom[key.toLowerCase()] = newProps[key];
    } else {
      //虚拟DOM属性一般来刚好和dom的属性相同的，都是驼峰命名 className
      //dom.className = 'title' setAttribute();
      dom[key] = newProps[key];
    }
  }
}

const ReactDOM = {
  render,
};
export default ReactDOM;
