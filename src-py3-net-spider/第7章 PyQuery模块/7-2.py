from pyquery import PyQuery as pq					#导入pyquery模块
html_query = pq(filename='test.html')				#通过HTML文件初始化
print(html_query('.item-0'))							#输出指定属性内容
