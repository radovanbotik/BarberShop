const formatPrice = price => {
  console.log(price);
  return new Intl.NumberFormat("sk-SK", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};
export { formatPrice };
