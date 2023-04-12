import React from "react";

const Pagination = ({ totalData, dataPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pages.push(i);
  }

  console.log(pages, 9);
  return (
    <div className=" d-flex">
      {pages.map((val, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setCurrentPage(val);
            }}
            className="pagination-btn me-1 fs-3 roboto "
          >
            {val}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
