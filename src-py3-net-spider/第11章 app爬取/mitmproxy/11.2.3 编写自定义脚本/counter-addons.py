"""
mitmweb -s counter-addons.py
J:\_ALL\CODE\venv\py399_spider\Scripts\mitmproxy.exe -s counter-addons.py

"C:\Program Files\Google\Chrome\Application\chrome.exe"   --proxy-server=http://localhost:8080   --ignore-certificate-errors
"""

import mitmproxy.http
from mitmproxy import ctx


class Counter:
    def __init__(self):
        self.num = 0

    def request(self, flow: mitmproxy.http.HTTPFlow):
        self.num = self.num + 1
        print("We've seen %d flows" % self.num)
        ctx.log.info("We've seen %d flows" % self.num)

addons = [
    Counter(),
]
