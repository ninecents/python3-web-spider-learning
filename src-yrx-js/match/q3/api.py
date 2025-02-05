import requests
import collections


challenge_num = 1
proxies = {
    'http': 'http://127.0.0.1:8866',
    'https': 'http://127.0.0.1:8866'
}


def get_jssm(session):
    cookies = {
        'Hm_lvt_434c501fe98c1a8ec74b813751d4e3e3': '1736590450',
        'sessionid': 'a4f0g9axtvbo2u4zp0ntooosnqcs7ct2',
        'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1737039529,1738300203,1738498763,1738668789',
        'HMACCOUNT': '7D26C2679F3275D2',
        'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1736268964,1736590781,1738498779,1738669485',
        'qpfccr': 'true',
        'no-alert3': 'true',
        'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1738670026',
        'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e': '1738670026',
    }

    headers = {
        'accept': '*/*',
        'accept-language': 'en,zh-CN;q=0.9,zh;q=0.8',
        # 'content-length': '0',
        # 'cookie': 'Hm_lvt_434c501fe98c1a8ec74b813751d4e3e3=1736590450; sessionid=a4f0g9axtvbo2u4zp0ntooosnqcs7ct2; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1737039529,1738300203,1738498763,1738668789; HMACCOUNT=7D26C2679F3275D2; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1736268964,1736590781,1738498779,1738669485; qpfccr=true; no-alert3=true; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1738670026; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1738670026',
        'origin': 'https://match.yuanrenxue.cn',
        'priority': 'u=0, i',
        'referer': 'https://match.yuanrenxue.cn/match/3',
        'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    }
    headers = collections.OrderedDict()
    headers['host'] = 'match.yuanrenxue.cn'
    # headers['content-length'] = 0
    headers['user-agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
    headers['accept'] = '*/*'
    headers['origin'] = 'https://match.yuanrenxue.cn'
    headers['referer'] = 'https://match.yuanrenxue.cn/match/3'
    headers['accept-encoding'] = 'gzip, deflate, br, zstd'
    headers['accept-language'] = 'en,zh-CN;q=0.9,zh;q=0.8'
    headers['priority'] = 'u=0, i'


    # 后session clear，clear这个是比较关键的写法。
    session.headers.clear()
    session.headers.update(headers)
    _response = session.post(
        'https://match.yuanrenxue.cn/jssm', cookies=cookies, headers=headers,
        # proxies=proxies,
        # verify=False
    )


def get_data(session, page):
    get_jssm(session)

    cookies = {
        'Hm_lvt_434c501fe98c1a8ec74b813751d4e3e3': '1736590450',
        'sessionid': 'a4f0g9axtvbo2u4zp0ntooosnqcs7ct2',
        'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1737039529,1738300203,1738498763,1738668789',
        'HMACCOUNT': '7D26C2679F3275D2',
        'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1736268964,1736590781,1738498779,1738669485',
        'qpfccr': 'true',
        'no-alert3': 'true',
        'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1738670026',
        'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e': '1738670026',
    }

    headers = {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'en,zh-CN;q=0.9,zh;q=0.8',
        # 'cookie': 'Hm_lvt_434c501fe98c1a8ec74b813751d4e3e3=1736590450; sessionid=a4f0g9axtvbo2u4zp0ntooosnqcs7ct2; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1737039529,1738300203,1738498763,1738668789; HMACCOUNT=7D26C2679F3275D2; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1736268964,1736590781,1738498779,1738669485; qpfccr=true; no-alert3=true; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1738670026; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1738670026',
        'priority': 'u=0, i',
        'referer': 'https://match.yuanrenxue.cn/match/3',
        'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
    }
    headers = collections.OrderedDict()
    headers['host'] = 'match.yuanrenxue.cn'
    headers['accept'] = '*/*'
    headers['user-agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
    headers['referer'] = 'https://match.yuanrenxue.cn/match/3'
    headers['accept-encoding'] = 'gzip, deflate, br, zstd'
    headers['accept-language'] = 'en,zh-CN;q=0.9,zh;q=0.8'
    headers['priority'] = 'u=0, i'

    params = {
        'page': page,
    }

    response = session.get(
        'https://match.yuanrenxue.cn/api/match/3', params=params, cookies=cookies, headers=headers,
        # proxies=proxies,
        # verify=False
    )

    return response.json()

