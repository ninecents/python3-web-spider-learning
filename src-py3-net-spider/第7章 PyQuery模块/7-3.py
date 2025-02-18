from pyquery import PyQuery as pq							#导入pyquery模块
html_query = pq(url='https://www.baidu.com',encoding="utf-8")		#通过URL初始化
print(html_query('title'))									#输出标签<title>内容
