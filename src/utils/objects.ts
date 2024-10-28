export function deepMerge<T>(target: T, source: Partial<T>): T {
  if (typeof target !== 'object' || target === null) return source as T;
  if (typeof source !== 'object' || source === null) return target;

  for (const key in source) {
    if (source[key] instanceof Object && key in target) {
      Object.assign({}, source[key], deepMerge((target as any)[key], source[key]));
    }
  }
  return Object.assign({}, target, source);
}
