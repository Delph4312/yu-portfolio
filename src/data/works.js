const base = import.meta.env.BASE_URL || './'
export const img = (name) => `${base}images/${name}`
export const video = (name) => `${base}videos/${name}`
export const hls = (name) => `${base}hls/${name}/index.m3u8`

const site = 'https://delph4312.github.io/yu-portfolio/'
const asset = (path) => site + path

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
      '2026年11月，你和你的朋友谢晴在外省合租，寻找工作多日都没有收获。这天周末，她慌张地拿着手机闯入你的房间，说她正在上高三的弟弟谢遥发来了一条奇怪的消息。',
      '你们急忙赶到朋友家，弟弟已经失踪，在警方调查离开时，你听到其中一位民警低声说了句“这是本月第七个了”，顿时感到毛骨悚然。',
      '不能坐以待毙，你们决定打开弟弟房间内的电脑查找线索。',
      '依托VS Code开发环境，基于Vite+Vue3技术栈，结合HTML5、CSS3、JavaScript 进行编码开发，在AI工具辅助下独立完成网页解密小游戏，项目代码同步维护至Github代码仓库。',
      '负责整体页面布局搭建、游戏交互逻辑编码，通过Vue Router实现多游戏场景切换管理。',
    ],
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
      '《悦览时光》是线上阅读展示网站，主打书籍阅览与作品展示，包含首页书籍推荐、书籍分类浏览、书籍详情卡片、阅读面板、阅读参数设置等模块，支持浏览书籍封面与简介，可调整阅读相关配置，页面支持 PC 端、移动端响应式适配。项目前期使用 Figma 完成页面 UI 原型与视觉稿设计。',
      '以 VS Code 为开发工具，采用 HTML5、CSS3、JavaScript 原生技术实现全站前端开发，独立完成页面效果还原与交互逻辑调试，项目源码托管在 Github 仓库。',
      '主导页面结构规划、视觉风格落地与动态交互开发，实现首页轮播展示、卡片悬停动效、多端自适应布局、阅读字号及主题配置等核心效果。',
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
      '《承遗阁》是非遗文化数字展示网站，聚焦非遗项目线上数字化展示，包含非遗展品浏览、非遗分类检索、详情介绍、非遗资讯等功能模块，支持用户在线浏览各类非遗图文资料、查看非遗简介与传承信息，共计 19 个页面，适配 PC 端与移动端响应式访问。项目前期使用 Figma 完成整套页面 UI 原型、视觉稿设计；网站图片选用无版权素材，Logo 及装饰图形由本人独立创作。',
      '使用 VS Code、IDEA 作为开发工具，前端采用 Vite+Vue3 技术栈，结合 HTML5、CSS3、JavaScript 完成开发，项目源码托管于 Github 仓库。',
      '独立完成 UI 还原、页面搭建与动效交互开发，借助 Vue Router 统一管理页面路由。',
    ],
    tags: ['Vue 3', 'Vite', 'Vue Router', '响应式', 'Figma'],
  },
  {
    id: 'ipod-web',
    category: '平面',
    title: 'IPod网页',
    cover: img('ipod-web.jpg'),
    tallCover: true,
    links: [
      {
        label: asset('images/ipod-web.jpg'),
        url: asset('images/ipod-web.jpg'),
      },
    ],
    paragraphs: [
      '本作品为 iPod 主题产品宣传单页，围绕复古 iPod 播放器打造品牌感产品展示页面，包含头部宣传横幅、产品场景展示、多版本产品选型、色彩选择、技术参数板块，以简约干净的苹果风格视觉呈现产品卖点，传递复古随身音乐设备的氛围感，版式层次清晰，图文搭配引导用户浏览产品信息。',
      '使用Adobe Illustrator完成全稿视觉设计，通过钢笔工具绘制产品造型、色块分割版式，搭配文字排版、图片置入与色彩调配，统一画面调性，独立完成构图规划、视觉元素绘制、图文层级编排，塑造简约高级的苹果风产品宣传视觉。',
    ],
    tags: ['平面设计', 'Adobe Illustrator', '产品宣传页', '版式设计'],
  },
  {
    id: 'wuchang-dami',
    category: '视频',
    title: '五常大米AI短视频',
    cover: img('wuchang-dami.jpg'),
    hlsSrc: hls('wuchang-dami'),
    videoSrc: video('wuchang-dami.mp4'),
    links: [
      {
        label: asset('videos/wuchang-dami.mp4'),
        url: asset('videos/wuchang-dami.mp4'),
      },
    ],
    paragraphs: [
      '五常大米主题宣传短视频，围绕五常大米地域特色、产品优势展开内容叙事，通过画面切换展示稻米产地风貌、种植环境与成品质感，节奏轻快，适合短视频平台传播，完整呈现农产品宣传短片的叙事逻辑。',
      '前期借助 DeepSeek 完成宣传脚本撰写，使用智谱清言生成分镜提示词，再由豆包生成对应画面素材，最后在剪映中完成素材整合、转场剪辑、字幕配乐与画面优化，独立完成从策划、素材生成到成片输出的全流程创作。',
    ],
    tags: ['AI 短视频', 'DeepSeek', '智谱清言', '豆包', '剪映'],
  },
  {
    id: 'wogan-guiyun',
    category: '视频',
    title: '视频剪辑《山野沃柑，桂韵流芳》',
    cover: img('wogan-guiyun.jpg'),
    hlsSrc: hls('wogan-guiyun'),
    videoSrc: video('wogan-guiyun.mp4'),
    links: [
      {
        label: asset('videos/wogan-guiyun.mp4'),
        url: asset('videos/wogan-guiyun.mp4'),
      },
    ],
    paragraphs: [
      '本作品为广西武鸣沃柑主题农业纪实栏目包装短片，围绕武鸣沃柑产业、壮乡农耕文化展开叙事，包含片头、片花、正片导视、片尾等成套栏目视觉内容，融合田园实景与本土文化元素，传递特色农业助力乡村振兴的主题，适配纪实栏目播出风格。',
      '借助DeepSeek和豆包辅助撰写解说词，使用Illustrator 绘制栏目专属角标，通过AU完成配音录制，以AE作为核心软件制作导视条、字幕动画等动态包装效果，整合多渠道搜集的图文视频素材，统一调色、把控动画节奏，独立完成整套栏目包装从文案策划、图形设计到动态合成的全流程创作。',
    ],
    tags: ['栏目包装', 'AE 动效', 'Illustrator', 'AU 配音'],
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
    name: '《悦览时光》网站前端设计与实现',
    url: 'https://github.com/Delph4312/yuelan-time',
    demo: 'https://delph4312.github.io/yuelan-time/',
  },
]
