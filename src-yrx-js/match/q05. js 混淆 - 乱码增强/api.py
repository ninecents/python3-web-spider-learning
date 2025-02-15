from datetime import datetime
import base64
import execjs


proxies = {
    'http': 'http://127.0.0.1:8866',
    'https': 'http://127.0.0.1:8866'
}


# Date["parse"](new Date())  返回的是整秒时间戳
int_timestamp = int(datetime.now().timestamp()) * 1000
print('int_timestamp', int_timestamp)

def calc_RM4hZBv0dDon443M():
    # file = 'files/main.js'
    file = 'api.js'
    js = open(file, encoding='utf-8').read()
    node = execjs.get()
    ctx = node.compile(js)
    # js = f"""main({int_timestamp})"""
    js = 'getCookie()'
    ret = ctx.eval(js)
    return ret
# RM4hZBv0dDon443M = calc_RM4hZBv0dDon443M()
args_in_js = calc_RM4hZBv0dDon443M()
print('args_in_js', args_in_js)
    

def get_data(session, page):
    cookies = {
        'sessionid': 'kscfpubhdvwmi1qds35srbrn6uedwd0r',
        'HMACCOUNT': 'D960CE22B168C40A',
        'no-alert3': 'true',
        'm': args_in_js['cookie_m'],
        'RM4hZBv0dDon443M': args_in_js['cookie_RM4'],
    }
    print('cookies', cookies)

    headers = {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'en,zh-CN;q=0.9,zh;q=0.8',
        # Requests sorts cookies= alphabetically
        # 'cookie': 'sessionid=kscfpubhdvwmi1qds35srbrn6uedwd0r; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1738943552,1739078564,1739602205,1739615470; HMACCOUNT=D960CE22B168C40A; no-alert3=true; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1738943587,1739078972,1739602283,1739615475; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1739615475; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1739624520; m=4e927403c952304545dc5bfd91c86863; RM4hZBv0dDon443M=6pl2ayc0IGdTOZK5LAkM3WkWZWbXl/Lu/0Uxfv1EvxpY9LWkdLS+65js84K5dIUXn7HhPlVGHkH74mSBfUmlF+DlMx4JuaIEp7W+If7nVBxCZ2CPRb0gfxkYjFclRopeVSQDjr0oYygZ3Gx/m5jsfy8/8ZZF96sf5L9M6srrCdxPHDmtN/lhYGRoCdcSSdKNg30AMFuVldTmHY3OEZ41IqEWajlYlZ5jTmMIkC+GomY=',
        'priority': 'u=0, i',
        'referer': 'https://match.yuanrenxue.cn/match/5',
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
        'page': str(page),
        'm': args_in_js['m'], # '1739624759023',
        'f': args_in_js['f'], # '1739624754000',
    }

    response = session.get('https://match.yuanrenxue.cn/api/match/5', params=params, cookies=cookies, headers=headers)


    return response.json()

