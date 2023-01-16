import { FC } from "react";
import { Product } from "../../../../models/fetchDataModels";
import { productsPerPage } from "../../../../data/productsPerPage";

interface Props {
  productsList: Product[];
  handleClick: (id: number) => void;
  pagesVisited: number;
}

const TBody: FC<Props> = ({ productsList, handleClick, pagesVisited }) => {
  const displayProducts = productsList?.slice(
    pagesVisited,
    pagesVisited + productsPerPage
  );

  return (
    <tbody>
      {displayProducts.map((product: any) => {
        return (
          <tr key={product.id} onClick={() => handleClick(product.id)}>
            <td style={{ backgroundColor: product.color }}>{product.id}</td>
            <td style={{ backgroundColor: product.color }}>{product.name}</td>
            <td style={{ backgroundColor: product.color }}>{product.year}</td>
            {product.print === true && (
              <>
                <td style={{ backgroundColor: product.color }}>
                  {product.color}
                </td>
                <td style={{ backgroundColor: product.color }}>
                  {product.pantone_value}
                </td>
              </>
            )}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TBody;
