
export const formatPrice = (price) => {
    const newPrice = Math.round(price * 100) / 100;
    return Math.abs(newPrice);
}