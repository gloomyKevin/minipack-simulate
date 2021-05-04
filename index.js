// // 获取配置文件
// const config = require('./minipack.config.js')
// // 入口
// const entry = config.entry
// const content = fs.readFileSync(entry, 'utf-8')

// const babelParser = require(@babelParser)
// const ast = babelParser.parse(content, {
//     sourceType: "module"
// })
// // 解析入口文件内容
// const {transformFromAst} = require('@babel/core')
// const {code} = transformFromAst(ast, null, {
//     presets: ['@babel/preset-env']
// })
// // 获取依赖模块
// // 定义依赖数组，存放ast中解析出的所有依赖
// const dependencies = []
// // 遍历及更新每一个子节点
// const traverse = require('@babel/traverse').default
// traverse(ast, {
//     // 遍历所有import模块，并将相对路径放入dependencies
//     ImportDeclaration: ({node}) => {
//         dependencies.push(node.source.value)
//     }
// })

// 重新梳理
const fs = require('fs')
const path = require('path')
const babelParser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const {transformFromAst} = require('@babel/core')
const config = require('./minipack.config.js')
// const { Parser } = require('webpack')
// const { relative } = require('path')
const entry = config.entry
const output = config.path

const content = fs.readFileSync(entry, "utf-8")
const ast = babelParser.parse(content, {
    sourceType: "module"
})
console.log(ast)

// function createAsset(filename) {
//     const content = fs.readFileSync(filename, 'utf-8')
//     const ast = babelParser.parse(content, {
//         sourceType: 'module'
//     })
//     const dependencies = []
//     traverse(ast, {
//         ImportDeclaration: ({node}) => {
//             dependencies.push(node.source.value)
//         }
//     })
//     const {code} = transformFromAst(ast, null, {
//         presets: ['@babel/preset-env']
//     }) 
//     return {
//         dependencies,
//         code
//     }
// }

// // 获取入口文件
// const mainAssert = createAsset(entry)
// // 创建依赖图
// // entry为入口文件的绝对地址
// const graph = {
//     [entry]: mainAssert
// }
// // 递归搜索所有依赖模块，加入到依赖关系图中
// function recursionDep(filename ,assert) {
//     assert.mapping = {}
//     const dirname = path.dirname(filename)
//     assert.dependencies.forEach((relativePath) => {
//         const absolutePath = path.join(dirname, relativePath)
//         assert.mapping[relativePath] = absolutePath
//     })
// }
// // 从入口开始递归
// // 遍历queue，获取每一个assert以及其所依赖的模块，并将其加入到队列，直到所有依赖模块遍历完成
// for(let filename in queue) {
//     let assert = queue[filename]
    
// }
