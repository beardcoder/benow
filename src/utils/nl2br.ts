export function nl2br(value: string): string {
  return value.replace(/\n/g, '<br />')
}
