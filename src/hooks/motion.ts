export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t
export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
