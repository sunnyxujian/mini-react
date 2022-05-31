module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        pragma: "h", // jsx转换函数, 默认是 React.createElement, 没有引入React, 这里需要配置自定义实现的 h 函数
        pragmaFrag: "Fragment", // 片段函数, 默认是 React.Fragment, 没有引入React, 这里需要配置自定义实现的 Fragment 函数
      },
    ],
  ],
};
