## frida 参数说明
> frida --help
```bash
  -f TARGET, --file TARGET
                        spawn FILE
  -F, --attach-frontmost
                        attach to frontmost application
  -n NAME, --attach-name NAME
                        attach to NAME
  -N IDENTIFIER, --attach-identifier IDENTIFIER
                        attach to IDENTIFIER
  -p PID, --attach-pid PID
                        attach to PID
```

## 两种启动方式

### 启动方式1 attach

> frida -U -F -l lesson2-test_hook_rps.js
> frida -U -n com.example.seccon2015.rock_paper_scissors -l lesson2-test_hook_rps.js

```python
process = frida.get_usb_device(-1).attach('com.example.seccon2015.rock_paper_scissors')
script = process.create_script(test)
script.on('message', on_message)
script.load()
sys.stdin.read()

```


## 启动方式2 spawn 重启APP 可以hook APP启动阶段

```python
device = frida.get_usb_device(-1)
pid = device.spawn(['com.example.seccon2015.rock_paper_scissors'])
process = device.attach(pid)

script = process.create_script(test)
script.on('message', on_message)
print('[*] Running')
script.load()

device.resume(pid)

sys.stdin.read()
```