const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: jekyll-theme-cayman, // 使用npm包主题
  title: "fq-notes",
  description: 'vdoing博客主题模板',
  base: '/fq-notes/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "a3aa397d76a732a1082a",
        clientSecret: "3d4053ba3117d2db5124a2b25495ecd905b99bac",
        owner: "joe-min",
        repo: "fq-notes",
      },
    ],
  ],
  themeConfig,
}