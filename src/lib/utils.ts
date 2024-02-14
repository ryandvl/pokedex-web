export function firstUpperCase(string: string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function maxColor(colorHex: string) {
  let [r, g, b] = [
    parseInt(colorHex.substring(1, 3), 16),
    parseInt(colorHex.substring(3, 5), 16),
    parseInt(colorHex.substring(5, 7), 16),
  ];

  r = Math.min(Math.round(r * 2), 255);
  g = Math.min(Math.round(g * 2), 255);
  b = Math.min(Math.round(b * 2), 255);

  const newColor =
    "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");

  return newColor;
}
