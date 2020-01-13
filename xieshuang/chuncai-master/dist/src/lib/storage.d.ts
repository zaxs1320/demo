import { IPoint } from "../Interface";
/**
 * 获取sessionStorage中存储的信息
 *
 * @export
 * @returns {IPoint}
 */
export declare function getStorage(): IPoint;
/**
 * 将信息存储到sessionStorage中
 *
 * @export
 * @param {any} config
 */
export declare function saveStorage(config: IPoint): void;
