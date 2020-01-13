/**
 * 装饰器 - 前置某个方法
 * 
 * @export
 * @param {Function} fn 要在方法调用前先执行的方法
 * @returns 
 */
export function prependFn(fn: Function) {
    return function (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
        let method = descriptor.value;
        descriptor.value = function (...args) {
            fn.call(this);
            return method.apply(this, args);
        };
    }
}