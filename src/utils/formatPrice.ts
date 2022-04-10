export function formatPrice(price: number) {
  const validPrice = price >= 0 ? price : '-';
  return `$ ${validPrice}`;
}
