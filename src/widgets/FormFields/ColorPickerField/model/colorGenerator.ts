import chroma from "chroma-js";

export const generateRandomColor = (): string => {
  const hue = Math.random() * 360;
  const saturation = Math.random() * 1;
  const lightness = Math.random() * 1;

  return chroma.hsl(hue, saturation, lightness).hex();
};

export const generateColorPalette = (
  numColors: number = 5,
  lockedColors: boolean[],
  currentPalette: string[] = []
): { color: string; isLocked: boolean }[] => {
  const palette: { color: string; isLocked: boolean }[] = [];

  for (let i = 0; i < numColors; i++) {
    const isLocked = lockedColors[i];
    const color =
      isLocked && currentPalette[i] ? currentPalette[i] : generateRandomColor();
    palette.push({ color, isLocked });
  }

  return palette;
};

function getLuminance(color: string): number {
  const rgb = chroma(color).rgb(); // Получаем RGB компоненты
  const [r, g, b] = rgb.map((x) => {
    x /= 255;
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b; // Яркость
}

export function getTextColorForBackground(backgroundColor: string): string {
  const luminance = getLuminance(backgroundColor);
  return luminance > 0.5 ? "black" : "white";
}
