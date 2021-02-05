interface Args<T> {
  colorScheme: T;
  colorSchemeDefault: T;
}

export function getColorSchemeOrDefault<T>({ colorScheme, colorSchemeDefault }: Args<T>): T {
  let value = colorScheme as T;

  if (!colorScheme) {
    value = colorSchemeDefault;
  }

  return value as T;
}
