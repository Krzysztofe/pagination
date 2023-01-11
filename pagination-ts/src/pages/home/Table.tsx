import {
  productsApi,
  useGetAllProductsQuery,
} from "../../redux/features/apiSlice";

const Table = () => {
  const {
    data: allData,
    isLoading,
    isError,
  } = useGetAllProductsQuery(undefined);

  const products = allData?.data;
  //   console.log(products);

  return (
    <table>
      <tbody>
        {products?.map((product: any) => {
          return (
            <tr key={product.id}>
              <td> {product.id}</td>
              <td> {product.name}</td>
              <td> {product.year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
