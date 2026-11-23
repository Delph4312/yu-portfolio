const base = import.meta.env.BASE_URL || './'
export const img = (name) => `${base}images/${name}`

export const works = [
  {
    id: 'little-fish',
    category: '游戏',
    title: '网页解谜游戏《小鱼》',
    date: '2026.11',
    cover: img('little-fish.jpg'),
    links: [
      {
        label: 'https://Delph4312.github.io/little-fish/',
        url: 'https://Delph4312.github.io/little-fish/',
      },
    ],
    paragraphs: [
      '2026年11月，你和你的朋友谢桐在外省合租，寻找工作多日都没有收获。这天周末，她慌张地拿着手机闯入你的房间，说她正在上高三的弟弟发来了一条奇怪的消息。',
      '你们急忙赶到朋友家，弟弟已经失踪，在警方调查离开时，你听到其中一位民警低声说了句“这是本月第七个了”，顿时感到毛骨悚然。',
      '不能坐以待毙，你们决定打开弟弟房间内的电脑查找线索。',
    ],
    tech: '依托 VS Code 开发环境，基于 Vite + Vue3 技术栈，结合 HTML5、CSS3、JavaScript 进行编码开发，在 AI 工具辅助下独立完成网页解谜小游戏；项目代码同步维护至 GitHub 仓库。负责整体页面布局搭建与游戏交互逻辑编码，通过 Vue Router 实现多游戏场景切换管理。',
    tags: ['Vue 3', 'Vite', 'Vue Router', '解谜游戏'],
  },
  {
    id: 'yuelan-time',
    category: '网站',
    title: '《悦览时光》网站前端设计与实现',
    date: '2026.05',
    cover: img('yuelan-home.jpg'),
    gallery: [img('yuelan-bookshelf.jpg')],
    links: [
      {
        label: 'https://Delph4312.github.io/yuelan-time/',
        url: 'https://delph4312.github.io/yuelan-time/',
      },
    ],
    paragraphs: [
      '悦览时光是面向阅读爱好者的线上阅读分享平台，提供书目浏览、分类检索、书籍详情、阅读广场、个人中心与书单收藏等功能，用户可以在线浏览各类图文内容、记录阅读书单与心得。网站整体采用轻盈温暖的视觉风格，营造舒适的阅读氛围。',
      '使用 VS Code 作为开发工具，采用 HTML5、CSS3、JavaScript 配合 Vue3 + Vite 技术栈完成开发，项目源码托管于 GitHub 仓库。',
      '独立完成页面 UI 设计、前端页面搭建与交互逻辑开发，通过 Vue Router 实现多页面切换与状态管理。',
    ],
    tags: ['Vue 3', 'Vite', 'Vue Router', 'UI 设计'],
  },
  {
    id: 'chengyi-pavilion',
    category: '网站',
    title: '《承遗阁》网站前端设计与实现',
    date: '2026.08',
    cover: img('chengyi-home.jpg'),
    gallery: [img('chengyi-community.jpg')],
    links: [
      {
        label: 'https://Delph4312.github.io/chengyi-pavilion/',
        url: 'https://delph4312.github.io/chengyi-pavilion/',
      },
    ],
    paragraphs: [
      '《承遗阁》是非遗文化数字展示网站，聚焦非遗项目线上数字化展示，包含非遗展品浏览、非遗分类检索、详情介绍、非遗资讯等功能模块，支持用户在线浏览各类非遗图文资料、查看非遗简介与传承信息，共计 19 个页面，适配 PC 端与移动端响应式访问。项目前期使用 Figma 完成整套页面 UI 原型与视觉稿设计；网站图片选用无版权素材，Logo 及装饰图形由本人独立创作。',
      '使用 VS Code、IDEA 作为开发工具，前端采用 Vite + Vue3 技术栈，结合 HTML5、CSS3、JavaScript 完成开发，项目源码托管于 GitHub 仓库。',
      '独立完成 UI 还原、页面搭建与动效交互开发，借助 Vue Router 统一管理页面路由。',
    ],
    tags: ['Vue 3', 'Vite', 'Vue Router', '响应式', 'Figma'],
  },
]

export const projects = [
  {
    name: '网页解谜游戏《小鱼》',
    url: 'https://github.com/Delph4312/little-fish',
    demo: 'https://Delph4312.github.io/little-fish/',
  },
  {
    name: '《承遗阁》网站前端设计与实现',
    url: 'https://github.com/Delph4312/chengyi-pavilion',
    demo: 'https://delph4312.github.io/chengyi-pavilion/',
  },
  {
    name: '悦览时光网站前端设计与实现',
    url: 'https://github.com/Delph4312/yuelan-time',
    demo: 'https://delph4312.github.io/yuelan-time/',
  },
]
