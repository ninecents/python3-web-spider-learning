from pyquery import  PyQuery as pq
import requests
headers = {
    "User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
            }
url = "https://top.baidu.com"								#定义URL （2025-3-4，已经301了）
url = "https://top.baidu.com/board"
response = requests.request('get',url,headers=headers)			#发送请求
content_all = response.content.decode('utf-8')
doc = pq(content_all)									#初始化对象
items = doc('#hot-list')									#获取热搜列表
lists=items('.list-title').items()								#获取UL列表
lists = doc('.theme-hot .active-item_1Em2h .c-single-text-ellipsis').items()					#获取UL列表（2025-3-4）
for l in lists:
	name=l.text()										#获取热搜内容
	print(name)										#输出内容
