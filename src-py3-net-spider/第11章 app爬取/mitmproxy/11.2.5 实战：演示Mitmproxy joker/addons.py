"""
### http.HTTPResponse.make(404) 在python3.8.8版本中是正常的，在python3.9.9中不支持，待查

cd /d J:\_ALL\CODE\github\ninecents\python3-web-spider-learning\src-py3-net-spider\第11章 app爬取\mitmproxy\11.2.5 实战：演示Mitmproxy joker
J:\_ALL\CODE\venv\py388_spider\Scripts\mitmdump.exe -s addons.py
J:\_ALL\CODE\venv\py399_spider\Scripts\mitmdump.exe -s addons.py

"C:\Program Files\Google\Chrome\Application\chrome.exe"   --proxy-server=http://localhost:8080   --ignore-certificate-errors
"""


import counter
import joker

addons = [
    counter.Counter(),
    joker.Joker(),
]

