import React, { useEffect, useRef, useState } from "react";

import Card from "./Card";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import coffee from "../images/coffee-asorted-400x400.jpg";
import axios from "axios";

const minDistance = 11;

const Shoppage = ({ heading }) => {
  const [value1, setValue1] = useState([0, 100]);
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [DataPerPage, setDataPerPage] = useState(9);
  const [Search, setSearch] = useState("");

  const min = useRef(0);
  const max = useRef(100);

  const getShopProducts = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/${heading}`
      );
      const result = res.data.response;
      setProductData(result);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const filterProducts = async () => {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/filterproducts`,
      {
        min: min.current,
        max: max.current,
      }
    );
    console.log(res?.data?.response, 33);
    const result = await res?.data?.response;
    setProductData(result);
  };

  const getSearchFilterData = async () => {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/searchfilter`,
      {
        Search,
      }
    );
    const result = await res?.data?.response;
    setProductData(result);
  };

  useEffect(() => {
    getShopProducts();
  }, []);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const lastDataIndex = currentPage * DataPerPage;
  const firstDataIndex = lastDataIndex - DataPerPage;
  const currentPageData = productData.slice(firstDataIndex, lastDataIndex);

  return (
    <>
      {/* ****************************************************************************************** */}
      {/* ******************************* shop product page container ****************************** */}
      {/* ****************************************************************************************** */}

      <div className="shop-product container-fluid">
        <div className="container">
          <div className="row ">
            {/* ****************************************************************************************** */}
            {/* ******************************* shop product left section ******************************** */}
            {/* ****************************************************************************************** */}

            <div className="col-3 left-section">
              <form class="d-flex">
                <input
                  class="form-control me-2 fs-4"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  value={Search}
                />
                <button
                  class="shop-now-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    getSearchFilterData();
                  }}
                >
                  <i className="fa-solid fa-angle-right fs-4 text-white"></i>
                </button>
              </form>

              <div className="filter-part">
                <h1 className="mb-5">Filter By Price</h1>
                <Box sx={{ width: 250 }}>
                  <Slider
                    getAriaLabel={() => "Minimum distance"}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    disableSwap
                  />

                  <button
                    type="button"
                    class="btn btn-secondary btn-lg"
                    disabled
                  >
                    $ {value1[0] + 10}
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary btn-lg"
                    disabled
                  >
                    $ {value1[1]}
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary btn-lg"
                    onClick={() => {
                      min.current = value1[0] + 10;
                      max.current = value1[1];
                      filterProducts();
                    }}
                  >
                    Go
                  </button>
                </Box>
              </div>

              <div className="links ">
                <ul>
                  <li className="nav-item">
                    <Link className="nav-link green fs-3" to="/grocery">
                      Grocery <span className="text-dark fs-5">(10)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link green fs-3" to="/juice">
                      Juice <span className="text-dark  fs-5">(10)</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <h1 className="mb-5">Related Products</h1>
              <div className="filter-left-section-card ">
                <div class="card mb-5">
                  <img src={coffee} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title green fs-2 fw-light">
                      Natural Extracted Oil
                    </h5>
                    <p class="card-text fs-4">
                      <span className="grey me-2 fs-4 text-decoration-line-through">
                        $34.00
                      </span>
                      $30.00
                    </p>
                  </div>
                </div>

                <div class="card mb-5">
                  <img src={coffee} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title green fs-2 fw-light">
                      Natural Extracted Oil
                    </h5>
                    <p class="card-text fs-4">
                      <span className="grey me-2 fs-4 text-decoration-line-through">
                        $34.00
                      </span>
                      $30.00
                    </p>
                  </div>
                </div>
                <div class="card mb-5">
                  <img src={coffee} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title green fs-2 fw-light">
                      Natural Extracted Oil
                    </h5>
                    <p class="card-text fs-4">
                      <span className="grey me-2 fs-4 text-decoration-line-through">
                        $34.00
                      </span>
                      $30.00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ****************************************************************************************** */}
            {/* ******************************* shop product right section ******************************* */}
            {/* ****************************************************************************************** */}
            <div className="col-9 right-section">
              <nav aria-label="breadcrumb" className=" bg-transparent">
                <ol class="breadcrumb bg-transparent">
                  <li class="breadcrumb-item">
                    <Link className="grey" to="/">
                      Home
                    </Link>
                  </li>
                  <li class="breadcrumb-item">
                    <Link className="grey" to="/shop">
                      {heading}
                    </Link>
                  </li>
                </ol>
              </nav>
              <h1 className=" heading text-capitalize">{heading}</h1>
              <p className="para fs-4 roboto">
                Showing {currentPage}-{currentPageData.length} of
                <span> {productData.length}</span> results
              </p>

              {/* ************************************************************************************* */}
              {/* ******************************* shop product gallery ******************************** */}
              {/* ************************************************************************************* */}

              <div className="shop-products-gallery d-flex flex-wrap ">
                {currentPageData?.map((val) => {
                  return <Card val={val} />;
                })}
              </div>

              {/* **************************************************************************************** */}
              {/* ******************************* shop product pagination ******************************** */}
              {/* **************************************************************************************** */}

              <Pagination
                totalData={productData.length}
                dataPerPage={DataPerPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shoppage;
