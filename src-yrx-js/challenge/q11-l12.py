import re
import execjs
import requests
import urllib3
urllib3.disable_warnings()


challenge_num = 11
proxies = {
    'http': 'http://127.0.0.1:8866',
    'https': 'http://127.0.0.1:8866'
}


def get_data(session, page, cookies):

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

    response = session.get(f'https://www.python-spider.com/challenge/{challenge_num}', cookies=cookies, headers=headers, proxies=proxies, verify=False)
    return response.text


def get_cookies(session):
    # execjs 解密
    cookies = {
        'sessionid': 'udag4bf3eqsn1uy36th8d4jwk4lbyovb'
    }
    response = session.get('https://www.python-spider.com/challenge/11', cookies=cookies, proxies=proxies, verify=False)
    jscode = re.match('<script>(.*)</script>', response.text).group(1)
    with open('q11-l12.origin.js', 'r', encoding='utf-8') as rf:
        result = execjs.compile(rf.read().replace('__jscodes', jscode)).call('decode')

    print(result)

    cookies[result.split('=')[0]] = result.split('=')[1].split(';')[0]
    print(cookies)
    return cookies


def sum_resp(data):
    sum = 0
    result = re.findall(r'<td class=\"info\">(.*?)<\/td>', data, re.S)
    for item in result:
        # string to number

        print('>>> item', item.strip())
        sum += int(item.strip())
    return sum


def main():
    # return print(m)
    session = requests.Session()
    cookies = get_cookies(session)
    sum = 0
    for i in range(1):
        page = i + 1
        data = get_data(session, page, cookies)
        print(page, data)
        sum += sum_resp(data)
        # break
    print(sum)


def test():
    data = """
                        <table cellspacing="0" cellpadding="0" class="data">
                                <tr class="odd">
                                        <td class="info">
                                                1486
                                        </td>
                                        <td class="info">
                                                5782
                                        </td>
                                        <td class="info">
                                                2588
                                        </td>
                                        <td class="info">
                                                8545
                                        </td>
                                        <td class="info">
                                                7897
                                        </td>
                                        <td class="info">
                                                2487
                                        </td>
                                        <td class="info">
                                                2458
                                        </td>
                                        <td class="info">
                                                3545
                                        </td>
                                        <td class="info">
                                                3858
                                        </td>
                                        <td class="info">
                                                5537
                                        </td>
                                </tr>
                        </table>
                        """
    sum = sum_resp(data)
    print(sum)


if __name__ == '__main__':
    # test()
    main()
