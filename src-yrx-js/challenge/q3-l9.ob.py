import base64
import hashlib
import time
import execjs
import requests
import json
import urllib3
urllib3.disable_warnings()


challenge_num = 3
proxies = {
    'http': 'http://127.0.0.1:8866',
    'https': 'http://127.0.0.1:8866'
}


def get_data(session, page, m):
    cookies = {
        'sessionid': 'udag4bf3eqsn1uy36th8d4jwk4lbyovb',
        'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d': '1736352255,1736435679,1736527903,1736568509',
        'HMACCOUNT': '10FF89145A4951C3',
        'no-alert': 'true',
        'Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d': '1736573666',
        'm': m,
    }

    headers = {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'origin': 'https://www.python-spider.com',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': f'https://www.python-spider.com/challenge/{challenge_num}',
        'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
    }

    data = {
        'page': page,
    }

    response = session.post(f'https://www.python-spider.com/api/challenge{challenge_num}', cookies=cookies, headers=headers, data=data, proxies=proxies, verify=False)
    return response.json()


def get_m():
    # execjs 解密
    file = 'q3-l9.ob.js'
    js = open(file).read() # .replace('resprespresp', j['result'])
    node = execjs.get()
    ctx = node.compile(js)
    js = f"""myretval"""
    ret = ctx.eval(js)
    print(type(ret), ret)
    return ret.split(';')[0].split('=')[1].strip()


def sum_resp(data):
    sum = 0
    for item in data['data']:
        # string to number

        sum += int(item['value'].strip())
    return sum


def main():
    m = get_m()
    # return print(m)
    session = requests.Session()
    sum = 0
    for i in range(100):
        page = i + 1
        data = get_data(session, page, m)
        print(page, data)
        sum += sum_resp(data)
        # break
    print(sum)


if __name__ == '__main__':
    main()
