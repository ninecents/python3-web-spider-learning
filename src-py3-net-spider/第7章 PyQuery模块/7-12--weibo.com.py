from pyquery import  PyQuery as pq
# import requests
# headers = {
#     "User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
#             }
# url = "https://s.weibo.com/top/summary"  # （2025-3-4，已经302了，需要cookie）
# response = requests.request('get',url,headers=headers)
# content_all = response.content.decode('utf-8')
# doc = pq(content_all)						#实例化对象

# 获取当前文件所在目录
import os
print(os.path.abspath(__file__))
fn_dir = os.path.dirname(os.path.abspath(__file__))
print(fn_dir)

content = open(fn_dir+'\\7-12--weibo.com-top-summary.html',encoding='utf-8').read()
doc = pq(content)						#实例化对象
# doc = pq(filename=fn_dir+'\\7-12--weibo.com-top-summary.html')
items = doc('tbody')							#获取表格中内容
content=items('.td-02').items()					#获取热搜单元格
for c in content:
	name=c('a').text()					#获取链接中的文本
	print(name)
