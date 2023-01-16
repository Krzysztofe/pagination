import { useState } from "react";
import { useGetAllDataQuery } from "../../redux/features/apiSlice";
import Table from "./table/Table";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import { Product } from "../../models/fetchDataModels";
import { SelectedInPagination } from "../../models/selectedInPagination";
import { productsPerPage } from "../../data/productsPerPage";

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
  const { id } = useParams();
  if (id) {
    products = products?.filter((product: Product) => product.id === +id);
  }

  const pageCount = products && Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }: SelectedInPagination): void => {
    setPageNumber(selected);
  };

  let content = (
    <main className="main__message">
      <h2>No data</h2>
    </main>
  );

  if (isLoading || isFetching) {
    content = (
      <main className="main__message">
        <h2>Loading</h2>
      </main>
    );
  }

  if (isError) {
    content = (
      <main className="main__message">
        <h2>Brak połączenia z serwerem</h2>
      </main>
    );
  }

  if (isSuccess) {
    content = (
      <main>
        <div className="wrapper wrapper--main">
          <Table pageNumber={pageNumber} products={products} />
          <ReactPaginate
            previousLabel={"<< Previous"}
            nextLabel={"Next >>"}
            pageCount={pageCount || 1}
            onPageChange={changePage}
            containerClassName={"paginationButtonsContainer"}
            previousLinkClassName={"paginationButton__previousNext"}
            nextLinkClassName={"paginationButton__previousNext"}
            disabledClassName={"disabledButton"}
            activeClassName={"paginationButton__active"}
          />
        </div>
      </main>
    );
  }

  return <>{content}</>;
};

export default Main;
