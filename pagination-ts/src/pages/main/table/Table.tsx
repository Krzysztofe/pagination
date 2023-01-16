import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../../models/fetchDataModels";
import TBody from "../table/tBody/TBody";
import { productsPerPage } from "../../../data/productsPerPage";

interface Props {
  pageNumber: number;
  products: Product[] | undefined;
}

const Table: FC<Props> = ({ pageNumber, products }) => {
  const [open, setOpen] = useState(false);
  const [productsList, setProductsList] = useState<Product[]>([]);
  const { id } = useParams();
  useEffect(() => {
    products && setProductsList(products);
  }, [id]);

  const pagesVisited = pageNumber * productsPerPage;

  const printTableHead = productsList
    ?.slice(pagesVisited, pagesVisited + productsPerPage)
    .some((product: Product) => product.print === true);

  const handleClick = (id: number): void => {
    setOpen(prevState => !prevState);
    setProductsList(
      productsList?.map((product: Product) => {
        if (product.id === id) {
          return { ...product, print: open };
        } else {
          return product;
        }
      })
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Imię</th>
          <th>Rok</th>
          {printTableHead && (
            <>
              <th>Kolor</th>
              <th>Warość pantone</th>
            </>
          )}
        </tr>
      </thead>
      <TBody
        productsList={productsList}
        handleClick={handleClick}
        pagesVisited={pagesVisited}
      />
    </table>
  );
};

export default Table;
