export const moneyFormat = (currency: string, amount: number) => {
  return new Intl.NumberFormat('es-GT', { style: 'currency', currency: currency }).format(amount / 100)
}