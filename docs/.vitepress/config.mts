import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "post-docs",
  description: "A Post History Regulations Docs Repo",
  themeConfig: { // themeConfig 对象开始
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [ // sidebar 数组开始
      { // 第一个侧边栏组
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }, //

      { // 第二个侧边栏组：
        text: 'a',
        collapsed: false,
        items: [
            { text: 'a1', link: '/markdown' },
        ]
      }, // 别忘了这里需要一个逗号来分隔下一个侧边栏组

      { // 第三个侧边栏组：
        text: 'b',
        collapsed: false,
        items: [
            { text: 'b1', link: '/markdown' },
        ]
      } // 这是 sidebar 数组的最后一个元素，所以后面不需要逗号
    ], // sidebar 数组在这里正确闭合

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  } // themeConfig 对象在这里正确闭合
}) // defineConfig 函数在这里正确闭合