function 构造方法() {
    // hook 构造方法 $init
    var ClassName = Java.use("com.hexl.lessontest.logic.People");
    ClassName.$init.overload('int').implementation = function(){
        console.log("hook ClassName $init", arguments[0]);
        this.$init(arguments[0]);
        this.$init.apply(this, arguments);
    }
}


function main() {
    return 构造方法();
    var ClassName = Java.use("com.hexl.lessontest.logic.People");
    // hook 指定方法的所有重载
    var overloadsLength = ClassName.speak.overloads.length;
    for (var i = 0; i < overloadsLength; i++){
        ClassName.speak.overloads[i].implementation = function () {
            // 遍历打印 arguments 
            for (var a = 0; a < arguments.length; a++){
                console.log(a + " : " + arguments[a]);
            }
            // 调用原方法
            return this.speak.apply(this,arguments);
        }
    }
    return;
    ClassName.run.overload().implementation = function (){
        // 打印信息
        // console.log('a:' + a + ' ' + 'b:' + b);
        // 调用原方法获取结果
        var value = this.run();
        console.log('----------------------- result:',value);
        // 修改返回值
        return value;
    }
    ClassName.run.overload('java.lang.String').implementation = function (a){
        // 打印信息
        console.log('a:' + a);
        // 调用原方法获取结果
        a = '1111111';
        var value = this.run(a);
        value = false;
        console.log('----------------------- result:',value);
        // 修改返回值
        return value;
    }
    return;
    ClassName.speak.overload().implementation = function (){
        // 打印信息
        // console.log('a:' + a + ' ' + 'b:' + b);
        // 调用原方法获取结果
        var value = this.speak();
        console.log('----------------------- result:',value);
        // 修改返回值
        return value;
    }
    ClassName.speak.overload('java.lang.String').implementation = function (a){
        // 打印信息
        console.log('a:' + a);
        // 调用原方法获取结果
        var value = this.speak(a);
        console.log('----------------------- result:',value);
        // 修改返回值
        return value;
    }
    ClassName.speak.overload('java.lang.String', 'int').implementation = function (a, b){
        // 打印信息
        console.log('a:' + a + ' ' + 'b:' + b);
        // 调用原方法获取结果
        var value = this.speak(a, b);
        console.log('----------------------- result:',value);
        // 修改返回值
        return value;
    }
}

Java.perform(() => {
    console.log('hello frida')
    main()
})