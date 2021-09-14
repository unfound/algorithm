1. npm init -y
2. npm install webpack webpack-cli webpack-merge --save-dev
3. npm install html-webpack-plugin --save-dev 创建html
4. 通过output.clean来设置清空dist
5. npm install webpack-dev-server --save-dev
6. pnpm add style-loader css-loader less less-loader -D 处理less
7. 处理图片，使用自带的loader，Asset Module
8. 字体还有其他的静态资源都是如此
9. 代码分离
    - 通过dependOn来设置
    - splitChunks来提取分离重复模块
    - 动态导入: import和require.ensure
10. 缓存
    - 使用contenthash
    - 设置optimization.runtimeChunk来提取webpack的运行时代码，以及使用splitChunks来提取node_modules下的依赖
    - 设置optimization.moduleIds为deterministic以保证模块的hash不变
11. npm install postcss postcss-loader postcss-preset-env --save-dev 配置postcss，postcss-preset-env包含一些最新css特性，也包含autofixer，不用在安装，然后配置browserslist
12. npm install @babel/core @babel/preset-env --save-dev来设置babel，npm install @babel/plugin-transform-runtime @babel/runtime --save-dev来设置分离babel运行时代码，减少爆体积
13. npm install copy-webpack-plugin --save-dev 使用该插件复制public目录到生成目录下
14. npm install css-minimizer-webpack-plugin --save-dev并配置压缩css