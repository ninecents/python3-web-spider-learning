import requests
import base64


proxies = {
    'http': 'http://127.0.0.1:8866',
    'https': 'http://127.0.0.1:8866'
}


"""
var list = {
    "page": window.page,
    "m": btoa('yuanrenxue' + window.page)
};
"""
def calc_m(page):
    # 计算btoa
    return base64.b64encode(f'yuanrenxue{page}'.encode()).decode()
    

def get_data(session, page):
    cookies = {
        'Hm_lvt_434c501fe98c1a8ec74b813751d4e3e3': '1736590450',
        'sessionid': 'a4f0g9axtvbo2u4zp0ntooosnqcs7ct2',
        'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1737039529,1738300203,1738498763,1738668789',
        'HMACCOUNT': '7D26C2679F3275D2',
        'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1736268964,1736590781,1738498779,1738669485',
        'no-alert3': 'true',
        'yuanrenxue_cookie': '1738736116|agjVKTlHOkut6D0KDqbQ7VP8HCvgTCRcKLBWsgiWg83lH1t0zcFuJoirVjFXC',
        'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e': '1738736118',
        'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1738737437',
    }

    headers = {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'en,zh-CN;q=0.9,zh;q=0.8',
        # 'cookie': 'Hm_lvt_434c501fe98c1a8ec74b813751d4e3e3=1736590450; sessionid=a4f0g9axtvbo2u4zp0ntooosnqcs7ct2; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1737039529,1738300203,1738498763,1738668789; HMACCOUNT=7D26C2679F3275D2; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1736268964,1736590781,1738498779,1738669485; no-alert3=true; yuanrenxue_cookie=1738736116|agjVKTlHOkut6D0KDqbQ7VP8HCvgTCRcKLBWsgiWg83lH1t0zcFuJoirVjFXC; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1738736118; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1738737437',
        'priority': 'u=0, i',
        'referer': 'https://match.yuanrenxue.cn/match/12',
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
        'm': calc_m(page),
    }

    response = session.get('https://match.yuanrenxue.cn/api/match/12', params=params, cookies=cookies, headers=headers)

    return response.json()

