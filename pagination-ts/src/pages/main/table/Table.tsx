import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../../models/dataModels";
import { useGetAllDataQuery } from "../../../redux/features/apiSlice";
import TBody from "../table/tBody/TBody"

interface Props {
  pageNumber: number;
}

const Table: FC<Props> = ({ pageNumber }) => {
  const { data: allData } = useGetAllDataQuery();
  let products = allData?.data;

  const [open, setOpen] = useState(false);
  const [productsList, setProductsList] = useState<Product[]>([]);

  const { id } = useParams();
  if (id) {
    products = products?.filter((product: Product) => product.id === +id);
  }

  console.log(products)
  useEffect(() => {
    products && setProductsList(products);
  }, [id]);

  const productsPerPage = 5;
  const pagesVisited = pageNumber * productsPerPage;

  const printT_headPerPage = productsList
    ?.slice(pagesVisited, pagesVisited + productsPerPage)
    .some((product: Product) => product.print === true);

  const handleClick = (id: number): void => {
    setOpen(prevState => !prevState);
    setProductsList(
      productsList?.map((product: Product) => {
        if (product.id === +id) {
          return { ...product, print: open };
        } else {
          return product;
        }
      })
    );
  };

console.log("ps", productsPerPage);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Imię</th>
            <th>Rok</th>
            {printT_headPerPage && (
              <>
                <th>Kolor</th>
                <th>Warość pantone</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {productsList
            ?.slice(pagesVisited, pagesVisited + productsPerPage)
            .map((product: Product) => {
              return (
                <TBody product={product} 
                handleClick = {handleClick}/>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
