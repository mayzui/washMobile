---
title:系统服务
---
# linux之ssh登录port修改

:::danger 修改默认22端口
:::

```shell
vim /etc/ssh/sshd_config
```

```shell
# If you want to change the port on a SELinux system, you have to tell
# SELinux about this change.
# semanage port -a -t ssh_port_t -p tcp #PORTNUMBER

Port 2222

```

```shell
systemctl restart sshd
```
