# objection
https://blog.csdn.net/kinghzking/article/details/137071768

```bash
frida-ps -Uai
17374  超卓文本编辑器                    com.chaozhuo.texteditor

objection -g com.chaozhuo.texteditor explore


# context.getPackageManager().getPackageInfo(context.getPackageName(), 64).signatures[0].hashCode()
# context.getPackageManager().getPackageInfo(context.getPackageName(), 64).signatures[0].toByteArray()
android hooking watch class android.content.pm.Signature


```

## 启动命令

> 确认是否调研Signature中的方法
```bash
objection -g com.chaozhuo.texteditor explore   --startup-command "android hooking watch class android.content.pm.Signature"


```


> 确认堆栈信息
```bash
objection -g com.chaozhuo.texteditor explore   --startup-command "android hooking watch class_method android.content.pm.Signature.toByteArray  --dump-args --dump-backtrace --dump-return"


```

