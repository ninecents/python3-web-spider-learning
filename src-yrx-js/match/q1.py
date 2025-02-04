import requests
import urllib3
from datetime import datetime

urllib3.disable_warnings()
import re
import json
import execjs


challenge_num = 1
proxies = {
    'http': 'http://127.0.0.1:8866',
    'https': 'http://127.0.0.1:8866'
}



def eval_js_md5(input):
    file = 'q1.md5.js'
    js = open(file).read() # .replace('resprespresp', j['result'])
    node = execjs.get()
    ctx = node.compile(js)
    js = f"""hex_md5('{input}')"""
    ret = ctx.eval(js)
    return ret


def calc_m():
    # Date["parse"](new Date())  返回的是整秒时间戳
    int_date_ex_0x2268f9 = int(datetime.now().timestamp()) * 1000
    int_date_ex_0x2268f9 += 100000000
    return eval_js_md5(int_date_ex_0x2268f9)  + "\u4E28" + str(int(int_date_ex_0x2268f9 / 1000))


def get_data(session, page):
    cookies = {
        'sessionid': 'a4f0g9axtvbo2u4zp0ntooosnqcs7ct2',
        'HMACCOUNT': '7D26C2679F3275D2',
        'no-alert3': 'true',
        'tk': '2317091476291490220',
    }

    headers = {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': f'https://match.yuanrenxue.cn/match/{challenge_num}',
        'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
    }

    params = {
        'page': page,
        'm': calc_m()
    }

    response = session.get(
        f'https://match.yuanrenxue.cn/api/match/{challenge_num}', 
        cookies=cookies, headers=headers, params=params,
        proxies=proxies,
        verify=False
    )

    return response.json()


def sum_resp(data):
    sum = 0
    for item in data['data']:
        # string to number

        sum += int(item['value'])
    return sum


def main():
    session = requests.Session()
    s = 0
    for page in range(1, 6):
        params = {
            'page': page
        }
        j = get_data(session, page)
        print(page, j)
        # break
        s += sum_resp(j)

    print('计算平均值，应该除以50！！！')
    print(s/50, s)


if __name__ == '__main__':
    main()
    # print(eval_js_md5('abc')) # 5c3365c2c6df875e9d2d1698fef70524
