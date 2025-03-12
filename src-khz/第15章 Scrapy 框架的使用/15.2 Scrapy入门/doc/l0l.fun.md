## 13.2 Scrapy 入门 (笔记)

接下来介绍一个简单的项目，完成一遍 Scrapy 抓取流程。通过这个过程，我们可以对 Scrapy 的基本用法和原理有大体了解。

### 1. 本节目标
本节要完成的任务如下。

创建一个 Scrapy 项目。

创建一个 Spider 来抓取站点和处理数据。

通过命令行将抓取的内容导出。

将抓取的内容保存到 MongoDB 数据库。

### 2. 准备工作
我们需要安装好 Scrapy 框架、MongoDB 和 PyMongo 库。如果尚未安装，请参照上一节的安装说明。

### 3. 创建项目
创建一个 Scrapy 项目，项目文件可以直接用 scrapy 命令生成，命令如下所示：`scrapy startproject tutorial`

这个命令可以在任意文件夹运行。如果提示权限问题，可以加 sudo 运行该命令。这个命令将会创建一个名为 tutorial 的文件夹，文件夹结构如下所示：
```bash
scrapy.cfg     # Scrapy 部署时的配置文件
tutorial         # 项目的模块，引入的时候需要从这里引入
    __init__.py    
    items.py     # Items 的定义，定义爬取的数据结构
    middlewares.py   # Middlewares 的定义，定义爬取时的中间件
    pipelines.py       # Pipelines 的定义，定义数据管道
    settings.py       # 配置文件
    spiders         # 放置 Spiders 的文件夹
        __init__.py
```

### 4. 创建 Spider
Spider 是自己定义的类，Scrapy 用它来从网页里抓取内容，并解析抓取的结果。不过这个类必须继承 Scrapy 提供的 Spider 类 scrapy.Spider，还要定义 Spider 的名称和起始请求，以及怎样处理爬取后的结果的方法。

也可以使用命令行创建一个 Spider。比如要生成 Quotes 这个 Spider，可以执行如下命令：
```bash
cd tutorial
scrapy genspider quotes quotes.toscrape.com
```

进入刚才创建的 tutorial 文件夹，然后执行 genspider 命令。第一个参数是 Spider 的名称，第二个参数是网站域名。执行完毕之后，spiders 文件夹中多了一个 quotes.py，它就是刚刚创建的 Spider，内容如下所示：
```python
import scrapy

class QuotesSpider(scrapy.Spider):
    name = "quotes"
    allowed_domains = ["quotes.toscrape.com"]
    start_urls = ['http://quotes.toscrape.com/']

    def parse(self, response):
        pass
```
这里有三个属性 ——name、allowed_domains 和 start_urls，还有一个方法 parse。

name，它是每个项目唯一的名字，用来区分不同的 Spider。

allowed_domains，它是允许爬取的域名，如果初始或后续的请求链接不是这个域名下的，则请求链接会被过滤掉。

start_urls，它包含了 Spider 在启动时爬取的 url 列表，初始请求是由它来定义的。

parse，它是 Spider 的一个方法。默认情况下，被调用时 start_urls 里面的链接构成的请求完成下载执行后，返回的响应就会作为唯一的参数传递给这个函数。该方法负责解析返回的响应、提取数据或者进一步生成要处理的请求。

### 5. 创建 Item
Item 是保存爬取数据的容器，它的使用方法和字典类似。不过，相比字典，Item 多了额外的保护机制，可以避免拼写错误或者定义字段错误。

创建 Item 需要继承 scrapy.Item 类，并且定义类型为 scrapy.Field 的字段。观察目标网站，我们可以获取到的内容有 text、author、tags。

定义 Item，此时将 items.py 修改如下：

```python
import scrapy

class QuoteItem(scrapy.Item):
    text = scrapy.Field()
    author = scrapy.Field()
    tags = scrapy.Field()
```

这里定义了三个字段，将类的名称修改为 QuoteItem，接下来爬取时我们会使用到这个 Item。

### 6. 解析 Response
前面我们看到，parse() 方法的参数 response 是 start_urls 里面的链接爬取后的结果。所以在 parse() 方法中，我们可以直接对 response 变量包含的内容进行解析，比如浏览请求结果的网页源代码，或者进一步分析源代码内容，或者找出结果中的链接而得到下一个请求。

我们可以看到`网页中既有我们想要的结果`，又有`下一页的链接`，这两部分内容我们都要进行处理。


```python
    def parse(self, response):
        quotes = response.css('.quote')
        for quote in quotes:
            text = quote.css('.text::text').extract_first()
            author = quote.css('.author::text').extract_first()
            tags = quote.css('.tags .tag::text').extract()
```


### 7. 使用 Item
上文定义了 Item，接下来就要使用它了。Item 可以理解为一个字典，不过在声明的时候需要实例化。然后依次用刚才解析的结果赋值 Item 的每一个字段，最后将 Item 返回即可。

QuotesSpider 的改写如下所示：

```python
import scrapy
from tutorial.items import QuoteItem

class QuotesSpider(scrapy.Spider):
    name = "quotes"
    allowed_domains = ["quotes.toscrape.com"]
    start_urls = ['http://quotes.toscrape.com/']

    def parse(self, response):
        quotes = response.css('.quote')
        for quote in quotes:
            item = QuoteItem()
            item['text'] = quote.css('.text::text').extract_first()
            item['author'] = quote.css('.author::text').extract_first()
            item['tags'] = quote.css('.tags .tag::text').extract()
            yield item

```
### 8. 后续 Request

```python
import scrapy
from tutorial.items import QuoteItem

class QuotesSpider(scrapy.Spider):
    name = "quotes"
    allowed_domains = ["quotes.toscrape.com"]
    start_urls = ['http://quotes.toscrape.com/']

    def parse(self, response):
        quotes = response.css('.quote')
        for quote in quotes:
            item = QuoteItem()
            item['text'] = quote.css('.text::text').extract_first()
            item['author'] = quote.css('.author::text').extract_first()
            item['tags'] = quote.css('.tags .tag::text').extract()
            yield item

        # 第一句代码首先通过 CSS 选择器获取下一个页面的链接，即要获取 a 超链接中的 href 属性。这里用到了::attr(href) 操作。然后再调用 extract_first() 方法获取内容。
        # 第二句代码调用了 urljoin() 方法，urljoin() 方法可以将相对 URL 构造成一个绝对的 URL。例如，获取到的下一页地址是 /page/2，urljoin() 方法处理后得到的结果就是：http://quotes.toscrape.com/page/2/。
        # 第三句代码通过 url 和 callback 变量构造了一个新的请求，回调函数 callback 依然使用 parse() 方法。这个请求完成后，响应会重新经过 parse 方法处理，得到第二页的解析结果，然后生成第二页的下一页，也就是第三页的请求。这样爬虫就进入了一个循环，直到最后一页。
        next = response.css('.pager .next a::attr("href")').extract_first()
        url = response.urljoin(next)
        yield scrapy.Request(url=url, callback=self.parse)

```

### 9. 运行
接下来，进入目录，运行如下命令：

scrapy crawl quotes
就可以看到 Scrapy 的运行结果了。

### 10. 保存到文件

```bash
scrapy crawl quotes -o quotes.json
scrapy crawl quotes -o quotes.jl
scrapy crawl quotes -o quotes.jsonline

scrapy crawl quotes -o quotes.csv
scrapy crawl quotes -o quotes.xml
scrapy crawl quotes -o quotes.pickle
scrapy crawl quotes -o quotes.marshal
scrapy crawl quotes -o ftp://user:pass@ftp.example.com/path/to/quotes.csv
```

### 11. 使用 Item Pipeline
```python
from scrapy.exceptions import DropItem

class TextPipeline(object):
    def __init__(self):
        self.limit = 50
    
    def process_item(self, item, spider):
        if item['text']:
            if len(item['text']) > self.limit:
                item['text'] = item['text'][0:self.limit].rstrip() + '...'
            return item
        else:
            return DropItem('Missing Text')

```


```python
import pymongo

class MongoPipeline(object):
    def __init__(self, mongo_uri, mongo_db):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db

    @classmethod
    def from_crawler(cls, crawler):
        return cls(mongo_uri=crawler.settings.get('MONGO_URI'),
            mongo_db=crawler.settings.get('MONGO_DB')
        )

    def open_spider(self, spider):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def process_item(self, item, spider):
        name = item.__class__.__name__
        self.db[name].insert(dict(item))
        return item

    def close_spider(self, spider):
        self.client.close()

```

> settings.py 
> 定义好 TextPipeline 和 MongoPipeline 这两个类后，我们需要在 settings.py 中使用它们。MongoDB 的连接信息还需要定义。
> 我们在 settings.py 中加入如下内容：
```python
ITEM_PIPELINES = {
   'tutorial.pipelines.TextPipeline': 300,
   'tutorial.pipelines.MongoPipeline': 400,
}
MONGO_URI='localhost'
MONGO_DB='tutorial'

```

> 赋值 ITEM_PIPELINES 字典，键名是 Pipeline 的类名称，键值是调用优先级，是一个数字，数字越小则对应的 Pipeline 越先被调用。

### 12. 源代码
本节代码地址：https://github.com/Python3WebSpider/ScrapyTutorial。

### 13. 结语
我们通过抓取 Quotes 网站完成了整个 Scrapy 的简单入门。但这只是冰山一角，还有很多内容等待我们去探索。