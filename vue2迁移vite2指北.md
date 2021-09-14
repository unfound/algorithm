1. npm i vite vite-plugin-vue2 -D
2. 创建vite.config.js配置文件
3. 在目录根文件夹创建index.html，并将入口js用script以模块形式引入
4. 配置resolve.extensions: ['.vue' + vue原本支持的那些] 最新版才支持
5. vuedraggable插件报错
6. crypto-js报错，替换成crypto-es
7. URI malformed把<%= BASE_URL %>占位符去掉
8. require不存在的地方都改为import引入，require.context也改成import.meta.globEager
9. webpack中import.meta.globEager会报错，写一个vite插件在编译的时候进行替换
10. public下的文件可以通过设置alias来兼容
11. 动态reqire使用import来解决