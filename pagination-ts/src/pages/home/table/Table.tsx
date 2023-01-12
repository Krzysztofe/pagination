import React, { useState } from "react";
import {
  productsApi,
  useGetAllDataQuery,
} from "../../../redux/features/apiSlice";
import { displayProducts } from "../../../utils/displayProducts";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import {inputValueChange} from "../../../redux/features/slice"

const Table = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const {
    data: allData,
    isLoading,
    isError,
    error,
  } = useGetAllDataQuery(undefined);

 const inputValuey = useSelector((state: RootState) => state.inputValuex.value);
  let products = allData?.data;

  console.log(products);

  if (inputValuey === "") {
    products = products;
  } else {
    products = products?.filter((i: any) => i.id === +inputValuey);
  }

  const productsPerPage = 4;
  const pageCount = Math.ceil(products?.length / productsPerPage);
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  let content = (
    <main>
      <h2>No data</h2>
    </main>
  );

  if (isLoading) {
    content = (
      <main>
        <h2>Loading</h2>
      </main>
    );
  }

  if (isError) {
    content = (
      <main>
        {/* <h2>{error}</h2> */}
        <h2>Brak połączenia z serwerem</h2>
      </main>
    );
  }

  if (products) {
    content = (
      <main>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Imię</th>
              <th>Rok</th>
            </tr>
          </thead>
          <tbody>
            {displayProducts(products, pageNumber, productsPerPage)}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationButtonsContainer"}
          previousLinkClassName={"paginationButton__previousNext"}
          nextLinkClassName={"paginationButton__previousNext"}
          disabledClassName={"disabledButton"}
          activeClassName={"paginationButton__active"}
        />
      </main>
    )
  }

  return (
    <>
      {content};
    </>
  );
};

export default Table;
