# project_for_dd
# src/pages
#1、pages目录放页面组件
#   如设置常用应用页面存放目录为src/pages/appSetting
#   即有关于设置常用应用的所有文件都存放于src/pages/appSetting目录之下
#2、src/RootStore.js存放当前项目的公共状态值
#3、src/route.js为路由控制文件
#    各自页面下的路由应创建各自的路由文件，并引入到src/router文件内
#    如工作台页面的路由编写在src/tab/workBench/workBenchRouter.js文件，随后再引入到src/route.js（代码引入在文件 line 91）
# 4、src/uyils/Global.js文件导出了全局的一些变量，如需设置全局变量，可参考编写
# 5、src/uyils/CLOLOR.js文件设置了一些常用颜色，可参考使用
# 6、src/uyils/CommonStyles.js文件设置了一些全局样式可参考使用
# 7、src/uyils/request.js文件设置了请求
# 8、设置常用应用可将应用内容编写至RootStore,js文件，如常用应用中的视频监控（代码 #line 44 的userData）
# 9、关于各模块的一些公共变量存放在src/srore文件目录下 如工作台的src/srore/#workStore.js  可参考编写
# 10、src/config/apiConfig.js文件编写接口地址，参考编写
# 11、src/conponents目录存放公共组件，目前里面存放有公共头部组件，可参考使用

