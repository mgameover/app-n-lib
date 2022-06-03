export function isDefined(value: any): boolean {
    return value !== null && value !== undefined;
}

export function coerceBoundaries(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}