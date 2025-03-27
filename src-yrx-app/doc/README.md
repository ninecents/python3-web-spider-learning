## 目录


| 题目 | 关键词 | 资源 |      |      |
| ---- | ---- | ---- | ---- | ---- |
|  1-安卓基础环境与逆向工具    | 安装JAVA：反编译工具依赖java |      |      |      |
|  2-frida配置-frida使用基础    |      |      |      |      |
|  3-frida定位签名校验    |      |      |      |      |
|  4-frida定位和还原简单请求参数    |      |      |      |      |
|  5-frida-还原RSA加密登录过程    |      |      |      |      |
|  6-续lesson5-object打印-frida-rpc    |      |      |      |      |
|  7-科普RSA    |      |      |      |      |
|  8-响应数据有加密    |      |      |      |      |
|  9-nexus6p刷机root    |      |      |      |      |
|  10-反序列化protobuf和简单so    |      |      |      |      |
|  11-抓包环境配置    |      |      |      |      |
|  12-抓包场景和阻碍解决方案基本概念    |      |      |      |      |
|  13-vpn中间人抓包TCPdemo    |      |      |      |      |
|  14-tcp与ssl发包java和native层溯源    |      |      |      |      |
|  15-r0capture与tcpdump与wireshark基本使用    |      |      |      |      |
|  16-r0capture拓展之Thread源码溯源    |      |      |      |      |
|  17-udp溯源与hook系统底层AllInOne    |      |      |      |      |
|  18-抓包拓展了解与脚本大致使用步骤    |      |      |      |      |
|  19-noProxy与vpn检测与sslpinning案例实战    |      |      |      |      |
|  20-demo验证大全与代码阅读与多维方式抓包    |      |      |      |      |
|  21-App之flutter案例抓包突破    |      |      |      |      |
|  22-短视频抓包方案大致介绍与专题结语    |      |      |      |      |
|  23-壳概念及一代壳加壳原理简介    |      |      |      |      |
|  24-一代壳脱壳原理简介及脚本测试    |      |      |      |      |
|  25-FRIDA-DEXDump核心原理介绍    |      |      |      |      |
|  26-FRIDA-DEXDump实战局限性及展望    |      |      |      |      |
|  27-二代壳指令抽取加壳原理简介    |      |      |      |      |
|  28-fartext整体及抽取脱壳原理简介    |      |      |      |      |
|  29-魔改版fartext增强功能脱壳机实战1    |      |      |      |      |
|  30-魔改版fartext增强功能脱壳机实战2    |      |      |      |      |
|  31-frida检测案例源码及检测点分析    |      |      |      |      |
|  32-自编译frida对抗检测实战及流程    |      | EnvCheck_1.0--com.yimian.envcheck.apk<br />~~58bd_10.14.0--com.wuba.town.client.apk~~ |      |      |
|  33-objection常规入门使用简介    |      |      |      |      |
|  34-frida基础使用1    |      | LessonTest没网络权限.apk |      |      |
|  35-frida基础使用2    |      |      |      |      |
|  36-frida基础使用3    |      |      |      |      |
|  37-frida-hook-so基础1    |      | LessonTest配合nativehook改造.apk |      |      |
|  38-frida-hook-so基础2    |      |      |      |      |
|  39-ida，trace分析还原ollvm1    |      |      |      |      |
|  40-ida，trace分析还原ollvm2    |      |      |      |      |
|  41-stalker与trace分析还原ollvm1    |      |      |      |      |
|  42-stalker与trace分析还原ollvm2    |      |      |      |      |
|      |      |      |      |      |
|      |      |      |      |      |
|      |      |      |      |      |
|      |      |      |      |      |
|      |      |      |      |      |

## 课程前言介绍

> 本课程讲解：
>
> frida技术 脱壳 抓包 各种定位分析方法 ida so分析，需root手机，需解决反框架，反设备等问题。
>
> 通过在实操中，熟悉常用的工具和明白常用套路，常用分析方法，并在熟悉和练习的过程中做到对安卓系统和安卓系统类的了解。

## 1-安卓基础环境与逆向工具



### 1.环境准备：

> - 安装JAVA：反编译工具依赖java
>
>         java官方下载地址：https://www.oracle.com/technetwork/java/javase/downloads/index.html
>
> - 注意：
>
>        安装完必须设置java`环境变量`
>        
>        检查安装成功：`java -version`
>
> - 手机一台：nexus 6p（刷机 root）找商家刷系统，
>
>       前期用网易mumu模拟器代替练习：https://mumu.163.com/
>
> - 电脑：内存越大越好

### 2.工具使用
>- `adb` 使用：需要单独下载（PS：模拟器、androidstudio里自带）
> 
>
> https://blog.csdn.net/weixin_43847093/article/details/84673414
>
> adb shell 进入手机
> 
> adb install xxx.apk 安装apk
> 
> adb install -r xxx.apk 覆盖安装 
> 
> adb uninstall 包名  卸载
> 
> 最好把文件放在/sdcard/ 目录下面
> 
> adb push 电脑端源文件路径  手机端目标路径
> 
> adb pull  手机端源文件路径  电脑源文件路径 
> 
> adb logcat 查看日志
> 
> .....
> 
>- 反编译工具：`apktool`
> 
>
> https://ibotpeaches.github.io/Apktool/
> 
>   反编译apk包：
>
>   `apktool d test.apk`
> 
>   重打包成apk：
> 
>   `apktool b test`
> 
>   优点：可以重打包apk
> 
>   缺点：只能使用命令，没有可视化操作界面，不方便分析代码，反编译（打包）近一两年的apk，很容易报错
> 
>- `jadx` 使用
> 
>
> ​    https://github.com/skylot/jadx
>
>   用最新的，少bug，内存使用少
> 
>   优点：可视化做得很好，搜索代码方便，容易上手
>
>   缺点：只能查看，不能修改代码，反混淆功能一般
> 
>- `jeb` 
> 
>   https://down.52pojie.cn/Tools/Android_Tools/
>   
>   jeb 使用时间到期，解决方法：拷贝jeb_3_1_9_patch文件夹（课程云盘）里所有覆盖jeb原来的
>   
>   优点：反编译比jadx强大，能动态调试smali，可视化，反混淆功能比jadx强


### 3. apk包文件结构：
>`.apk文件`，一种压缩包，包含：
>
>	classes.dex：编译后的代码
>	
>	AndroidManifest.xml：重要配置文件，APP启动入口，界面信息等等
>	
>	assets：资源目录，没被编译
>	
>	lib：so文件
>	
>	res：资源目录，被编译了
>	
>	resources.arsc：资源文件索引
>
>> 安卓虚拟机 davlink虚拟机（安卓4） art虚拟机（安卓5以后），java，dex
>
>
>​    
>代码分为：
>
>​       业务模块：
>
>           系统模块：com.android. 
> 
>    ​       第三方模块：网络请求（okhttp），支付(pay)，推送(umeng)等等
>
>  
>

###  4.重打包APK，签名
>- `smali:`
>
>  apktool d 反编译代码成smali文件：smali一种类似汇编格式
>
>  可以修改/增删smali代码，重打包成apk后执行
>
>  结合java代码看smali代码
>
>  dex转smali java -jar baksmali.jar d classes.dex
>
>
>
>- `keytool jarsigner` 工具是JAVA JDK自带的
>
>  生成证书
>
>  `keytool -genkey -keystore my-release-key.keystore -alias my_alias -keyalg RSA keysize 4096 -validity 10000`
>
>  jarsigner用证书给apk签名
>
>  `jarsigner -sigalg MD5withRSA -digestalg SHA1 -keystore my-release-key.keystore -signedjar 签名后.apk  签名前.apk my_alias` 
>
>  > 未签名APK不能在安卓手机上安装
>
>  > APP在启动时会对签名校验：重打包的APP可能需要逆向，跳过校验
>
>
>
>- 理论点：
>
>  APP简单启动顺序：点击APP启动--->执行application(oncreate方法)------>执行main activity(oncreate方法)---->启动成功
>
>  APP启动阶段可能会做的检测：
>
>  - 签名校验
>
>  - root检测
>
>
>
>- apktool 使用问题解决
>
>    1.Not a valid dex magic value
>
>    apktool d com.douguo.recipe_6.9.79.2_570.apk --only-main-classes
>
>    2.重新打包时报：Not a PNG file
>
>     用file 命令查看 文件类型 修改成正确的 重新打包
>
>     com.iCitySuzhou.suzhou001_8.2_54
>
>    3.重新打包报：error: No resource identifier found for attribute 'xxxxxx' in package
>
>    apktool d -r xxx.apk
>
>    jadx 打开xxx.apk 看 AndroidManifest
>
>    apktool b xxx
>
>    4.使用sec6讲的ratel
>
>  PS：逆向工具本身的局限性和Bug



### 5. 拓展阅读

>- Activity介绍：
>
>    拓展阅读
>
>  https://developer.android.google.cn/
>
>  https://developer.android.com/guide/components/activities/intro-activities
>
>- Application、类加载器简单初始化过程：
>
>    拓展阅读 
>
>  https://www.jianshu.com/p/8742dbf5ec3a
>
> java.lang.Class：
>     class类查阅
>     https://www.apiref.com/android-zh/java/lang/Class.html
>     安卓开发手册 API
>     https://developer.android.google.cn/reference/android/content/pm/Signature
>     安卓开发手册 API（中文）
>     https://www.matools.com/api/android
>     Java API
>     https://tool.oschina.net/apidocs/apidoc?api=jdk-zh



## 2-frida配置-frida使用基础

> 参考文章：`J:\_ALL\CODE\github\ninecents\python3-web-spider-learning\src-yrx-app\l2\README.md`



> 注意：
>
> - 不同版本的frida接口变化很大！



### 环境搭建



### Python + Javascript 固定模式

> （使用框架更舒服：支持TypeScript）

#### frida hook java方法

```js
Java.perform(
    function(){
        //hook 代码
    }
)

Java.use() 的使用
Java.enumerateClassLoaders(callbacks) 遍历classloader

// frida Hook Java类Tips
    访问成员变量写法：
        this.成员变量名.value
    hook匿名类写法：
        Java.use('类$类')     smali文件里找
    从匿名类/内部类访问外部类的属性写法：
        this.this$0.value.外部类的属性名.value
    新建一个对象写法 new
        类.方法名.$new(参数)
    重载写法
        类.方法名.overload(参数1，参数2.......).implementation
    hook 构造方法
        类.$init().implementation
```

#### frida hook so方法

```js

//1.找到 hello.so 里的printhello方法
var pointer = Module.findExportByName("hello.so", "printhello" )
//2.hook native方法
Interceptor.attach(pointer, callback)
Interceptor.attach(target,
                   {
    onEnter: function(args) {
        //target被调用时进入
        //do something
    },
    onLeave:function(retval){
        //do something
        //target执行完，退出target前执行
    }
}

                  )
打印so方法里的参数值
pointer.toInt32() 把指针所指向的值转成32位整型
pointer.readByteArray(16)  读16个字节，转成byte array
pointe.readCString()   转成字符串
```





### 两种启动hook方式：

> 1. attach 进程名   ：APP启动后再hook，不能hook app启动阶段
> 2. spawn ：重启APP，适合hook app 启动阶段









## 3-frida定位签名校验

> 参考文章：`J:\_ALL\CODE\github\ninecents\python3-web-spider-learning\src-yrx-app\l3\README.md`

### 基础知识

> 签名校验一般在APP启动阶段
>
> 签名示例代码：
>
> `context.getPackageManager().getPackageInfo(context.getPackageName(),64).signatures[0].hashCode()`
>
> tips：
>
>   逆向分析方法1：根据现象正向分析代码流程。 较难
>
> 
>
> > 拓展阅读
>
> - android.content.Context：保存应用环境信息
>
>     Context拓展阅读：
>
>   https://www.jianshu.com/p/0599b060e074
>
>   https://blog.csdn.net/bendan50/article/details/80142612
>
>   https://developer.android.google.cn/reference/android/content/Context
>
> - android.content.pm.PackageManager：
>
>   包管理器， 获取安卓系统信息和APP的信息
>
>     PackageManager拓展阅读：
>
>   https://www.cnblogs.com/travellife/p/3932823.html
>
>   https://developer.android.google.cn/reference/android/content/pm/PackageManager
>
> - Signature
>
>  	 https://developer.android.google.cn/reference/android/content/pm/Signature



### 类反射

>  反射调用好处：
>     屏蔽实现细节
>     调用私有方法
>     代码特征检测
>
> obj.getClass().`getMethod`('方法名字符串', new Class[0]).`invoke`(obj, new Object[0]);
> context.getClass().getMethod('getPackageManager',  new Class[0]).invoke(context, new Context[0]);
> context.getPackageManager()

## 4-frida定位和还原简单请求参数（MD5）

### 代理（root证书）

```bash
抓包
https://developer.android.google.cn/studio/
    网络库了解
        okhttp
公共基础
安卓7以上安装抓包软件证书到证书系统目录 
    1.导出抓包软件pem证书
        *.如果导出cer证书要转换证书为pem格式
           openssl x509 -inform der -in xxx.cer -out xxx.pem
    2.输出证书内容
    openssl x509 -inform PEM -subject_hash_old -in xxx.pem
    4.证书改名（第三步输出的第一行为证书名），证书文件名后加一个 .0
猿人学
    5.adb push 证书到手机 /sdcard/
    6.进入手机到/sdcard/，su到root用户，执行命令：
         更改用户组：  chgrp root 证书名
        更改文件权限：chmod 777 证书名 
    7.mv 证书到 /system/etc/security/cacerts/ 
        如果遇到 Read-only file system 
        执行命令： mount -o rw,remount /system 重新挂在/system目录为可读写
        有些手机无法解决 Read-only file system
    8.重启手机
    旧版本fiddler生成的证书在手机上可能有问题，用最新版的fiddler
    下载并安装证书生成插件 
https://www.telerik.com/fiddler/add-ons
    .pem证书转.cer证书
    openssl x509 -outform der -in demo.pem -out demo.cer
    .cer证书转.pem证书
    openssl x509 -inform der -in demo.cer -out demo.pem
```

### 抓包，hook确认代码地址



### hook加密函数，验证参数和返回值



### frida 执行 java api 验证 代码逻辑

### python重写逻辑



## 5-frida-还原RSA加密登录过程

### 类型转换 

接口继承实现

​        用法例：
​        var Map = Java.use('java.util.Map')
​        var NewP = Java.cast(P, Map)
​        把P 转成 Map类型



### 定位代码（关键字enc）



### 加密逻辑分析



### python代码模拟请求





## 6-续lesson5-object打印-frida-rpc

### 分析enc错误原因



### 打印 object object

#### 方法一：

​        1.先确认object是什么类型(比如要打印p) 先console.log(p.$className) 查看p是什么
数据类型
​    	2.Java.cast 把p强转为对应类型
​    	3.调用该类对应的输出方法。通常有一个toString()方法

#### 方法二：

​        使用js里的JSON类
​        尝试 console.log(JSON.stringify(p))
​        可能打印不出来字符串，一般能打印出p的字节数组。（可以用着你的数据和真实数
据的对比）

#### 方法三：

    	bytes array 是object
        String 和 bytes array可以相互转化
        String.getBytes() 字符串转bytes array
​	new String(bytes) bytes转成字符串。PS：本身如果是不可打印字符串，打印是乱码

#### 方法四：

​		工具函数，如打印map等snippet代码。



### frida rpc：远程主动调用安卓代码

```python
test='''
 rpc.exports = {
    testfunc: function(str){//PS: 函数名不要大写
        var enc = ''    
        Java.perform(function () {
            var a = Java.use("XXXXXXXXXXX");
            enc = a.a(str)
        });
        return enc
    }
 }
 '''


```



​        frida不使用python，直接使用js脚本用法
​            frida -U APP包名 -l js脚本名： frida -U com.xxx.xxx -l xxx.js
​            重启

​            frida -U -l xxx.js -f com.xx.xx --no-pause
​        hook写法很简单，重要的是找到Hook点
​        借助hook手段，验证分析思路或得到更多线索





## 7-科普RSA





## 8-响应数据有加密



### hook 类下所有的方法

> - NetContent.class.getDeclaredMethods
> - NetContent[methodName].overload
> - apply(this, arguments)



### 请求参数在jadx中搜索不到

> 原因：
>         可能在so中
>         可能是`动态加载jar, apk, dex`
>         可能对字符串有编码(base64 unicode等等)或加密
>         可能在资源文件里
>         可能是内嵌浏览器webview，代码在JS中或由服务器返回
> 解决方法：
>         1.不定位参数，先找到url 顺着URL往下跟踪，借助hook
>         2.盲狙，大范围hook，hook加密类
>         3.从activity，从那儿顺着逻辑跟踪，借助hook



`动态加载jar, apk, dex`

```js
Java.enumerateClassLoaders({
    onMatch: function(loader) {
        Java.classFactory.loader = loader;
        try{
            Java.use('').decrypt.implementation
        }
    }
})
```





### jadx中有代码，但Hook不到类

>  原因：
>         可能是动态加载dex，类可能在另外的classloader中，需要切换classloader再hook
>             classloader概念普及 
> https://www.jianshu.com/p/96a72d1a7974



### hook加密类：

> 先总结各加密类的用法，key iv 明文 密文等是如何获取的，再hook对应的类和方法

|                   |                                                              |      |
| ----------------- | ------------------------------------------------------------ | ---- |
| AES               | https://www.cnblogs.com/widgetbox/p/11611201.html            |      |
| RSA               |                                                              |      |
| DES               | https://blog.csdn.net/qq_22075041/article/details/80698665<br/> https://www.jianshu.com/p/bf6b4afaf41e |      |
| MD5 SHA等摘要算法 | https://blog.csdn.net/baidu_34045013/article/details/80687557 |      |
| HMAC摘要算法      | https://blog.csdn.net/cdzwm/article/details/6973345          |      |



> 
>
> ​    抽象方法
> ​    接口类
> ​    hook so
> ​    hook jni
> ​    frida choose



## 9-nexus6p刷机root

## 10-反序列化protobuf和简单so
## 11-抓包环境配置

### 为什么不使⽤代理⽅式抓包？

#### 易检测

- System.getProperty("http.proxyHost")
- System.getProperty("http.proxyPort")

#### 无法捕获封包: no_proxy

-  new OkHttpClient().newBuilder().proxy(Proxy.NO_PROXY).build(); 

### 为什么使⽤vpn⽅式抓包？

- 运⾏在⽹络层，使⼿机的路由器/路由表改变
- 更加底层，意味着可以捕获更多的上层流量

### VPN + 中间⼈抓包

- postern：

  - https://github.com/postern-overwal/postern-stuff

-  charles 下载：

  - https://www.charlesproxy.com/download/

-  charles 激活码：

  - https://www.zzzmode.com/mytools/charles/

  

### 安装证书

同⼀局域⽹下，通过系统配置http代理⽅式，浏览器访问`chls.pro/ssl `

，安装证书到设备
搞定证书以后，此后就使⽤postern配置charles的socks模式代理的⽅式抓包了

### 信任证书

>  `/data/misc/user/0/cacerts-added/`    ------->       `/system/etc/security/cacerts`

- magisk(v23.0,其他版本未测试) + Move Certificates 插件

- 直接⽤re管理器(可以挂载读写权限)或mt管理器搞

- 尽量别⼿动adb命令，否则可能还要解决⼀些挂载问题

  

### VPN + 中间⼈抓包 + 科学上⽹

charles 设置 `external proxy` 

### ⼿机VPN App抓包

- HttpCanary：可以选择特定的app进⾏⽹络流量分析，下载地址：

  - [HttpCanary安卓版应用APK下载 (apkpure.com)](https://apkpure.com/cn/httpcanary-—-http-sniffer-capture-analysis/com.guoshi.httpcanary)
  - [Reqable安卓版应用APK下载 (apkpure.com)](https://apkpure.com/cn/reqable-api-testing-capture/com.reqable.android)
- ProxyPin
  - github
- ps: ⾄于能不能选择特定的app的流量，是由VPN软件决定的，postern这个软件⽬前不⽀持

### VPN检测

- java.net.NetworkInterface.getName() 
- android.net.ConnectivityManager.getNetworkCapabilities(network)  

## 12-抓包场景和阻碍解决方案基本概念
## 13-vpn中间人抓包TCPdemo
## 14-tcp与ssl发包java和native层溯源
## 15-r0capture与tcpdump与wireshark基本使用
## 16-r0capture拓展之Thread源码溯源
## 17-udp溯源与hook系统底层AllInOne
## 18-抓包拓展了解与脚本大致使用步骤
## 19-noProxy与vpn检测与sslpinning案例实战
## 20-demo验证大全与代码阅读与多维方式抓包
## 21-App之flutter案例抓包突破
## 22-短视频抓包方案大致介绍与专题结语
## 23-壳概念及一代壳加壳原理简介
## 24-一代壳脱壳原理简介及脚本测试
## 25-FRIDA-DEXDump核心原理介绍
## 26-FRIDA-DEXDump实战局限性及展望
## 27-二代壳指令抽取加壳原理简介
## 28-fartext整体及抽取脱壳原理简介
## 29-魔改版fartext增强功能脱壳机实战1
## 30-魔改版fartext增强功能脱壳机实战2
## 31-frida检测案例源码及检测点分析

### 检测案例：多种特征检测 Frida
>
>https://bbs.pediy.com/thread-217482.htm
>
>https://github.com/muellerberndt/frida-detection
>
>https://github.com/qtfreet00/AntiFrida
>
>检测点
>
>- 进程检测
>
>- 端⼝检测
>
>- dbus 通信检测
>
>- maps特征检测
>
>- 内存特征检测
>
>- svc 实现openat/read 等
>  -  [[原创\]小菜花的frida-svc-interceptor-Android安全-看雪-安全社区|安全招聘|kanxue.com](https://bbs.kanxue.com/thread-270144.htm)
>  - [[原创\]分享一个Android通用svc跟踪以及hook方案——Frida-Seccomp-Android安全-看雪-安全社区|安全招聘|kanxue.com](https://bbs.kanxue.com/thread-271815.htm)
>  - [[原创\]《安卓逆向这档事》第十九课、表哥，你也不想你的Frida被检测吧!(下)-Android安全-看雪-安全社区|安全招聘|kanxue.com](https://bbs.kanxue.com/thread-282623.htm)
>- ⾃实现字符串⽐较：memcmp
>

###  检测案例：DetectFrida
>
>  https://github.com/kumar-rahul/detectfridalib
>
> 检测点
>
> 线程检测
>
> fd 检测
>
> 被hook so特征检测
>
> inline + ⾃实现str 相关操作函数

### 检测案例：从inlinehook ⻆度检测frida
>
>  https://bbs.pediy.com/thread-269862.htm
>
> 检测点
>
> 特定native hook特征
>
> ⽬标java hook特征

### 检测案例：关于frida检测的⼀个新思路
>
> https://bbs.pediy.com/thread-268586.htm
>
> 检测点
>
> maps 段rwxp权限特征
>
> 特定native hook特征

### 检测案例：Anti Frida
>
>  https://github.com/TUGOhost/anti_Android/blob/main/app/src/main/cpp/anti_frida.c
>
> 检测点
>
> 针对frida注⼊特性
>
> 只有attach对抗

### 检测案例：FridaCheck.apk
>
> 检测点
>
> 端⼝检测
>
> 线程检测
>
> maps检测
>
> fd 检测
>
> 内存特征检测

### 检测总结

> 只针对上⽂检测案例
>
> - 进程检测（⾃编译frida解决）
>
> - 端⼝检测（⾃定义端⼝解决）
>
> - dbus 通信检测
>
> - maps特征检测（⾃编译frida解决⼀部分）
>
> 	- maps 段rwxp权限特征
>
> - 遍历so内存字符串特征检测（字符串patch解决⼀部分，⾃定义内核过滤maps解决⼤部分，但so链表也能遍历到每个加载的so）
>
> - 线程检测（⾃编译frida解决⼀部分）
>
> - fd 检测（⾃编译frida解决）
>
> - svc 实现openat/read 等（参考看雪frida-seccomp）
>
> - 针对frida注⼊特性（不处理，spawn > attach ）
>
> 	- 只有attach对抗
>
> - hook 特征（暂不处理）
>
> 	- 特定native hook特征
>
> 	- ⽬标java hook特征
>
> 	- 被hook so特征检测
>
> - inline + ⾃实现str 相关操作函数（暂不处理）
>



### 反反调试实现

>
> 
>编译可参考：
> 
>fridaserver去特征检测以及编译
> 
>https://bbs.pediy.com/thread-272536.htm
> 
>(patch逻辑有lief操作，记得pip3 install lief，然后一遍过)
> 
>frida-20220715
> 
>1，https://github.com/AAAA-Project/Patchs.git
> 
>2，去除uuid特征
> 
>3，去frida-helper特征
> 
>纯⽂本
>  
>frida-20220716
>  
>1，去除线程特征 + pool-frida(没效果) (gdbus改了报错(霜哥正常)，Unable to get frontmost application on localhost:6666: process wi
>  
>2，去tmp特征
>  
>3，去maps权限特征
> 
>4，memstring特征（FridaScriptEngine，GLib-GIO，GDBusProxy，GumScript）（这里永远改不全，要想彻底bypass搭配自定义内核隐藏maps食用更佳
> 
>自编译得frida会发到猿人学网盘，后续会持续更新ing，公众号[妄为写代码]回复[frida]获取(自愿)
> 
>日常操作：
>  
>1，深入hook strcmp，strstr，pthread_create
>  
>2,  自定义端口
> 
>内核日志:
> 
>adb logcat -b kernel |grep HEXL
> 
>日常操作带上，实在不行只能去分析patch了

#### my-实验

> 环境准备
>
> - 58apk新版本的 13.24.3： [58同城下载2025安卓最新版_手机app官方版免费安装下载_豌豆荚](https://www.wandoujia.com/apps/38769)
> - 雷电模拟器9.1.38.2：夜神模拟器默认需要hyper-v（点击修复才可以，需要重启）
>   - 开启root，否则报错`unable to find process with name 'system_server'`
> - frida-server
>   - set PATH=C:\leidian\LDPlayer9;%PATH%
>   - adb push "frida-server-16.5.9-android-x86_64" /data/local/tmp/fs64
>   - ~~adb push "D:\BaiduNetdiskDownload\__猿人学\工具\2.新-section2-讲义软件代码\lesson11以后讲义代码工具\f1rida\file\hexl-server-64" /data/local/tmp/xfs64~~
> - hexl-server-64 只支持arm机器，模拟器不能用，只能真机测试



> 测试效果(cmder)：58同城
>
> cd   /d D:\BaiduNetdiskDownload\__猿人学\工具\2.新-section2-讲义软件代码\lesson11以后讲义代码工具\f1rida\file
>
> 确定包名：`adb shell dumpsys window | findstr mCurrentFocus`
>
> frida -U -f com.yimian.envcheck   -l antiFridaBypass.js
>
> frida -U -f com.wuba
>
> frida -U -f com.wuba   -l antiFridaBypass.js



## 32-自编译frida对抗检测实战及流程
## 33-objection常规入门使用简介
## 34-frida基础使用1

### 开发环境配置：vscode提示frida函数等（@types/frida-gum ）

> -  下载node
>   - nvm
>   - https://nodejs.org/zh-cn/download/ (zip包+环境变量)
> - 安装 `@types/frida-gum `
>   - npm install @types/frida-gum 
>
> 



### 见过的较好的frida笔记： 

> https://kevinspider.github.io/frida/frida-hook-java/ 
>
> https://kevinspider.github.io/frida/frida-hook-so/ 
>
> https://eternalsakura13.com/2020/07/04/frida/ 

### 官方api： 
>
> https://frida.re/docs/javascript-api/ 

###  课程练习apk源码及下载地址 
>
> https://github.com/huaerxiela/LessonTest 
>
> https://github.com/huaerxiela/LessonTest/releases 

### 启动

> - attach
>
>   - `frida -U -F   -l demo-frida.js`
>
>   - `frida -U -N com.hexl.lessontest   -l demo-frida.js -q`
>
>   - `frida -U LessonTest   -l demo-frida.js -q`
>
> frida16已经没有 `--no-pause`了

> - spawn
>
>   - `frida -U -f com.hexl.lessontest   -l demo-frida.js`
>   

### Hook 普通方法

### Hook 重载方法（）

### Hook 构造方法

### Hook 对象



> 优雅的frida-rpc 
>
> https://mp.weixin.qq.com/s/zu3jEd38NxlemBpfN3TnHw 
>
> 查看手机架构 
>
> adb shell getprop ro.product.cpu.abi 
>
> Android逆向之分析基操 
>
> https://mp.weixin.qq.com/s/IovgsqprLYSnKsH61EP-EQ 
>
> 细说So动态库的加载流程 
>
> https://bbs.pediy.com/thread-255674.htm 
>
> .init .initarray和JNIOnload 
>
> https://www.cnblogs.com/runope/p/14789784.html 
>
> Frida hook Java/Native与init_array 自吐最终方案 
>
> https://bbs.pediy.com/thread-267430.htm
>
> dlopen -> CallConstructors -> init，init_array(反调试，检测，ollvm字符串加解密) 
> dlsym(JNI_ONLOAD)
>
> 对app自身so文件的自定义svc进行hook 
>
> 1，so加载进内存，完成重定位 
>
> 2，init，init_array之前 
>
>  
>
> so dump之后修复：SOFIXER 
>
>  
>
> //应用以32位在64位终端环境下运行 
>
> //adb install --abi armeabi-v7a <path to apk> 
>
>  
>
>  
>
> so分析(trace) 
>
>  ida-ins trace 
>
>  frida-stalker 
>
>   目前只支持arm64，why：arm32终将过去式，arm64才是主流 
>
>   sktrace：https://github.com/huaerxiela/sktrace.git 
>
>    课程环境： 
>
>    frida --version: 15.2.2 
>
>    frida-server --version: 15.2.2 
>
>    example：python sktrace.py -m attach -l libhello-jni.so -i 0x1CFF0 Hel
>
>  unicorn-unidbg-kingtrace 



> ```js
> function searchInterface() { 
>     Java.perform(function () { 
>         Java.enumerateLoadedClasses({ 
>             onComplete: function () { }, 
>             onMatch: function (name, handle) { 
>                 if (name.indexOf("com.hexl.lessontest.logic") > -1) { // 使用
>                     var targetInterface = "com.hexl.lessontest.logic.Interface";
>                     if (targetInterface === name) { 
>                         return; 
>                     } 
>                     console.log("find class"); 
>                     var targetClass = Java.use(name); 
>                     console.log("\t", name); 
>                     var superClassName; 
>                     while (1) { 
>                         var interfaceList = targetClass.class.getInterfaces
>                         if (interfaceList.length > 0) { 
>                             for (var i in interfaceList) { 
>                               var interString = interfaceList[i].toString
>                               if (interString.indexOf(targetInterface) {
>                                   console.log("\t\t\t", interString); // 
>                                   break; 
>                               } 
>                           } 
>                       } 
>                       superClassName = targetClass.$super.$className; 
>                       targetClass = targetClass.$super; 
>                       if ("java.lang.Object" === superClassName) { 
>                           break; 
>                       } 
>                       console.log("\t\t", superClassName) // 打印类名 
>                   } 
>               } 
> 
>           } 
>       }) 
>   }) 
> } 
> 
> setImmediate(searchInterface)
> 
> ```




## 35-frida基础使用2
## 36-frida基础使用3
## 37-frida-hook-so基础1
## 38-frida-hook-so基础2
## 39-ida，trace分析还原ollvm1
## 40-ida，trace分析还原ollvm2
## 41-stalker与trace分析还原ollvm1
## 42-stalker与trace分析还原ollvm2


