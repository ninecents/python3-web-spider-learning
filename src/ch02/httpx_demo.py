#!/usr/bin/env python
# encoding: utf-8
"""
@author: HuRuiFeng
@file: httpx_demo.py
@time: 2022/1/4 11:32
@project: python3-web-spider-learning
@desc: 2.4 httpx的使用（P75~P78）
"""
import asyncio

import httpx
import requests


def get_proxy():
    prefix_http = 'http://'
    prefix_https = 'https://'
    prefix_http = ''
    prefix_https = ''
    port = '8080'   
    port = '8118'   # SSR
    port = '8866'   # fiddler
    # port = '8888'   # charles
    proxy = {
        'http': prefix_http + '127.0.0.1:' + port,
        'https': prefix_https + '127.0.0.1:' + port
    }
    return proxy


def get_proxy_httpx():
    prefix_http = 'http://'
    prefix_https = 'https://'
    port = '8080'   
    port = '8118'   # SSR
    port = '8866'   # fiddler
    # port = '8888'   # charles
    proxy = {
        'http://': prefix_http + '127.0.0.1:' + port,
        'https://': prefix_https + '127.0.0.1:' + port
    }

    return prefix_http + '127.0.0.1:' + port
    return proxy



def httpx_deom():
    response = httpx.get('https://www.httpbin.org/get')
    print(response.status_code)
    print(response.headers)
    print(response.text)


def httpx_with_user_agent():
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko)'
                      'Chrome/52.0.2743.116 Safari/537.36'
    }
    response = httpx.get('https://www.httpbin.org/get', headers=headers)
    print(response.text)


def http2_demo():
    try:
        response = requests.get('https://spa16.scrape.center/')
        print(response.text)
    except Exception as e:
        print(e)
    client = httpx.Client(http2=True)
    response = client.get('https://spa16.scrape.center/')
    print(response.text)


# 新的ip会有cf盾，导致无法访问；
def http2_demo_epic():
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    }
    url = 'https://store.epicgames.com/zh-CN/free-games'
    # try:
    #     response = requests.get(url, headers=headers, proxies=get_proxy(), verify=False)
    #     print(len(response.text), response.status_code, response.text[:300])
    # except Exception as e:
    #     print(e)
    # return
    client = httpx.Client(http2=True, proxies=get_proxy_httpx(), verify=False)
    response = client.get(url, headers=headers)
    print(len(response.text), response.status_code)


def client_demo():
    url = 'https://www.httpbin.org/headers'
    headers = {'User-Agent': 'my-app/0.0.1'}
    with httpx.Client(headers=headers) as client:
        r = client.get(url)
        print(r.json()['headers']['User-Agent'])


async def fetch(url):
    # 异步请求
    async with httpx.AsyncClient(http2=True) as client:
        response = await client.get(url)
        print(response.text)


def main():
    # return httpx_deom()
    # return httpx_with_user_agent()
    # return http2_demo()
    return http2_demo_epic()
    return client_demo()
    return asyncio.get_event_loop().run_until_complete(fetch('https://www.httpbin.org/get'))


if __name__ == '__main__':
    main()
