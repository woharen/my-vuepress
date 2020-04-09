module.exports = {
    title: 'VinhoJiang',
    description: 'This is VinhoJiang!!!',
    //  网站路径
    bar: '/',
    markdown: {
        // 代码块显示行号
        lineNumbers: true
    },
    themeConfig: {
        locales: {
            lang: 'zh-CN',
            title: 'VinhoJiang',
            description: 'This is VinhoJiang!!!'
        },
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: '历史存档',
                link: '/documents/'
            },
            {
                text: 'github',
                link: 'https://www.github.com/woharen'
            },
            {
                text: '关于',
                link: '/about'
            }
        ],
        sidebar: {
            "/documents/": [
                ['', '说明'],
                {
                    title: 'JAVA', // 显示名 必要的
                    path: '/documents/java/', // 路径 可选的, 应该是一个绝对路径
                    collapsable: false, // 折叠 可选的, 默认值是 true,
                    sidebarDepth: 1, // 侧壁深度 可选的, 默认值是 1
                    children: [
                        ['/documents/java/', 'JAVA入门'],
                        ['/documents/java/two', 'JAVA第二个文件'],
                        ['/documents/java/three', 'JAVA第三个文件']
                    ]
                },
                {
                    title: 'VUE', // 显示名 必要的
                    path: '/documents/vue/', // 路径 可选的, 应该是一个绝对路径
                    collapsable: false, // 折叠 可选的, 默认值是 true,
                    sidebarDepth: 1, // 侧壁深度 可选的, 默认值是 1
                    children: [
                        ['/documents/vue/', '入门'],
                        ['/documents/vue/two', '第二个文件'],
                        ['/documents/vue/three', '第三个文件']
                    ]
                },
            ],
        }
    }
}
