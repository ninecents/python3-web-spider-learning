import mitmproxy.http
from mitmproxy import ctx
class Counter:
    def __init__(self):
        self.num = 0

    def request(self, flow: mitmproxy.http.HTTPFlow):
        self.num = self.num + 1
        # 使用 -w 参数指定输出文件
        # mitmproxy -w output.log
        ctx.log.error("We've seen %d flows" % self.num)
