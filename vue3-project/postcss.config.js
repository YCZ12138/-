/*
 * @Description: postcss.config.js
 * @Author: rendc
 * @Date: 2022-07-02 11:20:56
 * @LastEditors: rendc
 * @LastEditTime: 2022-07-02 11:40:21
 */
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,  // 设计稿的宽度
      unitToConvert: 'px', // 要转换的单位
      unitPrecision: 5,  // 转换后的精度
      propList: ['*'], // 指定转换的css属性
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ["wrap"],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      // landscape: true,
      // landscapeUnit: 'vw',
      // landscapeWidth: 667
    },
  },
};