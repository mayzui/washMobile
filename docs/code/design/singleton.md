---
title:设计模式
---

# 单例模式
## 单例解决的问题
解决类的实例消耗资源,然而这些消耗并非必要, 例如数据库链接,计算机中打开资源管理器却具有唯一性
## 单例模式的定义
> 定义：单例模式singleton，是一种类的设计只会最多产生一个对象的设计思想
## 示例代码
```php

class  Singleton {

    private static $instance;
    // 禁止外部new
    private final function __construct(){}
    // 使用内部方法实例化对象
    public static function getInstance()
    {
        if (!(self::$instance instanceof self)) {
            self::$instance =  new self();
        }
        return self::$instance;
    }
    // 禁止克隆
    private final function clone(){}
    // 反序列化对象
    public function __wakeup()
    {
        throw new Exception("不能反序列化单例对象");
    }
}

# 客户端调用
$a = Singleton::getInstance();
$b = Singleton::getInstance();

if($a === $b){
    echo '单例';
} else {
    echo '非单例';
}
 
```
