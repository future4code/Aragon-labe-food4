export const convertPrice = (price) => {
const actualPrice = price.toLocaleString("pt-br", {style:"currency", currency: "BRL"})
return actualPrice
}