import React, { FC, useState, useEffect } from "react";
import { useActionData } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../../models/dataModels";
import { useGetAllDataQuery } from "../../../redux/features/apiSlice";

interface Props {
  pageNumber: number;
}

const Table: FC<Props> = ({ pageNumber }) => {
  const { data: allData } = useGetAllDataQuery();
  let products = allData?.data;

  const [open, setOpen] = useState(false);
  const [productsList, setProductsList] = useState(products);

  const { id } = useParams();
  if (id) {
    products = products?.filter((product: Product) => product.id === +id);
  }

  useEffect(() => {
    setProductsList(products);
  }, [id]);

  const productsPerPage = 5;
  const pagesVisited = pageNumber * productsPerPage;

  const printT_headPerPage = productsList
    ?.slice(pagesVisited, pagesVisited + productsPerPage)
    .some((product: Product) => product.print === true);

  const handleClick = (id: string) => {
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
            .map((product: any) => {
              return (
                <tr
                  onClick={() => handleClick(product.id)}
                  key={product.id}
                  style={{ backgroundColor: product.color }}
                >
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.year}</td>
                  {product.print === true && (
                    <>
                      <td>
                        <p>{product.color}</p>
                      </td>
                      <td>
                        <p>{product.pantone_value} </p>
                      </td>
                    </>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
