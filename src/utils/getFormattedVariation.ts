export default function getFormattedVariation(variation: number): string {
  if (variation > 0) {
    return `+ ${variation}%`;
  }

  return `${variation.toString()}%`;
}
