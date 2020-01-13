import chuncai from './chuncai';

var opt = {
    menu: {
        $title: '你想做什么呢？',
        '关于春菜': function () {
            window.open('https://github.com/shalldie/chuncai');
        },
        '存活时间': '咱已经和主人共同度过了 ' + Math.floor((+new Date - 1456998485780) / (1000 * 60 * 60 * 24)) + '天 的人生了哦~   我是不是很棒呢~',
        '拍打喂食': {
            $title: '要来点什么呢？',
            '小饼干': '嗷呜~ 多谢款待  >ω<',
            '胡萝卜': '人家又不是小兔子 QwQ',
            '秋刀鱼': '大哥哥这是什么？呀！好长！诶？！好滑哦(๑• . •๑)！阿呜～',
            '胖次': '哇~ 好可爱的胖次~~~',
            '淡定红茶': '喝完了，ˊ_>ˋ和我签订契约成为淡定少女吧！'
        },
        '传送门': {
            $title: '去逛逛 ~',
            'My博客园主页': function () {
                window.open('https://www.cnblogs.com/lianmin')
            }
        },
        '隐藏春菜': function () {
            chuncai.hide();
        }
    },
    words: [
        '咦你想做什么 oAo',
        '「不要啊」你以为我会这么说么噗噗~',
        '一起组团烧烤秋刀鱼',
        '白日依山尽，黄河入海流，欲穷千里目，更上 .. .. 一层楼?',
        '啊啦今天想吃点什么呢~',
        '据说点赞的都找到女朋友了~'
    ]
};

chuncai.init(opt);