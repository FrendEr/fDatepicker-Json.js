# fDatepicker-Json.js

持后台渲染后台数据的移动端满屏日历插件，支持单个月份切换和多个月份平铺展示两种方式。使用多月份平铺展示时，支持初始化加载个数、分页加载。
目前供需要展示价格、库存的业务线使用。

## Initialize

```javascript
// data
var json = [{
	"date": "2015-08-09",
	"currency": "$",
	"price": "1923",
	"quota": 0
}, {
	"date": "2015-08-12",
	"currency": "$",
	"price": "1923",
	"quota": 10
}, {
	"date": "2015-08-16",
	"currency": "$",
	"price": "1923",
	"quota": 2
}, {
	"date": "2015-08-23",
	"currency": "$",
	"price": "1923",
	"quota": 0
}, {
	"date": "2015-08-26",
	"currency": "$",
	"price": "1923",
	"quota": 0
}, {
	"date": "2015-08-30",
	"currency": "$",
	"price": "1923",
	"quota": 0
}, {
	"date": "2015-09-03",
	"currency": "$",
	"price": "1923",
	"quota": 0
}];


// single frame
var datepicker = new Datepicker({
    container: '#container',
    initDate: new Date('2015/8/21'),
    startDate: new Date('2015/8/3'),
    endDate: new Date('2016/8/3'),
    singleFrame: true,
    dateJson: json,
    selectCallback: function(date) {
        $('#dateTips').html(date);
    }
});


// multiple frames
var datepicker = new Datepicker({
    container: '#container',
    initDate: new Date('2015/8/21'),
    startDate: new Date('2015/8/3'),
    endDate: new Date('2016/8/3'),
    initFrame: 4,
    loadFrames: 3,
    loadOffset: 60,
    dateJson: json,
    selectCallback: function(date) {
        $('#dateTips').html(date);
    }
});

```

## Demo

link：[http://frender.github.io/fDatepicker-Json.js](http://frender.github.io/fDatepicker-Json.js)

## Options

- **container** `@String`
> 需要制定的展示日历的根元素

- **initDate** `@String or @Date`
> 初始化的选中日期。如果使用`@String`类型，请遵循标准的YYYYMMDD模式，否则实现标准Date.parse的浏览器会报invalid date错误。下同。

- **startDate** `@String or @Date`
> 日历的开始日期

- **endDate** `@String or @Date`
> 日历的结束日期

- **singleFrame** `@Boolean`
> 使用单个月份模式，支持月份切换

- **initFrames** `@Number`
> 【多月份模式】初始化的个数

- **loadFrames** `@Number`
> 【多月份模式】分页加载每页的个数

- **loadOffset** `@Number`
> 【多月份模式】动态加载的偏移量

- **i18n** `@Boolean`
> 开启国际化支持英文模式，默认使用中文模式

- **dateJson** `@Object`
> 渲染价格日历需要的数据

- **selectCallback** `@Function`
> 选择日期后的回调函数

## Installation

```javascript

bower install fDatepicker-Json.js [--save[-dev]]

```
or

```javascript

npm install fdatepicker-json.js [--save[-dev]]

```

## Version

- **1.0.1**

- **1.0.0**
