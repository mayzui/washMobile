module.exports = {
    '/emotion/': [
        {
            children: [
                '5thing.md',
                '3GoodIdea.md',
                'toast.md',
                'reject.md',
                'leader.md',
            ],
        }
    ],
    '/code/': [
        {
            children: [
                {
                    text:'开发语言',
                    collapsible: true,
                    children: [
                        '/code/basic/array.sum.md',
                        '/code/basic/number.operate.md',
                    ],
                },
                {
                    text:'数据存储',
                    collapsible: true,
                    children: [
                        '/code/database/100w.mysql.md',
                    ],
                },
                {
                    text:'设计模式',
                    collapsible: true,
                    children: [
                        '/code/design/singleton.md',
                        '/code/design/singleFactory.md',
                        '/code/design/abstractFactory.md',
                        '/code/design/builder.md',
                        '/code/design/prototype.md',

                    ],
                },
                {
                    text:'前端技术',
                    collapsible: true,
                    children: [
                        '/code/htmlCssJs/electron.start.md',
                    ],
                },
                {
                    text:'系统服务',
                    collapsible: true,
                    children: [
                        '/code/service/sshPort.md',
                        '/code/service/restart.fpm.md',
                        '/code/service/redis.install.md',
                        '/code/service/redis.cluster.build.md',
                        '/code/service/dns.md',
                    ],
                },
            ],
        }
    ],
}
