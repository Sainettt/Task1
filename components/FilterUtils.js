//Zwykle sortowanie produktów
export const filterByPrice = (products, minPrice, maxPrice) => {
  const min = minPrice ? parseFloat(minPrice) : 0
  const max = maxPrice ? parseFloat(maxPrice) : Infinity

  return products.map((section) => ({
    ...section,
    data: section.data.filter(
      (product) => product.price >= min && product.price <= max
    ),
  }))
}

// Sortowanie kupionych produktów w koniec listy
export const sortProducts = (products) => {
  return products.map((section) => ({
    ...section,
    data: [...section.data].sort((a, b) => a.purchased - b.purchased),
  }))
}
