export function buildTableFromJson(obj) {
  const entries = Object.entries(obj);

  const numbers = entries.map(([num]) => num);
  const descriptions = entries.map(([_, text]) => text);

  return { numbers, descriptions };
}
