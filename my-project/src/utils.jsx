export function currencyFormat(num) {
  return '€' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export function currencyFormatNoCents(num) {
  return '€' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export function currencyFormatMicroCents(num) {
  return '€' + num.toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
