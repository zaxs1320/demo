# chuncai

[![npm](https://img.shields.io/npm/v/chuncai.svg)](https://www.npmjs.com/package/chuncai) ![Github file size](https://img.shields.io/github/size/shalldie/chuncai/dist/chuncai.js.svg)

A lovely Page Wizard, is responsible for selling moe...

一个可爱的页面导航精灵，负责卖萌。

![image](https://raw.githubusercontent.com/shalldie/chuncai/master/GIF.gif)

[github: https://github.com/shalldie/chuncai](https://github.com/shalldie/chuncai)

[查看 demo](https://shalldie.github.io/demos/chuncai/index.html)

## Installation

    npm install chuncai

## Usage & Example

调用 **init** 方法初始化。
**chuncai.init(opt:IOpt)**

-   **words** 是一个数组: **Array<string>**，存放春菜闲暇时候说的话。
-   **menu** 是菜单: _IOpt_，其中：

1.  **object** 表示子菜单
2.  key **$title** 是在展开子菜单的时候，春菜要说的话
3.  **string** 表示点击后要说的话
4.  **Function** 是点击后要执行的方法

可查看如下 example 和 interface 。

```js
// es module、typescript
import chuncai from 'chuncai';
// commonjs
//let chuncai = require('chuncai');
// window
//var chuncai = window['chuncai'];

const opt = {
    menu: {
        $title: '一级菜单的标题',
        '点击会执行方法': function () {
            alert('hello chuncai');
        },
        '点击会说出一段话': 'balabalabalabalabala......',
        '点击展开二级菜单': {
            $title: '二级菜单的标题',
            '选项1': '',
            '选项2': function() {},
            '三级菜单': {...}
        },
        '隐藏春菜': function () {
            chuncai.hide();
        }
    },
    words: [
        '咦你想做什么 oAo',
        'balabalabala...',
        ...
    ]
};

chuncai.init(opt);
```

## Interface

```js
/**
 * 初始化参数
 *
 * @export
 * @interface IOpt
 */
export interface IOpt {
    /**
     * 菜单
     *
     * @type {IMenuItem}
     * @memberof IOpt
     */
    menu: IMenuItem;
    /**
     * 随机语句
     *
     * @type {Array<string>}
     * @memberof IOpt
     */
    words: Array<string>;
}

/**
 * 菜单项
 *
 * @export
 * @interface IMenuItem
 */
export interface IMenuItem {
    /**
     * 展开菜单时，陈述的文字
     *
     * @type {string}
     * @memberof IMenuItem
     */
    $title?: string;

    /**
     * 点击每一项菜单时，进行的操作
     * string    - 陈述文字
     * Function  - 执行回调方法
     * ImenuItem - 子菜单
     *
     * @type {string|Function|IMenuItem}
     * @memberof IMenuItem
     */
    [prop: string]: string | Function | IMenuItem;
}
```

## >\_<#@! Enjoy.
