from pyquery import PyQuery as pq					#导入pyquery模块
html = '''
<div>
    <ul>
         <li class="item-0">first item</li>
         <li class="item-1"><a href="link2.html">second item</a></li>
         <li class="item-0 active"><a href="link3.html"><span class="bold">third item</span></a></li>
         <li class="item-1 active"><a href="link4.html">fourth item</a></li>
         <li class="item-0"><a href="link5.html">fifth item</a></li>
     </ul>
</div>
'''											#定义字符串
html_query = pq(html)							#通过字符串初始化对象
print(html_query('li'))								#输出所有列表li
