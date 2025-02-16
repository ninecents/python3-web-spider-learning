import frida, sys


def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)


test_sig = '''
Java.perform(function(){
    console.log('enter frida')
    //var DD = Java.use('com.iCitySuzhou.suzhou001.d.d')
    //DD.a.overload('a.u$a').implementation = function(p) {
    //    console.log('enter a')
    //    return this.a(p)
    //}

        console.log('111')
        var str = Java.use('java.lang.String').$new('IMEI867979020991839-IMSI460NNNNNNNNNNNN&&1629812392&&f1190aca-d08e-4041-8666-29931cd89dde')


        var AA = Java.use('com.hualong.framework.b.a')
        var stringbuffer = Java.use('java.lang.StringBuffer').$new()

        var Integer = Java.use('java.lang.Integer')
        
        var instance = Java.use('java.security.MessageDigest').getInstance("MD5")
        instance.update(str.getBytes())
        var digest = instance.digest()
        var len = digest.length
        for (var i = 0; i < len; ++i){
            var b = digest[i];
            console.log('b:',i, b)
            stringbuffer.append(Integer.toString((b>>>4)&15,16)).append(Integer.toString(b & 15, 16));
        }
        
        console.log('signature:',stringbuffer.toString())

    /*    AA.a.implementation = function(p) {
            console.log('param:',p)
            var ret = this.a(p)
            console.log('ret:',ret)
            return ret
    }*/

})


'''




test_sig1 = '''
Java.perform(
    function(){
        console.log('enter icity')
        var AA = Java.use('com.hualong.framework.b.a')
        AA.a.implementation = function(p) {
            console.log(p)
            var ret = this.a(p)
            console.log(ret)
            return ret
        }
        function printstack() {
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        }
    }
)

'''

test = '''
Java.perform(
    function(){
        console.log('enter icity')
        
        var str = Java.use('java.lang.String').$new('IMEI867979020991839-IMSI460NNNNNNNNNNNN&&1629536144&&f1190aca-d08e-4041-8666-29931cd89dde')
        //var str = Java.use('java.lang.String').$new('123456')

        console.log(str)

        send(str.getBytes())

        var stringbuffer = Java.use('java.lang.StringBuffer').$new()

        var Integer = Java.use('java.lang.Integer')
        
        var instance = Java.use('java.security.MessageDigest').getInstance("MD5")
        instance.update(str.getBytes())
        var digest = instance.digest()
        var len = digest.length
        send(digest)
        for (var i=0; i < len; i++){
            console.log('dd:',digest[i])
            //console.log('ori:',(digest[i]>>>4) & 15)
            //console.log('aft:',Integer.toString((digest[i]>>>4) & 15,16))
            stringbuffer.append(Integer.toString((digest[i]>>>4) & 15,16)).append(Integer.toString(digest[i]&15,16))
            //console.log(digest[i]);
            //console.log((digest[i]>>>4) && 15);
        }
        console.log(stringbuffer.toString())

    }
)
'''
test_rpc = '''
rpc.exports={
    gett:function(str){
        Java.perform(function(){
            var AA = Java.use('com.hualong.framework.b.a')
            var ret = AA.a(str)
            console.log(ret)
        })
    }
}
'''

#两种启动方式

#启动方式1

# get_usb_device接口变了，参数含义不一样了。传递0
# attach也不能传递报名了，传递标题？
# device = frida.get_usb_device(-1)
process = frida.get_usb_device(0).attach('引力播'); # 'com.iCitySuzhou.suzhou001')
script = process.create_script(test_sig)
script.on('message', on_message)
script.load()
#script.exports.gett('IMEI867979020991839-IMSI460NNNNNNNNNNNN&&1629536144&&f1190aca-d08e-4041-8666-29931cd89dde')
sys.stdin.read()


#启动方式2 spawn 重启APP 可以hook APP启动阶段
# device = frida.get_usb_device(-1)
# pid = device.spawn(['com.iCitySuzhou.suzhou001'])
# process = device.attach(pid)

# script = process.create_script(test_context)
# script.on('message', on_message)
# print('[*] Running')
# script.load()
# device.resume(pid)
# sys.stdin.read()
