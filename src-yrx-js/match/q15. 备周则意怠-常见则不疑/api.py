import random
import requests
import base64
from datetime import datetime
import pywasm


proxies = {
    'http': 'http://127.0.0.1:8866',
    'https': 'http://127.0.0.1:8866'
}
runtime = pywasm.load('./files/main.wasm')


"""
fetch('/static/match/match15/main.wasm').then(response =>
    response.arrayBuffer()
).then(bytes => WebAssembly.instantiate(bytes)).then(results => {
    instance = results.instance;
    window.q = instance.exports.encode;
    window.m = function (){
        t1 = parseInt(Date.parse(new Date())/1000/2);
        t2 = parseInt(Date.parse(new Date())/1000/2 - Math.floor(Math.random() * (50) + 1));
        return window.q(t1, t2).toString() + '|' + t1 + '|' + t2;
    };
"""
def calc_m():
    # Date["parse"](new Date())  返回的是整秒时间戳
    int_timestamp = int(datetime.now().timestamp()) # * 1000
    t1 = int(int_timestamp / 2)
    t2 = int(int_timestamp / 2 - random.randint(1, 49))
    sign = runtime.exec('encode', [t1, t2])
    return f'{sign}|{t1}|{t2}'
    

def get_data(session, page):
    cookies = {
        'Hm_lvt_434c501fe98c1a8ec74b813751d4e3e3': '1736590450',
        'sessionid': 'a4f0g9axtvbo2u4zp0ntooosnqcs7ct2',
        'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1737039529,1738300203,1738498763,1738668789',
        'HMACCOUNT': '7D26C2679F3275D2',
        'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1736268964,1736590781,1738498779,1738669485',
        'no-alert3': 'true',
        'yuanrenxue_cookie': '1738736116|agjVKTlHOkut6D0KDqbQ7VP8HCvgTCRcKLBWsgiWg83lH1t0zcFuJoirVjFXC',
        'm': '4abc7b12320457374af303021acf1ff8|1738830452000',
        'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e': '1738836809',
        'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1738836939',
    }

    headers = {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'en,zh-CN;q=0.9,zh;q=0.8',
        # Requests sorts cookies= alphabetically
        # 'cookie': 'Hm_lvt_434c501fe98c1a8ec74b813751d4e3e3=1736590450; sessionid=a4f0g9axtvbo2u4zp0ntooosnqcs7ct2; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1737039529,1738300203,1738498763,1738668789; HMACCOUNT=7D26C2679F3275D2; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1736268964,1736590781,1738498779,1738669485; no-alert3=true; yuanrenxue_cookie=1738736116|agjVKTlHOkut6D0KDqbQ7VP8HCvgTCRcKLBWsgiWg83lH1t0zcFuJoirVjFXC; m=4abc7b12320457374af303021acf1ff8|1738830452000; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1738836809; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1738836939',
        'priority': 'u=0, i',
        'referer': 'https://match.yuanrenxue.cn/match/15',
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
        'm': calc_m(),
        'page': page,
    }

    response = session.get('https://match.yuanrenxue.cn/api/match/15', params=params, cookies=cookies, headers=headers)

    return response.json()

