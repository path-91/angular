export function isInteger(value: string | number): boolean {
  return typeof value === 'number' && Number.isFinite(value) && Math.floor(value) === value;
}
