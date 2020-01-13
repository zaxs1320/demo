/**
 * 坐标
 *
 * @export
 * @interface IPoint
 */
export interface IPoint {
    x: number;
    y: number;
}
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
