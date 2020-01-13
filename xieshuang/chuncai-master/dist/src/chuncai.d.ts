import { IOpt } from "./Interface";
import './chuncai.scss';
export declare class Chuncai {
    /**
     * 菜单是否展开
     *
     * @private
     * @type {boolean}
     * @memberof Chuncai
     */
    private menuOn;
    /**
     * 要循环骚操作的定时器
     *
     * @private
     * @type {number}
     * @memberof Chuncai
     */
    private freeActionTimer;
    /**
     * 渐显文字的dfd
     *
     * @private
     * @type {Deferred}
     * @memberof Chuncai
     */
    private freeSayDfd;
    /**
     * 当前菜单配置
     *
     * @private
     * @type {IOpt}
     * @memberof Chuncai
     */
    private opt;
    /**
     * 春菜文字容器
     *
     * @readonly
     * @private
     * @memberof Chuncai
     */
    private readonly eleNodeWord;
    /**
     * 整个春菜
     *
     * @readonly
     * @private
     * @memberof Chuncai
     */
    private readonly eleNodeMain;
    /**
     * 春菜身体部分
     *
     * @readonly
     * @private
     * @memberof Chuncai
     */
    private readonly eleNodeBody;
    /**
     * 菜单容器
     *
     * @readonly
     * @private
     * @memberof Chuncai
     */
    private readonly eleNodeMenu;
    /**
     * 菜单toggle按钮
     *
     * @readonly
     * @private
     * @memberof Chuncai
     */
    private readonly eleNodeMenuBtn;
    /**
     * 召唤按钮
     *
     * @readonly
     * @private
     * @memberof Chuncai
     */
    private readonly eleNodeZhaohuan;
    /**
     * 填充dom
     *
     * @private
     * @memberof Chuncai
     */
    private fillDom;
    /**
     * 填充菜单
     *
     * @private
     * @param {Array<string>} [subMenus=[]]
     * @memberof Chuncai
     */
    private fillMenu;
    /**
     * 绑定事件
     *
     * @private
     * @memberof Chuncai
     */
    private evtSet;
    /**
     * 选择某一项
     *
     * @private
     * @param {string} [cccmd='']
     * @memberof Chuncai
     */
    private choseItem;
    /**
     * 开始随机行为
     *
     * @private
     * @param {boolean} [rightNow=false] 立即开始
     * @param {boolean} [interval=true] 是否循环
     * @memberof Chuncai
     */
    private freeAction;
    /**
     * 渐显文字
     *
     * @private
     * @param {string} content
     * @memberof Chuncai
     */
    private freeSay;
    /**
     * 显示/隐藏 菜单
     *
     * @private
     * @returns {Deferred}
     * @memberof Chuncai
     */
    private toggleMenu;
    /**
     * 显示菜单
     *
     * @private
     * @returns {Deferred}
     * @memberof Chuncai
     */
    private showMenu;
    /**
     * 隐藏菜单
     *
     * @private
     * @returns {Deferred}
     * @memberof Chuncai
     */
    private hideMenu;
    /**
     * 初始化
     *
     * @param {IOpt} opt
     * @memberof Chuncai
     */
    init(opt: IOpt): void;
    /**
     * 显示春菜
     *
     * @memberof Chuncai
     */
    show(): void;
    /**
     * 隐藏
     *
     * @memberof Chuncai
     */
    hide(): void;
}
declare const _default: Chuncai;
export default _default;
