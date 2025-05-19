// pages.config.ts
// 用途：本配置文件用于自动扫描 renderer/pages 目录下的所有页面目录，自动生成多页应用配置，并提供两个工具方法 getRollupInput 和 getPageByName。
// 使用方式：
// 1. 在项目根目录下运行构建命令时，会自动读取此文件的配置生成对应的 HTML 入口文件。
// 2. 可通过 getPageByName 方法根据页面名称获取对应的页面信息。
// 页面结构要求：每个页面应为一个独立目录，包含 index.html、index.ts 和可选的 components 子目录。

import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'

// 获取当前模块所在目录
const __dirname = dirname(fileURLToPath(import.meta.url))
// 定义页面根目录路径
const pagesDir = resolve(__dirname, '../renderer/pages')

// 读取页面目录并生成配置
const pages = fs.readdirSync(pagesDir)
  .map(page => {
    const pagePath = resolve(pagesDir, page)
    if (fs.statSync(pagePath).isDirectory()) {
      // 构建页面信息对象，包含名称、完整路径和入口文件地址
      return {
        name: page, // 页面名称（即目录名）
        path: pagePath, // 页面完整路径
        entry: resolve(pagePath, 'index.html') // 页面入口文件
      }
    }
    return null // 非目录项返回 null
  })
  // 过滤掉所有非目录项，并确保类型正确
  .filter((page): page is { name: string; path: string; entry: string } => page !== null)

// 导出可直接使用的配置和方法
export const getRollupInput = () => {
  return pages.reduce((acc, page) => {
    acc[page.name] = page.entry // 将页面名称与入口文件映射
    return acc
  }, {} as Record<string, string>)
}

export const getPageByName = (name: string) => {
  return pages.find(page => page.name === name) // 根据页面名称查找对应页面
}

export default pages