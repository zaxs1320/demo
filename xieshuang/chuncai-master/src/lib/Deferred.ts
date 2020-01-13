import { getType } from './utils';

export default class Deferred {
    //#region private fields
    /**
     * 回调队列
     * 
     * @private
     * @type {(Array<number | Function>)}
     * @memberof Deferred
     */
    private queue: Array<number | Function> = [];

    /**
     * 0-pending 1-fulfilled
     * 
     * @private
     * @type {number}
     * @memberof Deferred
     */
    private statu: number = 0;

    /**
     * 是否禁用
     * 
     * @private
     * @type {boolean}
     * @memberof Deferred
     */
    private disabled: boolean = false;

    /**
     * 是否正在出列
     * 
     * @private
     * @type {boolean}
     * @memberof Deferred
     */
    private invoking: boolean = false;

    //#endregion

    //#region private methods
    /**
     * 出列
     * 
     * @private
     * @returns {void} 
     * @memberof Deferred
     */
    private next(): void {
        // 如果禁用
        if (this.disabled) return;

        // 出列完毕
        if (!this.queue.length) {
            this.invoking = false;
            return;
        }

        this.invoking = true;

        let item = this.queue.shift(); // 取出第一项
        let itemType = getType(item);

        if (itemType == 'function') {
            (<Function>item)();
            this.next();
        }
        else if (itemType == 'number') {
            setTimeout(() => {
                this.next();
            }, <number>item);
        }

    }
    //#endregion

    //#region public methods
    /**
     * 添加到队列
     * 
     * @param {Function|number} fn 
     * @returns {Deferred} 
     * @memberof Deferred
     */
    public then(fnOrNum: Function | number): Deferred {
        this.queue.push(fnOrNum);
        // fulfilled 且未有任务进行，则出列
        if (this.statu === 1 && !this.invoking) {
            this.next();
        }
        return this;
    }

    /**
     * 延时
     * 
     * @param {number} num 
     * @returns {Deferred} 
     * @memberof Deferred
     */
    public delay(num: number): Deferred {
        return this.then(num);
    }

    /**
     * 改变状态为 fulfilled
     * 
     * @returns {Deferred} 
     * @memberof Deferred
     */
    public resolve(): Deferred {
        if (this.statu === 1) return this;
        this.statu = 1;
        this.next();
        return this;
    }

    /**
     * 禁用
     * 
     * @returns {Deferred} 
     * @memberof Deferred
     */
    public disable(): Deferred {
        this.disabled = true;
        return this;
    }
    //#endregion
}