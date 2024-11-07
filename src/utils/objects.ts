/**
 * Deeply merges two objects. Properties in the `source` object will overwrite
 * those in the `target` object if conflicts occur. Nested objects are merged recursively.
 *
 * @template T - The type of the target object.
 * @param {T} target - The target object that will be merged into.
 * @param {Partial<T>} source - The source object with properties to merge into the target.
 * @returns {T} - A new object that is the result of the deep merge between `target` and `source`.
 */
export function deepMerge<T>(target: T, source: Partial<T>): T {
	if (typeof target !== 'object' || target === null) return source as T
	if (typeof source !== 'object' || source === null) return target

	for (const key in source) {
		if (source[key] instanceof Object && key in target) {
			(target as any)[key] = deepMerge((target as any)[key], source[key] as any)
		}
	}
	return Object.assign({}, target, source)
}
