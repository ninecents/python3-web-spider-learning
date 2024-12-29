#!/usr/bin/env python
# encoding: utf-8
"""
@author: HuRuiFeng
@file: advanced_use.py
@time: 2021/12/31 15:13
@project: python3-web-spider-learning
@desc: 高级用法（P55~P63）
"""
import requests
import urllib3
from requests import Session, Request

urllib3.disable_warnings()


def session会话维持():
    s = requests.Session()
    s.get("http://httpbin.org/cookies/set/number/123456")
    response = s.get("http://httpbin.org/cookies")
    print(response.text)


def main():
    return session会话维持()
    return print_https_with_verify()
    return print_with_timeout()
    return print_with_auth()
    return print_prepared_request()


if __name__ == '__main__':
    main()
