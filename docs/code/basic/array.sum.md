---
title:php
---
# 数组函数求和

> 一维数组

```php
$a=[5,15,25]; 
# 值得注意的是
# $a=array(0=>5,1=>"15s",2=>25); 结果一样
echo array_sum($a); //45
```

> 二维数组根据字段求和

```php

$arr=[
    ['feb'=>5,'dec'=>5,total=>10],
    ['feb'=>10,'dec'=>10,total=>20],
];

$feb_total= array_sum(array_column($arr, 'feb'));
```
