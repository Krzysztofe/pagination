import React, { useState } from "react";
import { useGetAllDataQuery } from "../../redux/features/apiSlice";
import Table from "./table/Table";
import ReactPaginate from "react-paginate";

const Main = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const {
    data: allData,
    isLoading,
    isError,
    isFetching,
    isSuccess,
  } = useGetAllDataQuery();

  let products = allData?.data;

  const productsPerPage = 5;
  const pageCount = products && Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }: any):void => {
    setPageNumber(selected);
  };

  let content = (
    <main>
      <h2>No data</h2>
    </main>
  );

  if (isLoading || isFetching) {
    content = (
      <main>
        <h2>Loading</h2>
      </main>
    );
  }

  if (isError) {
    content = (
      <main>
        <h2>Brak połączenia z serwerem</h2>
      </main>
    );
  }

  if (isSuccess) {
    content = (
      <main>
        <Table pageNumber={pageNumber} />

        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          pageCount={pageCount || 1}
          onPageChange={changePage}
          containerClassName={"paginationButtonsContainer"}
          previousLinkClassName={"paginationButton__previousNext"}
          nextLinkClassName={"paginationButton__previousNext"}
          disabledClassName={"disabledButton"}
          activeClassName={"paginationButton__active"}
        />
      </main>
    );
  }

  return <>{content}</>;
};

export default Main;
