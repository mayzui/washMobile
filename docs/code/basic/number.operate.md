---
title:php
---

# 精确计算

```php
# 加
bcadd(string$num1,string$num2,?int$scale=null)：
# 减
bcsub(string$num1,string$num2,?int$scale=null)：
# 乘法
bcmul(string$num1,string$num2,?int$scale=null)：
# 除
bcdiv(string$num1被除数,string$num2除数且不能为0否则返回null,?int$scale=null 保留的小数点)：
#  比较两个任意精度的数字 。 两个数相等时返回 0；num1比num2大时返回 1； 其他则返回 -1
bccomp(string$num1,string$num2,?int$scale=null)：
# 任意精度数字取模
bcmod(string$num1,string$num2,?int$scale=null)：
# 任意精度数字的乘方
bcpow(string$num,string$exponent,?int$scale=null)：
# 将一个任意精度数提高到另一个，并按指定的modu降低
bcpowmod：
# 设置/获取所有 bc math 函数的默认小数点保留位数
bcscale(int$scale)：
# 任意精度数字的二次方根
bcsqrt(string$num,?int$scale=null)：
```
