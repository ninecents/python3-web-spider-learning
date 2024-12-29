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
from requests import Session, Request, exceptions

urllib3.disable_warnings()


def get_proxy():
    prefix_http = 'http://'
    prefix_https = 'https://'
    prefix_http = ''
    prefix_https = ''
    port = '8080'   
    port = '8118'   # SSR
    port = '8866'   # fiddler
    port = '8888'   # charles
    proxy = {
        'http': prefix_http + '127.0.0.1:' + port,
        'https': prefix_https + '127.0.0.1:' + port
    }
    return proxy


def upload_file():
    files = {
        'file': open('../files/favicon.ico', 'rb')
    }
    r = requests.post('https://www.httpbin.org/post', files=files, verify=False , proxies=get_proxy())
    print(r.text)


def print_cookie():
    r = requests.get('https://www.baidu.com', verify=False, proxies=get_proxy())
    print(r.cookies)
    for key, value in r.cookies.items():
        print(key + '=' + value)


def print_https_with_verify():
    # urllib3.disable_warnings(exceptions.Timeout)
    r = requests.get('https://ssr2.scrape.center/', verify=True)
    print(r.status_code)
    r = requests.get('https://ssr2.scrape.center/', verify=False)
    print(r.status_code)
    # urllib3.disable_warnings()


def print_with_timeout():
    r = requests.get('https://www.httpbin.org/get', timeout=0.1)
    print(r.status_code)


def print_with_auth():
    r = requests.get('https://ssr3.scrape.center/', proxies=get_proxy(), verify=False)
    print(r.status_code)
    r = requests.get('https://ssr3.scrape.center/', auth=('admin', 'admin'), proxies=get_proxy(), verify=False)
    print(r.status_code)


def print_prepared_request():
    url = 'https://www.httpbin.org/post'
    data = {'name': 'germey'}
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko)'
                      'Chrome/52.0.2743.116 Safari/537.36'
    }
    s = Session()
    req = Request('POST', url, data=data, headers=headers)
    prepped = s.prepare_request(req)
    r = s.send(prepped)
    print(r.text)


def main():
    # return upload_file()
    # return print_cookie()
    # return print_https_with_verify()
    # return print_with_timeout()
    # return print_with_auth()
    return print_prepared_request()


if __name__ == '__main__':
    main()
