---
title:系统服务
---
# redis单机版安装


:::tip 下载,一般选取稳定版本
[获取下载地址](http://www.redis.cn/download.html),
:::

:::tip windows 安装
全部直接下一步安装即可
:::

::: tip linux 安装
:::

```
tar -zxvf redis*.tar.gz
cd  .redis/src/
make 
```
:::tip 启动
:::
```
src/redis.server  [ redis.conf ]
```


:::tip 配置
redis.conf配置文件为每个配置都添加了说明  只需要认得单词 基本上能猜出大致意思
:::

1.配置容量大小规则 单位不区分大小写
```

# 1k => 1000 bytes
# 1kb => 1024 bytes
# 1m => 1000000 bytes
# 1mb => 1024*1024 bytes
# 1g => 1000000000 bytes
# 1gb => 1024*1024*1024 bytes

```



2.常用配置说明

```
# 后台启动
daemonize yes

# 当运行多个redis服务时，需要指定不同的pid文件和端口
pidfile /var/run/redis.pid

# 指定redis运行的端口，默认是6379
port 16379

# 指定redis只接收来自于该IP地址的请求，如果不进行设置，那么将处理所有请求，
# 在生产环境中最好设置该项
bind 127.0.0.1

# 设置客户端连接时的超时时间，单位为秒。当客户端在这段时间内没有发出任何指令，那么关闭该连接
# 0是关闭此设置
timeout 0

# 指定日志记录级别
# Redis总共支持四个级别：debug、verbose、notice、warning，默认为verbose
# debug 记录很多信息，用于开发和测试
# varbose 有用的信息，不像debug会记录那么多
# notice 普通的verbose，常用于生产环境
# warning 只有非常重要或者严重的信息会记录到日志
loglevel debug

# 配置log文件地址
# 默认值为stdout，标准输出，若后台模式会输出到/dev/null
#logfile stdout
logfile /var/log/redis/redis.log

# 可用数据库数
# 默认值为16，默认数据库为0，数据库范围在0-（database-1）之间
databases 16
```

