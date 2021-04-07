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
const entry = config.entry
const output = config.path

function createAsset(filename) {
    const content = fs.readFileSync(filename, 'utf-8')
    const ast = babelParser.parse(content, {
        sourceType: 'module'
    })
    const dependencies = []
    traverse(ast, {
        ImportDeclaration: ({node}) => {
            dependencies.push(node.source.value)
        }
    })
    const {code} = transformFromAst(ast, null, {
        presets: ['@babel/preset-env']
    }) 
    return {
        dependencies,
        code
    }
}

