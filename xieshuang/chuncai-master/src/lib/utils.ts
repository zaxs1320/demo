/**
 * 获取参数类型
 * 
 * @param {any} sender 要确定类型的参数
 * @returns {string}
 */
export function getType(sender) {
    return sender === null ?
        (sender + '') :
        Object.prototype.toString.call(sender).match(/\s(\S+?)\]$/)[1].toLowerCase();
}

/**
 * 函数防抖
 * 
 * @export
 * @param {Function} fn 
 * @param {number} [delay=0] 
 * @returns 
 */
export function debounce(fn, delay: number = 0) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

//#region 拖动

/**
 * 获取鼠标位置
 * 
 * @param {MouseEvent} event 
 * @returns 
 */
function getMousePos(event) {
    return {
        x: event.clientX,
        y: event.clientY
    };
}

/**
 * 获取元素位置
 * 
 * @param {HTMLElement} eleNode 
 * @returns 
 */
function getElePos(eleNode) {
    let style = window.getComputedStyle(eleNode);
    return {
        x: parseFloat(style.left),
        y: parseFloat(style.top)
    };
}

/**
 * 使元素可拖动
 * 
 * @param {HTMLElement} targetNode 有效拖动区域的元素
 * @param {HTMLElement} dragNode 被拖动的目标元素
 * @param {function} callback 
 */
export function drag(targetNode, dragNode, callback) {
    let canMove = false;// 是否可以移动
    let startPos = { x: 0, y: 0 }; // 起始坐标

    targetNode.addEventListener('mousedown', event => {
        canMove = true;
        startPos = getMousePos(event);
    });

    document.addEventListener('mouseup', () => {
        canMove = false;
    });

    document.addEventListener('mousemove', event => {
        if (!canMove) return;

        let mousePos = getMousePos(event);

        let offsetX = mousePos.x - startPos.x;  // x轴偏移量
        let offsetY = mousePos.y - startPos.y;  // y轴偏移量

        startPos = getMousePos(event);

        let elePos = getElePos(dragNode);
        let newPos = {
            x: elePos.x + offsetX,
            y: elePos.y + offsetY
        };
        dragNode.style.left = newPos.x + 'px';
        dragNode.style.top = newPos.y + 'px';
        callback && callback(newPos);
    });
}
//#endregion

/**
 * 遍历(伪)数组，或对象
 * 
 * @param {any} sender
 * @param {function} callback
 */
export function each(sender, callback) {
    let i: any = 0;                      // 循环用变量
    let len = sender.length;           // 长度
    let ifArrayLike = arrayLike(sender); // 是否属于(类)数组
    let result;        // 回调的结果

    if (ifArrayLike) {
        for (; i < len; i++) {
            result = callback.call(sender[i], i, sender[i]);
            // true 的时候continue 省略
            if (result === false) break;
        }
    } else {
        for (i in sender) {
            result = callback.call(sender[i], i, sender[i]);
            // true 的时候continue 省略
            if (result === false) break;
        }
    }
}

/**
 * 检测是否属于(伪)数组
 * 
 * @param {any} sender
 * @returns {boolean}
 */
export function arrayLike(sender: any) {
    // duck typing ，检测是否属于数组
    return getType(sender.length) == 'number' && getType(sender.splice) == 'function';
}

/**
 * 获取随机数 int
 * 
 * @export
 * @param {number} maxNum 
 * @returns 
 */
export function randomInt(maxNum: number) {
    return ~~(Math.random() * maxNum);
}