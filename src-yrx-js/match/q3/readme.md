## 分析

> 粗略看下数据请求接口`https://match.yuanrenxue.cn/api/match/3?page=1`，cookie和QueryString都没有特别的东西。
> 直接重放数据请求接口，会返回奇怪的`script`结果，而不是正常的数据。所以后台肯定有妖。
> 但是，除了数据请求接口外，多了一个接口（`https://match.yuanrenxue.cn/jssm`）
> 分析代码(如下所示)，可以看到`beforeSend`多请求了接口`jssm`，尝试增加该接口调用



```js

window.url = '/api/match/3';
request = function() {
    var list = {
        "page": window.page,
    };
    $.ajax({
        url: window.url,
        dataType: "json",
        async: false,
        data: list,
        type: "GET",
        beforeSend: function(request) {
            (function() {
                var httpRequest = new XMLHttpRequest();
                var url = '/jssm';
                httpRequest.open('POST', url, false);
                httpRequest.send()
            }
            )()
        },
        success: function(data) {
        }
    })
}
;
request()
```
