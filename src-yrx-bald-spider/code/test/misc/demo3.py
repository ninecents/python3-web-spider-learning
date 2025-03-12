# 获取当前目录的父目录
import os
import sys
dir_name = os.path.dirname(__file__)
dir_name = os.path.join(dir_name, '../../')
dir_name = os.path.abspath(dir_name)
print(dir_name)
# os.chdir(dir_name)
# 不能使用append，可能其他包也有test，导致import失败！！！
# 不能使用append，可能其他包也有test，导致import失败！！！
# 不能使用append，可能其他包也有test，导致import失败！！！
# sys.path.append(dir_name)
# sys.path.append(os.path.join(dir_name, 'test'))
sys.path.insert(0, dir_name)
print(sys.path)
# import code

# 获取到
from test.baidu_spider import settings

# print(dir(settings))
# ['CONCURRENCY', 'PROJECT_NAME', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__']

# print(type(settings))
# <class 'module'>

for name in dir(settings):
    if name.isupper():
        print(name, getattr(settings,name))
        # CONCURRENCY 16
        # PROJECT_NAME baidu_spider