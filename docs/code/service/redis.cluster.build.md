---
title:系统服务
---
# Redis 集群搭建

::: tip 第一步
单个创建集群 以7000~7007 为例 搭建一主一重 留2台做扩容
至少6台redis 创建redis 配置文件名称
:::

```shell
mkdir -p /muti/7000  /muti/7001 /muti/7002  /muti/7003 /muti/7004 /muti/7005  /muti/7006 /muti/7007
```

:::tip 第二步
修改配置文件
:::

```shell
cp redis.conf  /muti/7000/
```
:::tip 第三步 需要修改的项
:::

```shell
# 我只有一台服务器所以都配置成这 如果是不同服务器需要用具体的ip
bind 127.0.0.1 
port 7000 
# 后台运行
daemonize yes 
# 一台电脑启动8个服务 如果不该的话 就会出错
pidfile /var/run/redis_7000.pid 
 # redis产生的文件存放位置
dir /muti/7000
# 是否一集群方式运行
cluster-enabled yes 
#Redis Cluster记录的启动信息文件，文件由cluster自动生成，不需要用户编辑
cluster-config-file nodes-7000.conf 
# 是否支持持久化 按需配置
appendonly	yes 
# 如果你希望在集群发生故障时可用的部分依然可以提供查询服务，可以将 cluster-require-full-coverage 的值设置为 no
cluster-require-full-coverage yes

# 当设置为 yes 后 master 发生故障时不会自动进行 failover，这时你可以进行手动的 failover 操作 
# 故障failover表现在一个master分片故障后，slave 接管master的过程
cluster-replica-no-failover yes 

```
:::tip 第四步
 迁移配置
 sed命名 '匹配类型/需要替换字符/替换成的字符/全部还是部分'   inputfile > outputfile
:::

```shell
sed 's/7000/7001/g'  /muti/7000/redis.conf >  /muti/7001/redis.conf
sed 's/7000/7002/g'  /muti/7000/redis.conf >  /muti/7002/redis.conf
sed 's/7000/7003/g'  /muti/7000/redis.conf >  /muti/7003/redis.conf
sed 's/7000/7004/g'  /muti/7000/redis.conf >  /muti/7004/redis.conf
sed 's/7000/7005/g'  /muti/7000/redis.conf >  /muti/7005/redis.conf
sed 's/7000/7006/g'  /muti/7000/redis.conf >  /muti/7006/redis.conf
sed 's/7000/7007/g'  /muti/7000/redis.conf >  /muti/7007/redis.conf
```

:::tip 第五步
启动redis
:::

```shell
redis-server /muti/7000/redis.conf
redis-server /muti/7001/redis.conf
redis-server /muti/7002/redis.conf
redis-server /muti/7003/redis.conf
redis-server /muti/7004/redis.conf
redis-server /muti/7005/redis.conf
redis-server /muti/7006/redis.conf
redis-server /muti/7007/redis.conf
```

:::tip 第六步
查看服务
:::

```shell
ps -ef|grep redis
```
:::tip 第七步
 多个redis搭建成型
:::

```shell
    redis-cli --cluster help
```
:::tip 第八步
安装帮助信息执行 create 
:::

````shell
#--cluster-replicas 一主多少从 1代表1从 2代表2从
redis-cli --cluster create host1:port1 ... hostN:portN  --cluster-replicas 1
````

:::tip 第九步
redis 扩容  扩容执行add-node 操作  同样可以查看 redis-cli --cluster help
:::

```
 add-node       new_host:new_port existing_host:existing_port
                 --cluster-slave # 默认master
                 --cluster-master-id <arg> #如果配置了 --cluster-slave 需要配置<arg>代表 cluster nodes 中的 具体的master的id
```

:::tip 第十步
扩容注意事项扩容后需要执行 分配槽位 不然扩容的部分还是不能用 相当于没有扩容
:::

```
redis-cli --cluster  reshard  host:port
```



