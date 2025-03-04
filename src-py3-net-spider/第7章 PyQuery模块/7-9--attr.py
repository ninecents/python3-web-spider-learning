from pyquery import PyQuery as pq					#导入pyquery模块
html ='''
<div id="container">
    <ul class="list">
         <li class="item-0">first item</li>
         <li class="item-1"><a href="link2.html">second item</a></li>
         <li class="item-0 active"><a href="link3.html"><span class="bold">third item</span></a></li>
         <li class="item-1 active"><a href="link4.html">fourth item</a></li>
         <li class="item-0"><a href="link5.html">fifth item</a></li>
     </ul>
</div>
'''											#定义字符串
html_query = pq(html)
a = html_query ('a')						#获取所有超链接
# for item in a:								#遍历结果
for item in a.items():								#遍历结果
	print(type(a), a.attr('href'))					#获取href属性
