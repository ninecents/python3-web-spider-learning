import requests
import urllib3

urllib3.disable_warnings()
import re
import subprocess

session = requests.Session()
headers = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    # 'User-Agent': 'yuanrenxue.project',
    'Origin': 'https://match.yuanrenxue.com',
    'Referer': 'https://match.yuanrenxue.com',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
}

proxies = {
    'http': 'http://127.0.0.1:8866',
    'https': 'http://127.0.0.1:8866'
}

#  获取cookie
response = session.get('https://match.yuanrenxue.com/match/13', headers=headers, verify=False,
                       proxies=proxies, cookies={'sessionid': '9vj352x97qvm2kvbh1uwhlwy5dmo13zx'})
js_code = 'document={};location={};' + re.search('<script>(.*)</script>', response.text).group(
    1) + ';console.log(document.cookie)'
result = subprocess.check_output(['node', '-e', js_code])
_cookie = re.match('yuanrenxue_cookie=(.*);path=', result.decode()).group(1)
cookies = {
    'yuanrenxue_cookie': _cookie
}


def sum_resp(data):
    sum = 0
    for item in data['data']:
        # string to number

        sum += int(item['value'])
    return sum


def main():
    s = 0
    for i in range(1, 6):
        params = {
            'page': i
        }
        response = session.get('https://match.yuanrenxue.com/api/match/13', headers=headers, cookies=cookies, verify=False,
                               proxies=proxies, params=params)
        j = response.json()
        print(i, j)
        s += sum_resp(j)

    print(s)


if __name__ == '__main__':
    main()
