import React, { FC } from "react";
import { Product } from "../../../../models/dataModels";

interface Props {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

const TBody: FC<any> = ({ product, handleClick }) => {
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
};

export default TBody;
