from scrapy.selector import Selector
from os.path import join, dirname, realpath


def main():
    if False:
        body = '<html><body><span>good</span></body></html>'
        sel = Selector(text=body)
        print(sel.xpath('//span/text()').extract())
        
    file_path = join(dirname(realpath(__file__)), 'superHero.xml')
    with open(file_path, 'r') as rf:
        body = rf.read()
        # Selector会将xml补全为标准html：增加<html><body>
        sel = Selector(text=body)
        print(sel.xpath('/*').extract())
        print(sel.xpath('/html/body/superhero/class[1]').extract())
        print(sel.xpath('/html/body/superhero/class[last()]').extract())
        print(sel.xpath('/html/body/superhero/class[last()-1]/name/text()').extract())
        print(sel.xpath('//name[@lang="en"]').extract())
        print('---'*10)
        print(sel.xpath('/html/body/superhero/class/sex/text()').extract())
        print(sel.xpath('/html/body/class/sex/text()').extract())
        subBody = sel.xpath('/html/body/superhero/class[last()-1]').extract()
        print('subBody:', subBody)
        # 下面的结果超出预期了，TODO：待分析！！！
        print('------==', Selector(text=subBody[0]).xpath('/html/body/superhero/class/sex/text()').extract())
        print('------==', Selector(text=subBody[0]).xpath('/html/body/class/sex/text()').extract())
        print('------==', Selector(text=subBody[0]).xpath('//class/sex/text()').extract())
    
    
if __name__ == '__main__':
    main()
    