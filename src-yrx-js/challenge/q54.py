import requests
import urllib3
import base64
urllib3.disable_warnings()


challenge_num = 54
proxies = {
    'http': 'http://127.0.0.1:8866',
    'https': 'http://127.0.0.1:8866'
}


def encode_base64(input_string):
    # Encode the input string to bytes, then to Base64
    encoded_bytes = base64.b64encode(input_string.encode('utf-8'))
    # Convert the Base64 bytes back to a string
    encoded_string = encoded_bytes.decode('utf-8')
    return encoded_string


def get_data(session, page):
    cookies = {
        'sessionid': 'looabtk4e3xil58koshdq2mxsv3r3ej5',
        'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d': '1736352255,1736435679,1736527903,1736568509',
        'HMACCOUNT': '10FF89145A4951C3',
        'no-alert': 'true',
        'Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d': '1736573666',
    }

    headers = {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        # 'cookie': 'sessionid=looabtk4e3xil58koshdq2mxsv3r3ej5; Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1736352255,1736435679,1736527903,1736568509; HMACCOUNT=10FF89145A4951C3; no-alert=true; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1736573666',
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
        'page': str(page),
        'token': encode_base64(str(page))
    }

    response = session.post(f'https://www.python-spider.com/api/challenge{challenge_num}', cookies=cookies, headers=headers, data=data, proxies=proxies, verify=False)
    return response.json()


def sum_resp(data):
    sum = 0
    for item in data['data']:
        # string to number

        sum += int(item['value'].strip())
    return sum


def main():
    session = requests.Session()
    sum = 0
    for i in range(100):
        page = i + 1
        data = get_data(session, page)
        print(page, data)
        sum += sum_resp(data)
        # break
    print(sum)


if __name__ == '__main__':
    main()