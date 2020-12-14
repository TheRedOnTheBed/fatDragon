/*
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-09 13:42:15
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-09 22:17:50
 */



module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    [
      "import",
      {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
      },
      "vant"
    ],

  ]
}