"""
mitmweb -s counter-def.py
J:\_ALL\CODE\venv\py399_spider\Scripts\mitmproxy.exe -s counter-def.py

"C:\Program Files\Google\Chrome\Application\chrome.exe"   --proxy-server=http://localhost:8080   --ignore-certificate-errors
"""


import mitmproxy.http
from mitmproxy import ctx
num = 0
def request(flow: mitmproxy.http.HTTPFlow):
    global num
    num = num + 1
    ctx.log.info("We've seen %d flows" % num)
