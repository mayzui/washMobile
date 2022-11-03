---
title:系统服务
---
# 简单写个php-fpm重启脚本

:::danger 脚本练习
:::

```shell
#!/usr/bin/env bash

# 1.获取第一行第二列的值 也就是运行pid 
# 并将输出的结果交给masterPid
# 注意shell中,等号两边不能有空格

masterPid=`ps -aux|grep php-fpm|awk 'NR=1'|awk '{print $2}'`
# 2.整合新的命令

# -USR2 平滑重新加载配置文件
kill -USR2  $masterPid

# 查询上次执行结果

echo $?

```
