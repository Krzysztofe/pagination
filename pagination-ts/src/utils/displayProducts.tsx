export const displayProducts = (
  products: any,
  pageNumber: number,
  productsPerPage: number
) => {
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = products
    ?.slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product: any) => {
      return (
        <tr style={{ backgroundColor: product.color }} key={product.id}>
          <td> {product.id}</td>
          <td> {product.name}</td>
          <td> {product.year}</td>
        </tr>
      );
    });
  return displayProducts;
};


