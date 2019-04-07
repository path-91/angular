export function toBoolean(value: boolean | string): boolean {
  return value != null && `${value}` !== 'false';
}
