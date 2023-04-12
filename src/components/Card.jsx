import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";

const Card = (props) => {
  let count = 0;
  let rat = 0;
  let avgRating = 0;
  const { _id, title, category, price, images, rating } = props?.val;

  // console.log(rating.length, 10);

  if (rating?.length != 0) {
    for (let i of rating) {
      rat++;
      count += i.star;
    }
    avgRating = Math.ceil(count / rat);
  } else {
    avgRating = 0;
  }

  const navigate = useNavigate();

  return (
    <>
      <div className="card">
        <img
          src={`${process.env.REACT_APP_BASE_URL}/${images}`}
          className="card-img-top"
          alt={`${title} photo`}
          onClick={() => {
            navigate(`/productpage/${_id}`);
          }}
        />
        <div className="card-body text-center">
          <p className="card-text grey">{category}</p>
          <h2 className="mt-3 text-capitalize">{title}</h2>
          <div className="mt-3 fs-4 stars d-flex align-items-center  justify-content-center">
            <Rating
              name="read-only"
              value={avgRating}
              size="large"
              readOnly
              className="fs-1 mt-4 ms-4"
            />
            <span className="roboto mt-4">({rating.length})</span>
          </div>
          <p className=" fs-4 mt-3 fw-bold roboto">${price.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
