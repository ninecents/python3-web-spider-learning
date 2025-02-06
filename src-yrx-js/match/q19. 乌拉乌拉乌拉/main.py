
import requests
import httpx
import urllib3
from api import get_data

urllib3.disable_warnings()
import execjs




def sum_resp(data):
    sum = 0
    for item in data['data']:
        # string to number

        sum += int(item['value'])
    return sum


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


def 处理数据(data, m):
    for item in data['data']:
        m[item['value']] = m.get(item['value'], 0) + 1


def main():
    # session = requests.Session()
    session = httpx.Client(http2=True, proxies=get_proxy_httpx(), verify=False)
    s = 0
    for page in range(1, 6):
        j = get_data(session, page)
        print(page, j)
        # break
        s += sum_resp(j)

    # 排序
    print(s)


if __name__ == '__main__':
    main()
