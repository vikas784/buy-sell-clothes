const formatPrice = (price) => {
  return `₹${price.toFixed(2)}`;
};

module.exports = {
  formatPrice
};