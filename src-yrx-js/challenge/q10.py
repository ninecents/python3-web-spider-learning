"""
重点：
- http2
- httpx.Headers 排序
    - https://github.com/encode/httpx/issues/1413
"""

import requests
import urllib3
import httpx
import collections
urllib3.disable_warnings()


proxies = {
    'http://': 'http://127.0.0.1:8866',
    'https://': 'http://127.0.0.1:8866'
}


def get_data_requests(page):
    cookies = {
        'sessionid': 'looabtk4e3xil58koshdq2mxsv3r3ej5',
        'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d': '1736352255,1736435679,1736527903,1736568509',
        'HMACCOUNT': '10FF89145A4951C3',
        'no-alert': 'true',
        'Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d': '1736573666',
    }

    headers = {
        # 'cache-control': 'no-cache',
        # 'cookie': 'sessionid=looabtk4e3xil58koshdq2mxsv3r3ej5; Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1736352255,1736435679,1736527903,1736568509; HMACCOUNT=10FF89145A4951C3; no-alert=true; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1736573666',
        # 'pragma': 'no-cache',
        # 'Host': 'www.python-spider.com',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-requested-with': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        'origin': 'https://www.python-spider.com',
        'referer': 'https://www.python-spider.com/challenge/10',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'zh-CN,zh;q=0.9',
    }

    data = {
        'page': page,
    }

    session = requests.Session()
    # 后session clear，clear这个是比较关键的写法。
    session.headers.clear()
    session.headers.update(headers)
    response = session.post('https://www.python-spider.com/api/challenge10', cookies=cookies, headers=headers, data=data)
    return response.json()


# httpx
def get_data(page):
    cookies = {
        'sessionid': 'looabtk4e3xil58koshdq2mxsv3r3ej5',
        'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d': '1736352255,1736435679,1736527903,1736568509',
        'HMACCOUNT': '10FF89145A4951C3',
        'no-alert': 'true',
        'Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d': '1736573666',
    }

    headers = collections.OrderedDict()
    headers['content-length'] = str(5+len(str(page)))
    headers['accept'] = 'application/json, text/javascript, */*; q=0.01'
    headers['content-type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
    headers['x-requested-with'] = 'XMLHttpRequest'
    headers['user-agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
    headers['origin'] = 'https://www.python-spider.com'
    headers['referer'] = 'https://www.python-spider.com/challenge/10'
    headers['accept-encoding'] = 'gzip, deflate, br, zstd'
    headers['accept-language'] = 'zh-CN,zh;q=0.9'
    # headers2 = [
    #     (b'accept', b'application/json, text/javascript, */*; q=0.01'),
    #     (b'content-type', b'application/x-www-form-urlencoded; charset=UTF-8'),
    #     (b'x-requested-with', b'XMLHttpRequest'),
    #     (b'user-agent', b'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'),
    #     (b'origin', b'https://www.python-spider.com'),
    #     (b'referer', b'https://www.python-spider.com/challenge/10'),
    #     (b'accept-encoding', b'gzip, deflate, br, zstd'),
    #     (b'accept-language', b'zh-CN,zh;q=0.9')
    # ]

    data = {
        'page': page,
    }

    client = httpx.Client(http2=True, proxies=proxies, verify=False)
    request = client.build_request('POST', 'https://www.python-spider.com/api/challenge10', cookies=cookies, data=data)
    for k, v in request.headers.multi_items():
        headers.setdefault(k, v)
    request.headers = httpx.Headers(list(headers.items()))
    # return print(request.headers.raw)
    response = client.send(request)

    return response.json()


def sum_resp(data):
    # {'status': '1', 'state': 'success', 'data': [{'value': '3184\r'}, {'value': '3650\r'}, {'value': '9761\r'}, {'value': '2265\r'}, {'value': '5347\r'}, {'value': '1759\r'}, {'value': '6823\r'}, {'value': '539\r'}, {'value': '5990\r'}, {'value': '8177\r'}]}
    sum = 0
    for item in data['data']:
        # string to number

        sum += int(item['value'].strip())
    return sum


def main():
    sum = 0
    for i in range(100):
        page = i + 1
        data = get_data(page)
        print(page, data)
        sum += sum_resp(data)
        # break
    print(sum)


if __name__ == '__main__':
    main()
