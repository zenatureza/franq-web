export default function getBrlValue(value: number | undefined) {
  if (!value) {
    return 'indefinido';
  }

  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}
