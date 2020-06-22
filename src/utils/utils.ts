
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export function changeGlobalThemeVariables(incomingVars: any): void {
  console.log(incomingVars);
}
